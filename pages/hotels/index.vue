<template>
    <!-- Page Content -->
    <main>
        <!-- COVER -->
        <!-- COVER -->
        <section class="p-0 jarallax overlay-dark overlay-opacity-6 text-white">
            <!-- jarallax image -->
            <img class="jarallax-img"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/350767564.jpg?k=31998d3f4d249588ad720958541a9b2c6468774ec03abcfe8fa5e4fc29a605ea&o=&hp=1"
                alt="...">

            <div class="container position-relative"> <!-- Asegúrate de que el contenedor tenga position: relative -->
                <div class="d-middle col-12 col-md-12 col-lg-6 min-h-75vh text-center-xs">
                    <div class="mt-7 overflow-hidden mb-8">
                        <h1 class="font-weight-light mb-4">
                            <span class="font-weight-medium">Hoteles en la región San Martin</span>
                        </h1>
                        <p class="lead">
                            Experimenta la magia de Tarapoto, visita la selva peruana.
                        </p>

                        <div class="mt-4">
                            <a aria-label="See our video" href="https://www.youtube.com/watch?v=fOr3iPLQn9E"
                                data-ajax-modal-type="video" data-ajax-modal-size="modal-xl"
                                data-ajax-modal-centered="true"
                                class="btn btn-youtube transition-hover-top mb-3 d-block-xs js-ajax-modal d-inline-flex">
                                <i class="fab fa-youtube video-icon-youtube"></i>
                                Ver Video
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Barra de búsqueda (debe estar sobre el contenido de la sección) -->
                <div class="search-bar d-flex align-items-center">
                    <div class="search-bar-item">
                        <input type="text" id="search_destination" placeholder="¿A dónde viajas?"
                            class="form-control border-0">
                    </div>

                    <div class="search-bar-item">
                        <input type="text" id="book_date" name="date" readonly class="form-control border-0 rangepicker"
                            placeholder="Selecciona fechas" autocomplete="off">
                    </div>

                    <div class="search-bar-item">
                        <select id="book_people" name="cantPerson" class="form-control border-0">
                            <option value="">¿Cuántas personas viajan?</option>
                            <option value="1">1 Persona</option>
                            <option value="2">2 Personas</option>
                        </select>
                    </div>

                    <div class="search-bar-item search-bar-button">
                        <button type="submit" class="btn btn-danger w-100">Buscar</button>
                    </div>
                </div>
            </div>
        </section>
        <!-- /COVER -->


        <section class="bg-light pt-2 pb-4">
            <div class="container">
                <!-- title -->
                <div class="max-w-700 mx-auto text-center mb-4 mt-4" data-gfont="Courgette">
                    <h2>
                        Hoteles en <span class="text-danger">San Martin</span>
                    </h2>
                    <small class="d-block h6">Disfruta de los sitios más conocidos de la <b>región</b>!</small>
                </div>

                <div class="row">
                    <div class="col-lg-3">
                        <div class="filters p-4 shadow-sm bg-white">
                            <h5 class="font-weight-bold mb-3">Filtrar por: </h5>
                            <form>
                  
                                <div class="mb-3">
                                    <h6 class="font-weight-bold">Filtros populares</h6>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioMananas">
                                        <label class="form-check-label" for="horarioMananas">
                                            Piscina <span class="text-muted">(10)</span>
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardes">
                                        <label class="form-check-label" for="horarioTardes">
                                            WiFi gratis <span class="text-muted">(2)</span>
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardesNoches">
                                        <label class="form-check-label" for="horarioTardesNoches">
                                            Desayuno incluido <span
                                                class="text-muted">(1)</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <h6 class="font-weight-bold">Instalaciones</h6>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioMananas">
                                        <label class="form-check-label" for="horarioMananas">
                                            Parking <span class="text-muted">(10)</span>
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardes">
                                        <label class="form-check-label" for="horarioTardes">
                                            Restaurant <span class="text-muted">(2)</span>
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardesNoches">
                                        <label class="form-check-label" for="horarioTardesNoches">
                                            Adminte Mascotas <span
                                                class="text-muted">(1)</span>
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardesNoches">
                                        <label class="form-check-label" for="horarioTardesNoches">
                                            Servicio de habitaciones <span
                                                class="text-muted">(1)</span>
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardesNoches">
                                        <label class="form-check-label" for="horarioTardesNoches">
                                            Recepción 24 horas <span
                                                class="text-muted">(1)</span>
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardesNoches">
                                        <label class="form-check-label" for="horarioTardesNoches">
                                            Gimanasio<span
                                                class="text-muted">(1)</span>
                                        </label>
                                    </div>
                                </div>
                                    
                                <div class="mb-3">
                                    <h6 class="font-weight-bold">Comidas</h6>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioMananas">
                                        <label class="form-check-label" for="horarioMananas">
                                            Desayuno incluido <span class="text-muted">(10)</span>
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardes">
                                        <label class="form-check-label" for="horarioTardes">
                                            Con cocina <span class="text-muted">(2)</span>
                                        </label>
                                    </div>
                        
                                </div>

                                <div class="mb-3">
    <h6 class="font-weight-bold">Servicios de la habitación</h6>
    <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="balcon">
        <label class="form-check-label" for="balcon">
            Balcón <span class="text-muted">(47)</span>
        </label>
    </div>


    <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="lavadora">
        <label class="form-check-label" for="lavadora">
            Lavadora <span class="text-muted">(32)</span>
        </label>
    </div>
    <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="banoPrivado">
        <label class="form-check-label" for="banoPrivado">
            Baño privado <span class="text-muted">(111)</span>
        </label>
    </div>
    <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="aireAcondicionado">
        <label class="form-check-label" for="aireAcondicionado">
            Aire acondicionado <span class="text-muted">(65)</span>
        </label>
    </div>

    <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="patio">
        <label class="form-check-label" for="patio">
            Patio <span class="text-muted">(31)</span>
        </label>
    </div>

    <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="terraza">
        <label class="form-check-label" for="terraza">
            Terraza <span class="text-muted">(52)</span>
        </label>
    </div>

</div>

                                <div class="mb-3">
                                    <h6 class="font-weight-bold">Categoría del alojamiento</h6>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioMananas">
                                        <label class="form-check-label" for="horarioMananas">
                                            1 estrella <span class="text-muted">(10)</span>
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardes">
                                        <label class="form-check-label" for="horarioTardes">
                                            2 estrellas <span class="text-muted">(2)</span>
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardes">
                                        <label class="form-check-label" for="horarioTardes">
                                            3 estrellas <span class="text-muted">(2)</span>
                                        </label>
                                    </div>

                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="horarioTardes">
                                        <label class="form-check-label" for="horarioTardes">
                                            4 estrellas <span class="text-muted">(2)</span>
                                        </label>
                                    </div>
                                </div>

                                
                                <div class="mb-3">
                                    <!-- Additional Form Group for Price Range -->
                                    <div class="form-group mt-4">
                                        <label for="priceRange">Tu presupuesto (por noche)</label>
                                        <input type="range" class="form-control-range" id="priceRange"
                                            v-model="priceRange" min="50" max="600" step="50">
                                        <span>S/ {{ priceRange }}+</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-9">
                        <div class="hotels-container row gutters-sm">
                            <div class="col-12 mb-4" v-for="hotel in hotels" :key="hotel.id">
                                <div class="hotel-card d-flex flex-row align-items-start shadow-sm overflow-hidden p-3">
                                    <!-- Imagen del hotel -->
                                    <div class="hotel-image col-md-3 position-relative">
                                        <img :src="hotel.imagen_principal" :alt="hotel.name"
                                            class="img-fluid w-100 rounded">
                                        <span v-if="hotel.breakfast"
                                            class="badge badge-success position-absolute top-0 left-0 m-2">
                                            <i class="fas fa-utensils"></i> Desayuno incluido
                                        </span>
                                    </div>
                                    <!-- Detalles del hotel -->
                                    <div class="hotel-content col-md-6 d-flex flex-column justify-content-between pr-3">
                                        <div>
                                            <h5 class="font-weight-bold">{{ hotel.nombre }}</h5>
                                            <small class="text-muted">
                                                <i class="fas fa-map-marker-alt"></i> {{ hotel.direccion }} - a {{
                                                    hotel.distance }} km del centro
                                            </small>

                                            <!-- Recorrer el array de habitaciones -->
                                            <div v-for="(bedroom, index) in hotel.hotel_type_bedrooms" :key="index">
                                                <p>
                                                    <i class="fas fa-bed"></i> {{ bedroom.typebedroom_description }} -
                                                    S/ {{ bedroom.price }}
                                                </p>

                                            </div>
                                            <p class="text-danger">
                                                <i class="fas fa-exclamation-triangle"></i> Solo quedan {{
                                                    hotel.available_rooms }} habitaciones a este precio
                                            </p>
                                        </div>
                                    </div>
                                    <!-- Calificación y precios -->
                                    <div class="col-md-3 d-flex flex-column align-items-end">
                                        <div class="text-right mb-2" style="font-family: 'Roboto', sans-serif;">
                                            <div class="d-flex align-items-center justify-content-end mb-2"
                                                style="gap: 8px;">
                                                <p class="mb-0 text-muted text-sm" style="font-weight: 500;">
                                                    <i class="fas fa-thumbs-up"></i> Muy bien
                                                </p>
                                                <span class="badge badge-primary"
                                                    style="font-size: 1rem; padding: 0.5rem 0.75rem;">
                                                    {{ hotel.rating }}
                                                </span>
                                            </div>
                                            <p class="text-muted text-sm mb-3">
                                                <i class="fas fa-comments"></i> {{ hotel.reviews }} comentarios
                                            </p>
                                            <div class="d-flex align-items-center justify-content-end mb-2">
                                                <p class="text-muted mb-0 text-sm mr-2">
                                                    <del>S/ {{ hotel.old_price }}</del>
                                                </p>
                                                <h5 class="text-danger mb-0 text-sm" style="font-size: 1.2rem;">
                                                    <i class="fas fa-tag"></i>
                                                    S/ {{ hotel.hotel_type_bedrooms[0].price }}
                                                    <!-- Mostrar solo el precio del primer tipo de habitación -->
                                                </h5>
                                            </div>
                                            <p class="text-muted mb-0 text-sm">Incluye impuestos y cargos</p>
                                        </div>
                                        <NuxtLink :to="`/hotels/${hotel.id}`" class="hotel-btn btn btn-sm">
                                            <i class="fas fa-search"></i> Ver disponibilidad
                                        </NuxtLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                </div>
            </div>
        </section>

    </main>

</template>

<script>
import axios from 'axios';

export default {
    name: 'HotelsPage',
    data() {
        return {
            priceRange: 300,  // Puedes definir el valor por defecto
            hotels: []
        };
    },
    async mounted() {
        try {
            const response = await axios.get('https://guaros-backend-production.up.railway.app/api/v1/hotels-client/list'); // Cambia la URL a la de tu API
            console.log('Hotels fetched:', response);
            this.hotels = response.data.data;
        } catch (error) {
            console.error('Error fetching hotels:', error);
        }
    }
};
</script>
<style scoped>
.filters {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.filters h4 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
}

.form-check-label {
    font-size: 1rem;
    color: #333;
}



.hotels-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.hotel-card {
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
    cursor: pointer;
}

.text-sm {
    font-size: 0.900rem;
    /* Tamaño de fuente más pequeño */
}



.hotel-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.hotel-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 5px solid #dc3545;
}

.hotel-content h5 {
    margin-bottom: 10px;
    font-size: 20px;
    color: #333;
}

.hotel-content p {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
}

.hotel-btn {
    display: flex;
    /* Usa flexbox para alinear el contenido horizontalmente */
    align-items: center;
    /* Centra verticalmente el ícono y el texto */
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 5px;
    font-weight: 500;
    /* Ajusta este valor según el grosor deseado */

    background-color: #dc3545;
    color: #fff;
    transition: background-color 0.3s ease;
    text-decoration: none;
    /* Asegura que no haya subrayado en el enlace */
}

.hotel-btn:hover {
    background-color: #c82333;
}

/* Asegúrate de que el contenedor de la sección COVER tenga position: relative */
.c-cover-container {
    position: relative;
    /* Contenedor para la barra de búsqueda */
    z-index: 100;
    /* Asegúrate de que sea mayor que el de la sección de Tours */
}
/* Estilo para el botón de YouTube */
.btn-youtube {
  color: #fff;
  /* Color del texto */
  padding: 10px 20px;
  /* Padding del botón */
  border-radius: 4px;
  /* Bordes redondeados */
  text-decoration: none;
  /* Sin subrayado */
  display: inline-flex;
  /* Flexbox para alinear elementos */
  align-items: center;
  /* Alinear ícono y texto verticalmente */
}

/* Estilo para el ícono de YouTube */
.video-icon-youtube {
  margin-right: 8px;
  /* Espacio entre el ícono y el texto */
  font-size: 20px;
  /* Tamaño del ícono */
}

.search-bar {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
}

.search-bar-item {
    flex: 1;
    margin-right: 10px;
}

.search-bar-button {
    flex: 0 0 100px;
}

.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
}

.btn-danger:hover {
    background-color: #c82333;
    border-color: #bd2130;
}

.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Centra el contenido horizontalmente */
    justify-content: center;
    /* Centra el contenido verticalmente si es necesario */
    text-align: center;
    /* Alinea el texto al centro */
}

.card-title {
    margin-bottom: 1rem;
    /* Espacio debajo del título */
}

.card-text {
    margin-bottom: 1rem;
    /* Espacio debajo del texto */
}


/* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
    .search-bar {
        flex-wrap: wrap;
        width: 100%;
        /* Ancho completo en pantallas pequeñas */
        bottom: 10px;
        /* Ajusta el espacio inferior en pantallas pequeñas */
    }

    .search-bar-item {
        flex: 100%;
        margin-bottom: 10px;
    }

    .search-bar-item input,
    .search-bar-item select,
    .search-bar-button button {
        height: 50px;
        /* Ajusta la altura según sea necesario */
        font-size: 14px;
        /* Ajusta el tamaño de la fuente si es necesario */
    }
}
</style>