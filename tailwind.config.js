module.exports = {
  purge: [],
  theme: {
    extend: {}
  },
  variants: {
    boxShadow: ["responsive", "hover", "focus", "active", "group-hover"]
  },
  plugins: [require("@tailwindcss/ui")]
};
