import { FlatCompat } from "@eslint/eslintrc";
import { globalIgnores } from "eslint/config";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const config = [
  ...compat.extends("next/core-web-vitals"),
  globalIgnores([".next/**", "out/**", "dist/**", "coverage/**", "tailwind.preset.js"]),
  {
    rules: {
      "@next/next/no-page-custom-font": "off",
      "react/display-name": "off",
      "react/jsx-no-comment-textnodes": "off",
    },
  },
];

export default config;
