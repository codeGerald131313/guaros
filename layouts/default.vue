<template>

    <body class="header-sticky header-over">
        <div id="wrapper">
            <Header />
            <nuxt />
            <DialogflowWidget />
            <Footer />
        </div>
    </body>
</template>

<script>

import DialogflowWidget from '../components/DialogflowWidget.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default {
    name: 'default',
    components: {
        Header,
        DialogflowWidget,
        Footer,
    }
}
</script>

<style >
/* Estilos globales para el diseño */
</style>
