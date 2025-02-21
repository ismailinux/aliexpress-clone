// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxt/icon',
    //'@nuxt/ui',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],
  icon: {
    clientBundle: {
          scan: true,
          sizeLimitKb: 256, }, },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/",
      exclude: ["/"],
    },
  },
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    },
    stripeSecret: process.env.STRIPE_SECRET_KEY, // Keep secret keys here (server-only)
  },
  app: {
    head: {
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true }
      ],
    }
  },

  
})