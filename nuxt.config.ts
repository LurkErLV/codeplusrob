// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ["@/public/assets/scss/global.scss"],
    modules: [
        '@nuxt/image',
    ],
    routeRules: {
        '/': {prerender: true},
    },
    app: {
        head: {
            title: "CODE+ROB | Chicago"
        }
    }
})
