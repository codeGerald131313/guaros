export default {
  // Global page headers
  head: {
    title: 'Guaros Tours | Agencia de turismo, viajes aéreos y servicio hotelero en taraporo',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Agencia de turismo, Agencia de viajes aéreos y Agencia de servicio hotelero en Taraporo' },
      { name: 'theme-color', content: '#377dff' },
      { name: 'csrf-token', content: '3GFNeJRC0B6aG6L467jjGE3jRpSFs7AS0hQA5V0h' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/logo/icon_512x512.png' },
      { rel: 'manifest', href: 'images/manifest/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com/' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com/' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com/' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com/' },
      { rel: 'stylesheet', href: 'css/core.min.css' },
      { rel: 'stylesheet', href: 'css/vendor_bundle.min.css' },

    ],
    script: [
      { src: '/livewire/livewire.js?id=21fa1dd78491a49255cd', 'data-turbo-eval': 'false', 'data-turbolinks-eval': 'false' },


      { src: '/js/core.min.js', defer: true },
      { src: '/js/app.js', defer: true },
      {
        src: '/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
        async: false,
        defer: true,
        'data-cfasync': false
      },
      // Google Tag Manager (gtag.js)
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-SSMQYY2R5Q', async: true },
      {
        innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SSMQYY2R5Q');
    `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    bodyAttrs: {
      class: 'header-sticky header-over'
    },
    __dangerouslyDisableSanitizersByTagID: {
      'livewire-init': ['innerHTML']
    }
  },
  bridge: true,

  // Global CSS
  css: [
    '@/assets/css/core.min.css',
    '@/assets/css/vendor.daterangepicker.min.css',
    '@/assets/css/leaflet.css',
    '@/assets/css/vendor.swiper.min.css',
    '@/assets/css/vendor_bundle.min.css',
  ],


  // Plugins to run before rendering page
  plugins: [
    // Añade plugins si es necesario
  ],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: [
    // Añade módulos de build si es necesario
  ],
  axios: {
    // Configura la base URL si es necesario
    baseURL: 'http://localhost:8000', // Cambia a la URL de tu API
  },
  // Modules
  modules: [
    '@nuxtjs/axios',
  ],

  build: {
    // Asegúrate de no tener configuraciones que eliminen o modifiquen el procesamiento de CSS
    extractCSS: true, // Fuerza la extracción de CSS en un archivo separado
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        // Otros plugins postcss si es necesario
      },
    },
  },

}
