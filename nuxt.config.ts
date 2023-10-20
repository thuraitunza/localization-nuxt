// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 👇 Register the module
  modules: ["@nuxtjs/i18n"],

  routeRules: {
    "/": { redirect: "/en-CA" },
  },

  // 👇 Configure the module
  i18n: {
    // Adding English-Canada and Arabic-Egypt
    // as our supported locales. You can add as
    // many locales as you want here.
    locales: [
      { code: "en-CA", iso: "en-CA", dir: "ltr" }, 
      { code: "ar-EG", iso: "ar-EG", dir: "rtl" },
    ],

    // Used when active locale is not explicitly defined
    defaultLocale: "en-CA",

    // Disabling automatic locale detection (see below)
    detectBrowserLanguage: false,

    vueI18n: "./i18n.config.ts",
  },

  
})
