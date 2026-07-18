import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT — GitHub Pages base path:
// If you deploy to https://<username>.github.io/<repo-name>/  -> set base to "/<repo-name>/"
// If you deploy to https://<username>.github.io/  (a "username.github.io" repo) -> set base to "/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
