import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SuperLaundry-Frontend/",
  plugins: [react()],
  server: {
    proxy: "https://superlaundryapp.onrender.com",
  },
});
