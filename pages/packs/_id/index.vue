<template>
    <!-- Page Content -->
    <main>
        <div class="">
            <!-- COVER -->
            <section class="p-0 jarallax overlay-dark overlay-opacity-6 text-white">
                <!-- jarallax image -->
                <img class="jarallax-img" :src="imagePortadaUrl" alt="Portada" />
                <div class="container">
                    <div class="d-middle col-12 col-md-12 col-lg-6 min-h-75vh text-center-xs">
                        <div class="mt-7overflow-hidden">
                            <h1 class="font-weight-light mb-2">
                                <span class="font-weight-light">{{ pack.nombre }}</span>
                            </h1>
                            <p class="lead"><br /><span>Reserva ahora mismo!</span></p>
                            <div class="mt-4">
                                <a aria-label="See our video"
                                    :href="pack.video_link || 'https://www.youtube.com/watch?v=tSpyQqVDCR0'"
                                    data-ajax-modal-type="video" data-ajax-modal-size="modal-xl"
                                    data-ajax-modal-centered="true"
                                    class="btn bg-snapchat transition-hover-top mb-3 d-block-xs js-ajax-modal d-inline-flex">
                                    <i class="fi fi-arrow-right"></i>
                                    Video del Paquete
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /COVER -->

            <!-- PRODUCT -->
            <section class="pt-4 pb-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-7 order-1 mb-5">
                            <div class="row d-flex align-items-stretch">
                                <!-- Large image on the left side -->
                                <div class="col-md-8 d-flex">
                                    <img v-if="pack.tours[0]"
                                        :src="`http://localhost:8001/storage/${pack.tours[0].imagen_portada}`"
                                        class="img-fluid rounded" alt="Main Image"
                                        style="width: 100%; object-fit: cover; height: 100%;" />
                                </div>

                                <!-- Smaller images on the right side -->
                                <div class="col-md-4 d-flex flex-column justify-content-between">
                                    <div class="mb-3 flex-fill">
                                        <img v-if="pack.tours[1]"
                                            :src="`http://localhost:8001/storage/${pack.tours[1].imagen_portada}`"
                                            class="img-fluid rounded" alt="Small Image 1"
                                            style="width: 100%; height: 100%; object-fit: cover;" />
                                    </div>
                                    <div class="mb-3 flex-fill">
                                        <img v-if="pack.tours[2]"
                                            :src="`http://localhost:8001/storage/${pack.tours[2].imagen_portada}`"
                                            class="img-fluid rounded" alt="Small Image 2"
                                            style="width: 100%; height: 100%; object-fit: cover;" />
                                    </div>
                                    <div class="flex-fill">
                                        <img v-if="pack.tours[3]"
                                            :src="`http://localhost:8001/storage/${pack.tours[3].imagen_portada}`"
                                            class="img-fluid rounded" alt="Small Image 3"
                                            style="width: 100%; height: 100%; object-fit: cover;" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-5 order-2 mb-5">
                            <!-- PRICE -->
                            <h4 class="font-weight-medium mb-3" style="color: #b00;">Tickets y precios</h4>
                            <div class="border-bottom pb-2 mb-4 text-center-xs" style="border-color: #b00;">
                                <p class="text-muted m-0">
                                    <del>Agencia - S/. {{ pack.precio }}</del>
                                    <span style="color: #b00;" class="font-light fs--14">
                                        /
                                        <span class="font-weight-medium">ahorra S/.{{ ahorro }}</span>
                                    </span>
                                </p>
                                <p class="fs--25 m-0 font-weight-medium" style="color: #b00;">
                                    S/. {{ pack.precio }} <span class="font-weight-bold fs--14"
                                        style="color: #b00;">Online</span>
                                </p>
                            </div>

                            <!-- Date Selection -->
                            <div class="mb-3">
                                <p class="mb-1" style="color: #b00;">Indica una fecha para ver la disponibilidad</p>
                                <div class="date-container">
                                    <button @click="decrementDate" class="arrow-btn">&lsaquo;</button>
                                    <div class="d-flex">
                                        <button v-for="(date, index) in displayedDates" :key="index"
                                            @click="selectDate(index)"
                                            :class="{ 'date-btn selected': index === selectedDate, 'date-btn': index !== selectedDate }">
                                            {{ formatDate(date) }}
                                        </button>
                                    </div>
                                    <button @click="incrementDate" class="arrow-btn">&rsaquo;</button>
                                </div>
                            </div>

                            <!-- Time Selection -->
                            <div class="mb-3">
                                <p style="color: #b00;">Selecciona una hora:</p>
                                <button class="btn btn-outline-danger"
                                    style="border-color: #b00; color: #b00;">15:00</button>
                            </div>

                            <!-- RESERVATION FORM -->
                            <div class="booking-widget border p-3 rounded shadow-sm mt-4" style="border-color: #b00;">
                                <h5 class="font-weight-medium" style="color: #b00;">{{ pack.nombre }}</h5>
                                <p class="text-success">Cancelación gratis disponible</p>
                                <p class="text-muted">Recogida incluida</p>

                                <!-- Language selection -->
                                <label style="color: #b00;">Idioma</label>
                                <select v-model="selectedLanguage" class="form-control mb-3"
                                    style="border-color: #b00;">
                                    <option value="es">Español - Guía turístico</option>
                                    <option value="en">Inglés - Guía turístico</option>
                                </select>

                                <!-- Ticket selection -->
                                <!-- Adulto (edad: 18-60) -->
                                <div style="margin-bottom: 15px;">
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <span style="color: #b00;">Adulto (edad: 18-60)</span>
                                        <div style="display: flex; align-items: center;">
                                            <button class="btn btn-outline-danger" @click="decrement('adults')"
                                                style="border-color: #b00;">
                                                -
                                            </button>
                                            <input type="number" v-model="adults" class="form-control"
                                                style="width: 50px; text-align: center; margin: 0 10px; border-color: #b00;" />
                                            <button class="btn btn-outline-danger" @click="increment('adults')"
                                                style="border-color: #b00;">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <span style="color: #b00; display: block; margin-top: 5px;">S/ {{ pack.precio
                                        }}</span>
                                </div>

                                <!-- Infantil (edad: 0-3) -->
                                <div style="margin-bottom: 15px;">
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <span style="color: #b00;">Infantil (edad: 0-3)</span>
                                        <div style="display: flex; align-items: center;">
                                            <button class="btn btn-outline-danger" @click="decrement('children')"
                                                style="border-color: #b00;">
                                                -
                                            </button>
                                            <input type="number" v-model="children" class="form-control"
                                                style="width: 50px; text-align: center; margin: 0 10px; border-color: #b00;" />
                                            <button class="btn btn-outline-danger" @click="increment('children')"
                                                style="border-color: #b00;">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <span style="color: #b00; display: block; margin-top: 5px;">S/ 0.00</span>
                                </div>

                                <!-- Total and booking button -->
                                <p class="font-weight-bold mt-3">
                                    Total: <span style="color: #b00;">S/ {{ totalPrice }}</span>
                                </p>
                                <button @click.prevent="goToReservation" class="btn btn-danger btn-block"
                                    style="background-color: #b00; border-color: #b00;">
                                    Reservar
                                </button>
                            </div>

                            <!-- Specifications -->
                            <div class="mt-5">
                                <h3 class="h5">INCLUYE</h3>
                                <ul class="list-unstyled mb-0">
                                    <li v-if="pack.con_hotel === 'SI'" class="list-item clearfix border-bottom py-2">
                                        <i class="float-end fas fa-check text-success fs--20"></i>
                                        <span class="text-success">
                                            <i class="fas fa-bed fs--20"></i>
                                            <span class="d-inline-block px-2">Hotel</span>
                                        </span>
                                    </li>
                                    <li v-if="pack.con_pasaje === 'SI'" class="list-item clearfix border-bottom py-2">
                                        <i class="float-end fas fa-check text-success fs--20"></i>
                                        <span class="text-success">
                                            <i class="fas fa-plane fs--20"></i>
                                            <span class="d-inline-block px-2">Pasajes Aéreos</span>
                                        </span>
                                    </li>
                                    <li class="list-item clearfix border-bottom py-2">
                                        <i class="float-end fas fa-check text-success fs--20"></i>
                                        <span class="text-success">
                                            <i class="fas fa-clock fs--20"></i>
                                            <span class="d-inline-block px-2">{{ pack.tiempo }}</span>
                                        </span>
                                    </li>
                                </ul>

                                <h3 class="h5 mt-2">NO INCLUYE</h3>
                                <ul class="list-unstyled mb-0">
                                    <li v-if="pack.con_hotel === 'NO'" class="list-item clearfix border-bottom py-2">
                                        <i class="float-end fas fa-times text-danger fs--20"></i>
                                        <span class="text-muted">
                                            <i class="fas fa-bed fs--20"></i>
                                            <span class="d-inline-block px-2">Hotel</span>
                                        </span>
                                    </li>
                                    <li v-if="pack.con_pasaje === 'NO'" class="list-item clearfix border-bottom py-2">
                                        <i class="float-end fas fa-times text-danger fs--20"></i>
                                        <span class="text-muted">
                                            <i class="fas fa-plane fs--20"></i>
                                            <span class="d-inline-block px-2">Pasajes Aéreos</span>
                                        </span>
                                    </li>
                                </ul>

                                <div class="fs--13 text-muted mt-2">
                                    Última Actualización:
                                    <time datetime="2019-07-18">{{ pack.updated_at_formatted }}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /PRODUCT -->

            <!-- SUGGESTIONS -->
            <section class="bg-theme-color-light p-0 mb-4">
                <div class="container">
                    <div class="bg-gray-400 py-2 pl-2" data-gfont="Courgette">
                        <h3>
                            Detalle del <span class="text-danger">{{ pack.nombre }}</span>
                        </h3>
                        <small class="d-block h6">Lista de Tours que incluye el paquete</small>
                    </div>

                    <div v-for="(tour, index) in pack.tours" :key="tour.id" class="row mb-5 mt-4">
                        <div class="col-md-2 text-center">
                            <!-- avatar -->
                            <span class="w--80 h--80 rounded-circle d-inline-block bg-cover"
                                :style="{ backgroundImage: `url('http://localhost:8001/storage/${tour.imagen_perfil}')` }">
                            </span>
                            <div class="mt-2">
                                <a href="#">Día {{ index + 1 }}</a>
                                <p class="d-block fs--12 text-muted">Tour</p>
                            </div>
                        </div>

                        <div class="col-md-10">
                            <div class="mb-2">
                                <h5>{{ tour.nombre }}</h5>
                                <!-- Rating icons with FontAwesome -->
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star-half-alt text-warning"></i>
                            </div>

                            <p>{{ tour.historia }}</p>

                            <!-- user images -->
                            <div class="clearfix">
                                <a class="photoswipe" data-photoswipe="gallery-review-id-1" :href="tour.imagen_portada">
                                    <img class="float-start mb-1 rounded lazy"
                                        :src="`http://localhost:8001/storage/` + tour.imagen_portada" :alt="tour.nombre"
                                        style="width: 140px; height: 100px; object-fit: cover;" />
                                </a>
                            </div>

                            <!-- review options -->
                            <ul class="list-inline my-4">
                                <li class="list-inline-item d-block-xs m-0-xs">
                                    <a href="https://guarosgroup.com/tour/detalle/tours-catarata-de-ahuashiyacu"
                                        class="btn-toggle btn btn-light bg-dark text-white py-1 px-2 mb-1 fs--14 d-block-xs text-align-start">
                                        <span class="group-icon">
                                            <!-- Eye icon (Ver) -->
                                            <i class="fas fa-eye"></i>
                                            <!-- Like icon with primary color (Me gusta) -->
                                            <i class="fas fa-thumbs-up text-primary"></i>
                                        </span>
                                        <span>Ver más</span>
                                    </a>
                                </li>
                            </ul>
                            <!-- /review options -->
                        </div>
                    </div>
                </div>
            </section>
            <!-- /SUGGESTIONS -->

            <!-- CALL TO ACTION -->
            <section class="bg-gradient-dark py-5">
                <div class="container">
                    <div class="row text-center-xs">
                        <div class="col-12 col-md-8">
                            <h3 class="m-0 font-weight-light">La vida es un viaje y quien viaja vive dos veces!</h3>
                            <p class="m-0">Guaros Group Tu mejor aliado!</p>
                        </div>

                        <div class="col-12 mt-4 d-block d-md-none">
                            <!-- mobile spacer -->
                        </div>

                        <div class="col-12 col-md-4 text-align-end">
                            <a href="https://wa.link/it5ur7" target="_black" class="btn btn-sm btn-danger">
                                <i class="fi fi-heart-slim m-0-md"></i>
                                <span class="d-none d-lg-inline-block">Reserva aquí</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /CALL TO ACTION -->
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            pack: {
                nombre: '',
                descripcion: '',
                tours: [],
                img_portada: '',
                precio: '',
                con_hotel: '',
                con_pasaje: '',
                tiempo: '',
                updated_at_formatted: '',
                images: [],
            },
            adults: 0,
            juniors: 0,
            children: 0,
            selectedLanguage: 'es', // Valor predeterminado para el idioma seleccionado
            selectedDate: 0, // Índice de la fecha seleccionada
            currentDate: new Date(), // Fecha actual
            displayedDates: [] // Fechas que se mostrarán
        };
    },
    computed: {
        totalPrice() {
            return this.adults * this.pack.precio + this.juniors * 60.52; // Calcula el total basado en adultos y juniors
        },
        ahorro() {
            return this.pack.precio - this.pack.precio * 0.9; // Ejemplo de ahorro del 10%
        },
        imagePortadaUrl() {
            return `http://localhost:8001/storage/` + this.pack.img_portada;
        }
    },
    async mounted() {
        await this.fetchPack();
        this.generateDates();
    },
    methods: {
        async fetchPack() {
            try {
                const packId = this.$route.params.id;
                const response = await axios.get(`http://localhost:8001/api/v1/packs-client/pack/${packId}`);
                this.pack = response.data;
            } catch (error) {
                console.error('Error fetching pack data:', error);
            }
        },
        goToReservation() {
            const linkData = {
                path: '/ReservationPacks',
                query: {
                    packName: this.pack.nombre,
                    adults: this.adults,
                    juniors: this.juniors,
                    children: this.children,
                    price: this.pack.precio,
                    totalPrice: this.totalPrice,
                    selectedDate: this.displayedDates[this.selectedDate], // Enviamos la fecha completa
                    language: this.selectedLanguage // Enviar el idioma seleccionado
                }
            };

            console.log('Datos que se están enviando:', linkData);

            this.$router.push(linkData);
        },
        increment(type) {
            if (type === 'adults') {
                this.adults++;
            } else if (type === 'children') {
                this.children++;
            } else if (type === 'juniors') {
                this.juniors++;
            }
        },
        decrement(type) {
            if (type === 'adults' && this.adults > 0) {
                this.adults--;
            } else if (type === 'children' && this.children > 0) {
                this.children--;
            } else if (type === 'juniors' && this.juniors > 0) {
                this.juniors--;
            }
        },
        generateDates() {
            this.displayedDates = [];
            for (let i = -1; i <= 2; i++) {
                const date = new Date();
                date.setDate(this.currentDate.getDate() + i);
                this.displayedDates.push(new Date(date));
            }
        },
        selectDate(index) {
            this.selectedDate = index;
            console.log("Fecha seleccionada: ", this.displayedDates[index]);
        },
        incrementDate() {
            this.currentDate.setDate(this.currentDate.getDate() + 1);
            this.generateDates();
        },
        decrementDate() {
            this.currentDate.setDate(this.currentDate.getDate() - 1);
            this.generateDates();
        },
        formatDate(date) {
            const options = { weekday: 'short', day: 'numeric', month: 'short' };
            return date.toLocaleDateString('es-ES', options);
        }
    }
};
</script>

<style scoped>
/* Estilos personalizados */
.fs-5 {
    font-size: 1.25rem;
}

.me-2 {
    margin-right: 0.5rem;
}

.date-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.date-btn {
    background-color: transparent;
    border: 2px solid #b00;
    border-radius: 10px;
    padding: 10px;
    margin: 0 5px;
    font-size: 14px;
    text-align: center;
    width: 60px;
    height: 100px;
    transition: background-color 0.3s, color 0.3s, transform 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #b00;
}

.date-btn.selected {
    background-color: #b00;
    color: white;
}

.date-btn:hover {
    transform: scale(1.05);
}

.arrow-btn {
    background-color: transparent;
    border: none;
    color: #b00;
    font-size: 24px;
    padding: 5px 10px;
    cursor: pointer;
    transition: color 0.3s, transform 0.2s;
}

.arrow-btn:hover {
    color: #900;
    transform: scale(1.2);
}

.arrow-btn:focus {
    outline: none;
}

.date-container button {
    cursor: pointer;
}

.sticky-form {
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    z-index: 10;
}
</style>