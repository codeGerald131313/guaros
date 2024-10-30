<template>

    <body class="header-sticky header-over">
        <div id="wrapper">
            <Header />
            <nuxt />
            <Footer />
        </div>
    </body>
</template>

<script>

import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default {
    name: 'default',
    components: {
        Header,
        Footer,
    }
}
</script>

<style >
/* Estilos globales para el diseño */
</style>
