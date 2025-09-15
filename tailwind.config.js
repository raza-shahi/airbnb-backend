module.exports = {
  content: [
    "./views/**/*.{html,ejs}",   // scan all HTML files in views
    "./public/*/*.js"        // (optional) if you add custom JS using Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
