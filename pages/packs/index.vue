<template>
    <!-- Page Content -->
    <main>
        <!-- COVER -->
        <section class="p-0 jarallax overlay-dark overlay-opacity-6 text-white">
            <!-- jarallax image -->
            <img class="jarallax-img" src="https://scontent.flim14-1.fna.fbcdn.net/v/t1.6435-9/54278914_2089442147790948_823240600944902144_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHxPvf9nB7ujtFqz9gFDC7Ku9BPlI0lYzq70E-UjSVjOvyIoB1Uu95dQBFmILYm21ZC-cS_C26xugY9ZqIZadm6&_nc_ohc=O4xYmvCKUAIQ7kNvgHBfZ5c&_nc_ht=scontent.flim14-1.fna&_nc_gid=ARVHGPDF25ezc9oP9rFE4GK&oh=00_AYA2hdVmrSWSPzUqp0t2Ee1DqY-9PnlhDTohlk9RdDS28g&oe=6726DC35" >
            <div class="container">
                <div class="d-middle col-12 col-md-12 col-lg-6 min-h-75vh">
                    <div class="mt-7 overflow-hidden mb-8">
                        <h1 class="font-weight-light mb-4">
                            <span class="font-weight-medium">Paquetes todo incluido</span>
                        </h1>
                        <p class="lead">
                            Destino tarapoto. Reserva Hotel, Transporte, Alimentacion y tours.
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

                <!-- Barra de búsqueda (arriba, como en el primer diseño) -->
                <div class="search-bar d-flex align-items-center mt-4">
                    <div class="search-bar-item">
                        <input type="text" id="search_destination" placeholder="¿A dónde viajas?"
                            class="form-control border-0">
                    </div>

                    <div class="search-bar-item">
                        <input type="text" id="book_date" name="date" readonly class="form-control border-0 rangepicker"
                            placeholder="Selecciona fechas" autocomplete="off">
                    </div>

                    <div class="search-bar-item search-bar-button">
                        <button type="submit" class="btn btn-danger w-100">Buscar</button>
                    </div>
                </div>
            </div>
        </section>
        <!-- /COVER -->

        <!-- Packs con filtros -->
        <section class="bg-light py-4 pb-6">
            <div class="container">
                <!-- title -->
                <div class="max-w-700 mx-auto text-center mb-4" data-gfont="Courgette">
                    <h2>
                        Destino <span class="text-danger">Tarapoto</span>
                    </h2>
                    <small class="d-block h6">Disfruta de Paquetes todo <b>incluido!</b></small>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <div class="filters p-4 shadow-sm bg-white">
                            <h5 class="font-weight-bold mb-3">Filtros</h5>
                            <form>
                                <div class="mb-3">
                                    <h6 class="font-weight-bold">Precio</h6>
                                    <div v-for="range in priceRanges" :key="range.id" class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" :id="range.id"
                                            @change="togglePriceRange(range)"
                                            :checked="selectedPriceRanges.includes(range)" />
                                        <label class="form-check-label" :for="range.id">
                                            PEN {{ range.min }} - PEN {{ range.max === Infinity ? 'más' : range.max }}
                                            <span class="text-muted">({{ range.count }})</span>
                                            <!-- Número dinámico de packs en ese rango -->
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Fin de Filtros -->

                    <!-- Columna Derecha - Packs -->
                    <div class="col-lg-9">
                        <div class="row gutters-sm gutters-xs--xs">
                            <!-- Itera sobre los paquetes y genera un div para cada uno -->
                            <div v-for="pack in filteredPacks" :key="pack.id" class="order-2 col-12 col-lg-4">
                                <div
                                    class="bg-white shadow-xs shadow-md-hover transition-all-ease-250 transition-hover-top rounded show-hover-container p-2 my-2">
                                    <NuxtLink :to="`/packs/${pack.id_pack}`" class="text-decoration-none">
                                        <figure class="p-0 m-0 text-center bg-gradient-radial-light rounded-top">
                                            <img :src="pack.img_portada" alt="Paquete"
                                                class="img-fluid maxx-h-150 bg-suprime opacity--9">
                                        </figure>
                                        <div class="text-center-xs text-gray-600 py-3">
                                            <span
                                                class="d-block text-uppercase fs--16 font-weight-medium max-h-50 overflow-hidden">
                                                {{ pack.nombre }}
                                            </span>
                                            <span class="d-block text-danger font-weight-medium fs--16 mt-2">
                                                S/. {{ pack.precio }}
                                            </span>
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fin de Packs -->
                </div>
            </div>
        </section>
        <!-- /Packs -->
    </main>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

export default {
    name: 'PacksPage',
    setup() {
        // Estado reactivo para los paquetes
        const packs = ref([]);
        const selectedPriceRanges = ref([]);

        // Definir los rangos de precio
        const priceRanges = ref([
            { id: 'precio0a84', min: 0, max: 84, count: 0 },
            { id: 'precio84a168', min: 84, max: 168, count: 0 },
            { id: 'precio168a315', min: 168, max: 315, count: 0 },
            { id: 'precio315a525', min: 315, max: 525, count: 0 },
            { id: 'precio525mas', min: 525, max: Infinity, count: 0 }
        ]);

        // Función para obtener los paquetes
        const fetchPacks = async () => {
            try {
                const response = await axios.get('http://localhost:8001/api/v1/packs-client/list');
                packs.value = response.data.map(pack => ({
                    id_pack: pack.id_pack,
                    ...pack,
                    precio: parseFloat(pack.precio), // Asegurarse de que el precio sea un número
                    img_portada: `http://localhost:8001/storage/${pack.img_portada}`
                }));

                // Contar los packs por rango de precio
                calculatePriceRangeCounts();
            } catch (error) {
                console.error('Error fetching packs:', error);
            }
        };

        // Función para contar cuántos packs caen dentro de cada rango de precios
        const calculatePriceRangeCounts = () => {
            priceRanges.value.forEach(range => {
                range.count = packs.value.filter(pack =>
                    pack.precio >= range.min && pack.precio <= range.max
                ).length;
            });
        };

        // Computar los packs filtrados según el rango de precios seleccionado
        const filteredPacks = computed(() => {
            if (selectedPriceRanges.value.length === 0) {
                return packs.value; // Si no hay filtros seleccionados, mostrar todos los packs
            }

            return packs.value.filter(pack => {
                // Verificar si el precio del pack está dentro de uno de los rangos seleccionados
                return selectedPriceRanges.value.some(range =>
                    pack.precio >= range.min && pack.precio <= range.max
                );
            });
        });

        // Función para actualizar los rangos de precios seleccionados
        const togglePriceRange = (range) => {
            if (selectedPriceRanges.value.includes(range)) {
                selectedPriceRanges.value = selectedPriceRanges.value.filter(r => r !== range);
            } else {
                selectedPriceRanges.value.push(range);
            }
        };

        // Llamar a la función cuando el componente se monte
        onMounted(() => {
            fetchPacks();
        });

        return {
            packs,
            filteredPacks,
            priceRanges,
            selectedPriceRanges,
            togglePriceRange
        };
    }
};

</script>

<style scoped>
/* Barra de búsqueda */
.search-bar {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
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

/* Filtros */
.filters {
    border-radius: 5px;
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.filters h5 {
    font-weight: bold;
    margin-bottom: 15px;
}

.filters h6 {
    font-size: 14px;
    color: #495057;
    margin-bottom: 10px;
}

.filters .form-check-label {
    font-size: 14px;
    color: #495057;
}

.filters .form-check-input {
    margin-right: 10px;
}

.form-check {
    margin-bottom: 10px;
}


/* Estilos para las tarjetas (packs) */
.card {
    overflow: hidden;
    position: relative;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    /* Asegura que todas las tarjetas tengan la misma altura */
    min-height: 400px;
    /* Asegura que todas las tarjetas tengan una altura mínima */
}

.card-body {
    flex: 1;
}

.card:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    transform: scale(1.02);
}

/* Imagen del pack (dentro del figure) */
figure {
    margin: 0;
    padding: 0;
    text-align: center;
    height: 200px;
    /* Altura fija para todas las imágenes */
    background-color: #f8f9fa;
}

img.img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Asegura que la imagen cubra el contenedor sin deformarse */
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

/* Otros estilos */
.text-center-xs {
    text-align: center;
}

.gutters-sm>[class*='col-'] {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
}

.gutters-sm {
    margin-right: -0.5rem;
    margin-left: -0.5rem;
}
</style>
