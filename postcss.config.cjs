// postcss.config.cjs
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.{html,ts,tsx,js,jsx,vue}'],  // Adjust the file extensions for your TypeScript project
      safelist: ['bg-red-500', 'text-center'],  // Safelist specific classes
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],  // Default extractor for class names
    }),
  ],
};
