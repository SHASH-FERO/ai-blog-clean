import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import ViteSitemap from "vite-plugin-sitemap";

export default defineConfig(async () => {
  const plugins = [
    react(),
    tailwindcss(),
    ViteSitemap({
      hostname: "https://earnmoneyai.netlify.app",
    }),
  ];

  try {
    // @ts-ignore
    const m = await import("./.vite-source-tags.js");
    plugins.push(m.sourceTags());
  } catch {}

  return {
    plugins,
  };
});