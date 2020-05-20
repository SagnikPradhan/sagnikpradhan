const preprocess = require('svelte-preprocess');

module.exports = {
  // we'll extract any component CSS out into
  // a separate file — better for performance
  css: css => {
    css.write('public/build/bundle.css');
  },
  // preprocess
  preprocess: preprocess({})
}
