<template>
    <header id="header" class="shadow-xs">
        <!-- HEADER -->
        <div class="container position-relative">
            <nav class="navbar navbar-expand-lg navbar-light justify-content-lg-between justify-content-md-inherit">
                <div class="align-items-start">
                    <!-- mobile menu button : show -->
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainNav"
                        aria-controls="navbarMainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <svg width="25" viewBox="0 0 20 20">
                            <path
                                d="M 19.9876 1.998 L -0.0108 1.998 L -0.0108 -0.0019 L 19.9876 -0.0019 L 19.9876 1.998 Z">
                            </path>
                            <path
                                d="M 19.9876 7.9979 L -0.0108 7.9979 L -0.0108 5.9979 L 19.9876 5.9979 L 19.9876 7.9979 Z">
                            </path>
                            <path
                                d="M 19.9876 13.9977 L -0.0108 13.9977 L -0.0108 11.9978 L 19.9876 11.9978 L 19.9876 13.9977 Z">
                            </path>
                            <path
                                d="M 19.9876 19.9976 L -0.0108 19.9976 L -0.0108 17.9976 L 19.9876 17.9976 L 19.9876 19.9976 Z">
                            </path>
                        </svg>
                    </button>

                    <!-- Logo -->
                    <a class="navbar-brand" href="https://guarosgroup.com">
                        <img src="img/logo.png" width="75" height="45" alt="logo guaros group">
                    </a>
                </div>

                <div class="collapse navbar-collapse navbar-animate-fadein" id="navbarMainNav">
                    <!-- NAVIGATION -->
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <nuxt-link class="nav-link breadcrumb-item" to="/tours">Tours</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link breadcrumb-item" to="/packs">Paquetes</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link breadcrumb-item" to="/hotels">Hoteles</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link breadcrumb-item" to="/contact">Contacto</nuxt-link>
                        </li>
                    </ul>
                </div>

                <!-- User or Register Button -->
                <ul class="list-inline list-unstyled mb-0 d-flex align-items-end">
                    <li v-if="!isLoggedIn" class="list-inline-item ml--6 mr--6">
                        <a href="/register" class="btn btn-youtube transition-hover-top">Registrarse</a>
                    </li>
                    <li v-else class="list-inline-item dropdown">
                        <a href="#" class="dropdown-toggle" id="userDropdown" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <img :src="user.avatar" alt="User Avatar" class="rounded-circle" width="40" height="40">
                            <span class="ml-2">{{ user.name }}</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <nuxt-link class="dropdown-item" to="/MyReservations">Mis reservas</nuxt-link>
                            <nuxt-link class="dropdown-item" to="/my-account">Mi cuenta</nuxt-link>
                            <a href="/logout" class="dropdown-item">Cerrar sesión</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isLoggedIn: true, // Cambia esto a true para simular un usuario registrado
            user: {
                name: 'Sara Rosario',
                avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
            }
        };
    },
    methods: {
        reloadPage() {
            if (['/tours', '/', '/ReservationTours'].includes(this.$route.path)) {
                location.replace(this.$route.fullPath);
            }
        }
    },
    watch: {
        '$route'(to, from) {
            // Evita recargar si ya estamos en la misma ruta
            if (['/tours', '/', '/ReservationTours'].includes(to.path) && to.path !== from.path) {
                location.replace(to.fullPath);
            }
        }
    }
}
</script>


<style scoped>
/* Ajusta la visibilidad del nombre del usuario */
.dropdown-toggle span {
    color: white;
    /* Ajusta el color del nombre para que sea más visible */
    font-weight: bold;
}

.dropdown-menu {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-menu a {
    color: #333;
}

.dropdown-menu a:hover {
    background-color: #f1f1f1;
}
</style>
