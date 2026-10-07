import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { cream: "#F5F0D8", sage: "#DDE4B5", lav: "#765684", deep: "#594064", lime: "#C9D77A", ink: "#302B35", wine: "#5A1F24" } } },
  plugins: [],
};
export default config;
