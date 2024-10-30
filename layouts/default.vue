<template>

    <body class="header-sticky header-over">
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N8K2TJG6" height="0" width="0"
                style="display:none;visibility:hidden"></iframe>
        </noscript>
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

<style>
/* Estilos globales para el diseño */
</style>
