<template>
    <div>

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
    // Agrega la clase al body cuando el componente está montado
    document.body.classList.add('header-sticky', 'header-over');
    
  },
  beforeDestroy() {
    // Elimina la clase del body cuando el componente se destruye
    document.body.classList.remove('header-sticky', 'header-over');
  }
}

</script>



  
  <style>
  /* Estilos globales para el diseño */
  </style>
  
