<template>
  <!-- Page Content -->
  <main>
    <!-- COVER -->
    <section class="p-0 jarallax overlay-dark overlay-opacity-6 text-white">
      <!-- jarallax image -->
      <img class="jarallax-img"
        src="https://elcomercio.pe/resizer/PSKNc3ym5_TO2Q1xG19lVLyLUfI=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/LRCHZYAMZFB7NJMOY3UL75ZZ3E.jpg"
        alt="...">

      <div class="container position-relative">
        <div class="d-middle col-12 col-md-12 col-lg-6 min-h-75vh text-center-xs">
          <div class="mt-7 overflow-hidden mb-8">
            <h1 class="font-weight-light mb-4">
              <span class="font-weight-medium">Tours en la región San Martin</span>
            </h1>
            <p class="lead">
              Experimenta la magia de Tarapoto, visita la selva peruana.
            </p>
            <div class="mt-4">
              <a aria-label="See our video" href="https://www.youtube.com/watch?v=fOr3iPLQn9E"
                data-ajax-modal-type="video" data-ajax-modal-size="modal-xl" data-ajax-modal-centered="true"
                class="btn btn-youtube transition-hover-top mb-3 d-block-xs js-ajax-modal d-inline-flex align-items-center">
                <i class="fab fa-youtube video-icon-youtube"></i>
                Ver Video
              </a>


            </div>
          </div>
        </div>

        <!-- Barra de búsqueda (debe estar sobre el contenido de la sección) -->
        <div class="search-bar d-flex align-items-center">
          <div class="search-bar-item">
            <input type="text" id="search_destination" placeholder="¿A dónde viajas?" class="form-control border-0">
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
    <!-- Tours -->
    <section class="bg-light pt-2 pb-4">
      <div class="container">
        <!-- title -->
        <div class="max-w-700 mx-auto text-center mb-4 mt-4" data-gfont="Courgette">
          <h2>
            Tours en <span class="text-danger">San Martin</span>
          </h2>
          <small class="d-block h6">Disfruta de los sitios más conocidos de la <b>región</b>!</small>
        </div>

        <div class="row">
          <!-- Columna Izquierda - Filtros -->
          <div class="col-lg-3">
            <div class="filters p-4 shadow-sm bg-white">
              <h5 class="font-weight-bold mb-3">Filtros</h5>
              <form>
                <div class="mb-3">
                  <h6 class="font-weight-bold">Precio</h6>
                  <div v-for="range in priceRanges" :key="range.id" class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" :id="range.id" @change="togglePriceRange(range)"
                      :checked="selectedPriceRanges.includes(range)" />
                    <label class="form-check-label" :for="range.id">
                      PEN {{ range.min }} - PEN {{ range.max === Infinity ? 'más' : range.max }}
                      <span class="text-muted">({{ range.count }})</span> <!-- Número dinámico de tours en ese rango -->
                    </label>
                  </div>
                </div>
                <div class="mb-3">
                  <h6 class="font-weight-bold">Horario</h6>
                  <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" id="horarioMananas">
                    <label class="form-check-label" for="horarioMananas">
                      Mañanas (Empieza antes de las 12:00) <span class="text-muted">(10)</span>
                    </label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" id="horarioTardes">
                    <label class="form-check-label" for="horarioTardes">
                      Tardes (Empieza después de las 12:00) <span class="text-muted">(2)</span>
                    </label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" id="horarioTardesNoches">
                    <label class="form-check-label" for="horarioTardesNoches">
                      Tardes y noches (Empieza después de las 18:00) <span class="text-muted">(1)</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="col-lg-9">
            <div class="row gutters-sm">
              <div v-for="tour in filteredTours" :key="tour.id_tour" class="col-12 col-md-4 mb-3">
                <div class="card h-100">
                  <!-- Imagen del tour -->
                  <img :src="tour.imagen_portada" class="card-img-top" alt="Imagen del tour">

                  <!-- Cuerpo de la tarjeta -->
                  <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title text-danger mb-2">
                      {{ tour.nombre }}
                    </h5>
                    <!-- Mostrar el precio online de manera destacada con ícono de persona -->
                    <p class="card-price  mb-2">
                      <i class="fas fa-user"></i> S/. {{ tour.price_agencia }}
                    </p>

                    <!-- Descripción o etiqueta del tour con ícono de etiqueta -->
                    <p class="card-text text-muted mb-3">
                      <i class="fas fa-tag"></i> {{ tour.etiqueta_al }}
                    </p>
                    <!-- Botones de acciones -->
                    <div class="d-flex justify-content-center ">
                      <NuxtLink :to="`/tours/${tour.id_tour}`" class="btn btn-danger btn-sm btn-disponibilidad">
                        <i class="fas fa-calendar-check"></i>
                        Ver disponibilidad
                      </NuxtLink>
                    </div>
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
import { ref, computed } from 'vue';

export default {
  name: 'ToursPage',
  setup() {
    const tours = ref([]);
    const selectedPriceRanges = ref([]);
    const searchQuery = ref(''); // Almacenar lo que escribe el usuario

    const filteredByName = computed(() => {
      if (!searchQuery.value) {
        return tours.value; // Si no hay búsqueda, mostrar todos los tours
      }
      return tours.value.filter(tour =>
        tour.nombre.toLowerCase().includes(searchQuery.value.toLowerCase()) // Filtrar por nombre
      );
    });

    // Definir los rangos de precio
    const priceRanges = ref([
      { id: 'precio0a84', min: 0, max: 84, count: 0 },
      { id: 'precio84a168', min: 84, max: 168, count: 0 },
      { id: 'precio168a315', min: 168, max: 315, count: 0 },
      { id: 'precio315a525', min: 315, max: 525, count: 0 },
      { id: 'precio525mas', min: 525, max: Infinity, count: 0 }
    ]);

    // Función para obtener los tours
    const fetchTours = async () => {
      try {
        const response = await axios.get('https://guaros-backend-production.up.railway.app/api/v1/tours-client/list');
        tours.value = response.data.data.map(tour => ({
          ...tour,
          id_tour: tour.id_tour,
          price_agencia: parseFloat(tour.price_agencia), // Asegurarse de que el precio sea un número
          imagen_portada: `https://guaros-backend-production.up.railway.app/storage/${tour.imagen_portada}`,
        }));

        // Contar los tours por rango de precio
        calculatePriceRangeCounts();
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    // Función para contar cuántos tours caen dentro de cada rango de precios
    const calculatePriceRangeCounts = () => {
      priceRanges.value.forEach(range => {
        range.count = tours.value.filter(tour =>
          tour.price_agencia >= range.min && tour.price_agencia <= range.max
        ).length;
      });
    };

    // Computar los tours filtrados según el rango de precios seleccionado
    const filteredTours = computed(() => {
      if (selectedPriceRanges.value.length === 0) {
        return tours.value; // Si no hay filtros seleccionados, mostrar todos los tours
      }

      return tours.value.filter(tour => {
        // Verificar si el precio del tour está dentro de uno de los rangos seleccionados
        return selectedPriceRanges.value.some(range =>
          tour.price_agencia >= range.min && tour.price_agencia <= range.max
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

    const dropdownVisible = ref(false);

    // Función para ocultar el dropdown
    const hideDropdown = () => {
      setTimeout(() => {
        dropdownVisible.value = false;
      }, 200); // Dar un tiempo para que el usuario pueda hacer clic en un tour antes de cerrar el dropdown
    };

    // Función para seleccionar un tour de la lista
    const selectTour = (tour) => {
      searchQuery.value = tour.nombre; // Asignar el nombre del tour al input
      dropdownVisible.value = false; // Ocultar el dropdown
    };


    fetchTours();

    return { tours, filteredTours, priceRanges, selectedPriceRanges, togglePriceRange, hideDropdown, selectTour, filteredByName, searchQuery };
  }
};

</script>

<style scoped>
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

.card-price {
  font-size: 1.1rem;
  /* Tamaño ligeramente mayor para el icono */
  font-weight: bold;

  /* Verde para resaltar el precio */
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 15px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #dc3545;
  margin-bottom: 0.75rem;
}

.card-text {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0.75rem;
}

.btn-disponibilidad {
  display: inline-flex;
  align-items: center;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 500;
  background-color: #dc3545;
  color: #fff;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.btn-disponibilidad:hover {
  background-color: #c82333;
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



.card {
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  transform: scale(1.02);
}

.card-img-top {
  width: 100%;
  height: 250px;
  /* Ajustar la altura de la imagen */
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-img-top {
  transform: scale(1.03);
}



.filters {
  border-radius: 5px;
  overflow: hidden;
}

.filters h6 {
  margin-bottom: 15px;
  font-size: 14px;
  color: #495057;
}

.filters .form-check-label {
  font-size: 14px;
  color: #495057;
}

.filters .form-check-input {
  margin-right: 10px;
}

.gutters-sm>[class*='col-'] {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.gutters-sm {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;

  display: block;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
</style>
