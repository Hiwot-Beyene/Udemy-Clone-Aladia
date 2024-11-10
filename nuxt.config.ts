export default defineNuxtConfig({
  ssr: false,  // Disable SSR for static deployment
  app: {
    baseURL: '/',  // Set the base URL to the root of the repository
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Add Tailwind CSS and PostCSS config
  css: ['@/assets/css/tailwind.css'],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
