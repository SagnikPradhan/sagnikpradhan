import autoPreprocess from 'svelte-preprocess'

module.exports = {
    dev: true,
    css: (css) => {
        css.write('public/build/bundle.css')
    },
    preprocess: autoPreprocess(),
}
