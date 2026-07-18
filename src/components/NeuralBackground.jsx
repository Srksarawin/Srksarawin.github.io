import { useEffect, useRef } from "react";

// Ambient, low-opacity node network. Purely decorative — sits behind the hero.
export default function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width, height, nodes, animationId;
    const NODE_COUNT = 46;
    const LINK_DIST = 130;

    function resize() {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }

    function init() {
      resize();
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = LINK_DIST * devicePixelRatio;
          if (dist < maxDist) {
            ctx.strokeStyle = `rgba(79, 232, 196, ${0.12 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = "rgba(79, 169, 232, 0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6 * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(step);
      }
    }

    init();
    step();

    const handleResize = () => {
      cancelAnimationFrame(animationId);
      init();
      step();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-bg" aria-hidden="true" />;
}
