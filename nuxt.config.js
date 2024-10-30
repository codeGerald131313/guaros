export default {
  // Encabezados de página globales
  head: {
    title: 'Guaros Tours | Agencia de turismo, viajes aéreos y servicio hotelero en Tarapoto',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Agencia de turismo, Agencia de viajes aéreos y Agencia de servicio hotelero en Tarapoto' },
      { name: 'theme-color', content: '#377dff' },
      { name: 'csrf-token', content: '3GFNeJRC0B6aG6L467jjGE3jRpSFs7AS0hQA5V0h' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/logo/icon_512x512.png' },
      { rel: 'manifest', href: 'images/manifest/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap' }
    ],
    script: [
      // Google Analytics
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-SSMQYY2R5Q',
        async: true
      },
      {
        json: {
          dataLayer: [],
          config: {
            id: 'G-SSMQYY2R5Q'
          }
        },
        type: 'application/json',
        charset: 'utf-8'
      },
      // Google Tag Manager
      {
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N8K2TJG6');`,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'google-tag-manager': ['innerHTML'],
      'google-analytics': ['innerHTML']
    }
  },

  // CSS global
  css: [
    '@/assets/css/core.min.css',
    '@/assets/css/vendor.daterangepicker.min.css',
    '@/assets/css/leaflet.css',
    '@/assets/css/vendor.swiper.min.css',
    '@/assets/css/vendor_bundle.min.css'
  ],

  // Otros ajustes
  components: true,
  axios: { baseURL: 'cc' },  // Cambiar a la URL de tu API si es necesario
  modules: ['@nuxtjs/axios'],
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {}
      }
    }
  }
}
