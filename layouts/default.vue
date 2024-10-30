<template>
    <div>
      <!-- Google Tag Manager (noscript) -->
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N8K2TJG6" 
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
      <!-- End Google Tag Manager (noscript) -->
      
      <div id="wrapper">
        <Header />
        <nuxt />
        <Footer />
      </div>
    </div>
  </template>


<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default {
  name: 'default',
  components: {
    Header,
    Footer,
  },
  mounted() {

     document.body.classList.add('header-sticky', 'header-over');
    // Inyecta el Google Tag Manager en el <head>
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-N8K2TJG6');
    `;
    document.head.appendChild(script);
  }
     beforeDestroy() {
      // Elimina la clase del body cuando el componente se destruye
      document.body.classList.remove('header-sticky', 'header-over');
    }
}
</script>



  
  <style>
  /* Estilos globales para el diseño */
  </style>
  
