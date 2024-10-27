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

            <div class="mt-7overflow-hidden mb-8">

              <h1 class="font-weight-light mb-4">
                <span class="text-yellow-500 font-weight-medium">{{ tourName }}</span>
              </h1>

              <p class="lead">
                <span class="font-weight-medium">Espera tu visita.</span>
              </p>

              <div class="mt-4">

                <a aria-label="See our video" :href="linkVideo" data-ajax-modal-type="video"
   data-ajax-modal-size="modal-xl" data-ajax-modal-centered="true"
   class="btn video-btn transition-hover-top mb-3 d-block-xs js-ajax-modal d-inline-flex">
   <i class="fa fa-play video-icon"></i>
   Ver Video
</a>


              </div>

            </div>

          </div>

        </div>

      </section>
      <!-- /COVER -->


      <!-- Detail -->
      <section class="pt-4 pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-7 order-1 mb-5">
              <div class="row d-flex align-items-stretch">
                <!-- Large image on the left side -->
                <div class="col-md-8 d-flex">
                  <img v-if="sliderTours[0]" :src="`https://guaros-backend-production.up.railway.app/storage/${sliderTours[0].imagen}`"
                    class="img-fluid rounded" alt="Main Image" style="width: 100%; object-fit: cover; height: 100%;">
                </div>

                <!-- Smaller images on the right side -->
                <div class="col-md-4 d-flex flex-column justify-content-between">
                  <div class="mb-3 flex-fill">
                    <img v-if="sliderTours[1]" :src="`https://guaros-backend-production.up.railway.app/storage/${sliderTours[1].imagen}`"
                      class="img-fluid rounded" alt="Small Image 1"
                      style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="mb-3 flex-fill">
                    <img v-if="sliderTours[2]" :src="`https://guaros-backend-production.up.railway.app/storage/${sliderTours[2].imagen}`"
                      class="img-fluid rounded" alt="Small Image 2"
                      style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="flex-fill">
                    <img v-if="sliderTours[3]" :src="`https://guaros-backend-production.up.railway.app/storage/${sliderTours[3].imagen}`"
                      class="img-fluid rounded" alt="Small Image 3"
                      style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                </div>
              </div>
            </div>


            <div class="col-lg-4 col-md-5 order-2 mb-5">
              <!-- Tickets y precios -->
              <h4 class="font-weight-medium mb-3" style="color: #b00;">Tickets y precios</h4>

              <!-- PRICE (mover aquí) -->
              <div class="border-bottom pb-2 mb-4 text-center-xs" style="border-color: #b00;">
                <p class="text-muted m-0">
                  <del>Agencia - S/. {{ price_online }}</del>
                  <span style="color: #b00;" class="font-light fs--14"> /
                    <span class="font-weight-medium">ahorra S/.{{ ahorro }}</span>
                  </span>
                </p>
                <p class="fs--25 m-0 font-weight-medium" style="color: #b00;">
                  S/. {{ price_agencia }} <span class="font-weight-bold fs--14" style="color: #b00;">Online</span>
                </p>
              </div>
              <!-- Date selection (fuera del card) -->
              <div class="mb-3">
                <p class="mb-3" style="color: #b00;">Indica una fecha para ver la disponibilidad</p>
                <div class="date-container">
                  <button @click="decrementDate" class="arrow-btn">&lsaquo;</button>
                  <div class="d-flex">
                    <button v-for="(date, index) in displayedDates" :key="index" @click="selectDate(index)"
                      :class="{ 'date-btn selected': index === selectedDate, 'date-btn': index !== selectedDate }">
                      {{ formatDate(date) }}
                    </button>
                  </div>
                  <button @click="incrementDate" class="arrow-btn">&rsaquo;</button>
                </div>
              </div>



              <!-- Time selection (fuera del card) -->
              <div class="mb-3">
                <p style="color: #b00;">Selecciona una hora:</p>
                <button class="btn btn-outline-danger" style="border-color: #b00; color: #b00;">15:00</button>
              </div>

              <div class="booking-widget-container" style="position: relative;">
                <div class="booking-widget border p-3 rounded shadow-sm mt-4 sticky-form" style="border-color: #b00;">
                  <h5 class="font-weight-medium" style="color: #b00;">Tour {{ tourName }}</h5>
                  <p class="text-success">Cancelación gratis disponible</p>
                  <p class="text-muted">Recogida incluida</p>

                  <!-- Language and ticket options -->
                  <label style="color: #b00;">Idioma</label>
<select v-model="selectedLanguage" class="form-control mb-3" style="border-color: #b00;">
  <option value="es">Español - Guía turístico</option>
  <option value="en">Inglés - Guía turístico</option>
</select>

                  <!-- Tickets selection -->
                  <!-- Adult Section -->
                  <div style="margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <span style="color: #b00;">Adulto (edad: 4-99)</span>
                      <div style="display: flex; align-items: center;">
                        <button class="btn btn-outline-danger" @click="decrement('adults')"
                          style="border-color: #b00;">-</button>
                        <input type="number" v-model="adults" class="form-control"
                          style="width: 50px; text-align: center; margin: 0 10px; border-color: #b00;">
                        <button class="btn btn-outline-danger" @click="increment('adults')"
                          style="border-color: #b00;">+</button>
                      </div>
                    </div>
                    <span style="color: #b00; display: block; margin-top: 5px;  font-weight: bold;"> S/. {{
                      price_agencia }}</span>
                  </div>

                  <!-- Child Section -->
                  <div style="margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <span style="color: #b00;">Infantil (edad: 0-3)</span>
                      <div style="display: flex; align-items: center;">
                        <button class="btn btn-outline-danger" @click="decrement('children')"
                          style="border-color: #b00;">-</button>
                        <input type="number" v-model="children" class="form-control"
                          style="width: 50px; text-align: center; margin: 0 10px; border-color: #b00;">
                        <button class="btn btn-outline-danger" @click="increment('children')"
                          style="border-color: #b00;">+</button>
                      </div>
                    </div>
                    <span style="color: #b00; display: block; margin-top: 5px; font-weight: bold;"> S/. 0</span>
                  </div>

                  <p class="font-weight-bold mt-3">Total: <span style="color: #b00;">S/. {{ totalPrice }}</span></p>
                  <!-- Usamos un evento @click en lugar de :to -->
                  <button @click="goToReservation" class="btn btn-danger btn-block"
                    style="background-color: #b00; border-color: #b00;">
                    Reservar
                  </button>
                </div>
              </div>

            </div>



          </div>
        </div>
      </section>

      <!-- Mantén tu aplicación actualizada -->
      <section class="bg-light pt-4 pb-2">
        <div class="container">
          <div class="row">

            <!-- Columna de Información del Tour -->
            <div class="col-12 col-lg-6 mt-2 mb-0">
              <h2 class="h3-xs mt-2">{{ tourName }}</h2>
              <p class="lead text-black mb-4">{{ tourHistory }}</p>

              <!-- Detalles del Tour -->
              <ul class="list-unstyled">
                <!-- Duración del Tour -->
                <li class="list-item d-flex align-items-center mb-2">
                  <svg class="me-2" width="30" fill="#004D40" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 41.602 41.602">
                    <path
                      d="M20.801 0a20.801 20.801 0 1 0 20.801 20.801 20.825 20.825 0 0 0-20.801-20.801m0 40a19.199 19.199 0 1 1 19.199-19.199 19.221 19.221 0 0 1-19.199 19.199M30.602 12.27l-12.296 13.832-7.408-5.926a.8.8 0 0 0-1 1.25l8 6.398a.811.811 0 0 0 .5.176.797.797 0 0 0 .602-.27l12.797-14.398a.799.799 0 1 0-1.195-1.062">
                    </path>
                  </svg>
                  <span class="fs--20">{{ tourDuration }}</span>
                </li>

                <!-- Idioma del Tour -->
                <li class="list-item d-flex align-items-center mb-2">
                  <svg class="me-2" width="30" fill="#004D40" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 41.602 41.602">
                    <path
                      d="M20.801 0a20.801 20.801 0 1 0 20.801 20.801 20.825 20.825 0 0 0-20.801-20.801m0 40a19.199 19.199 0 1 1 19.199-19.199 19.221 19.221 0 0 1-19.199 19.199M30.602 12.27l-12.296 13.832-7.408-5.926a.8.8 0 0 0-1 1.25l8 6.398a.811.811 0 0 0 .5.176.797.797 0 0 0 .602-.27l12.797-14.398a.799.799 0 1 0-1.195-1.062">
                    </path>
                  </svg>
                  <span class="fs--20">{{ tourLanguages }}</span>
                </li>
              </ul>
            </div>

            <!-- Columna de Características del Tour -->
            <div class="col-12 col-lg-6 mt-2 mb-0">
              <!-- Sección "Que Incluye" -->
              <h3 class="h5">Que Incluye</h3>
              <ul class="list-unstyled mb-0">
                <li v-for="item in filteredIncludes" :key="item.id" class="list-item d-flex align-items-center py-2">
                  <div class="badge badge-secondary badge-soft badge-ico-sm rounded-circle me-2">
                    <i class="fas fa-check-circle text-success"></i>
                  </div>
                  <span class="text-green-700">{{ item.descripcion }}</span>
                </li>
              </ul>

              <!-- Sección "No Incluye" -->
              <h3 class="h5 mt-4">No Incluye</h3>
              <ul class="list-unstyled mb-0">
                <li v-for="item in filteredNotIncludes" :key="item.id" class="list-item d-flex align-items-center py-2">
                  <div class="badge badge-secondary badge-soft badge-ico-sm rounded-circle me-2">
                    <i class="fas fa-times-circle text-danger"></i>
                  </div>
                  <span class="text-muted">{{ item.descripcion }}</span>
                </li>
              </ul>

              <div class="fs--13 text-muted mt-2"></div>
            </div>

          </div>
        </div>
      </section>


      <!-- SERVICES -->
      <section class="bg-theme-color-light pt-0 mt-0">
        <div class="container">
          <div class="bg-white pt-0 mt-0 rounded overflow-hidden">
            <!-- shadow-xs -->
            <div class="row col-border">
              <!-- Itinerario -->
              <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card p-4 b-0 h-100" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
                  <!-- title -->
                  <h2 class="fs--18">Itinerario</h2>
                  <div class="card-body pl-0 pr-0 text-gray-900">
                    <div v-for="item in filteredItinerary" :key="item.id"
                      class="clearfix mb-2 d-flex align-items-center">
                      <div class="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start me-2">
                        <i class="fas fa-calendar-alt text-primary"></i>
                      </div>
                      <span>{{ item.descripcion }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Actividades y Adicionales -->
              <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card p-4 b-0 h-100" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
                  <!-- Actividades -->
                  <h2 class="fs--18">Actividades</h2>
                  <div class="card-body pl-0 pr-0 text-gray-900">
                    <div v-for="item in filteredActivities" :key="item.id"
                      class="clearfix mb-2 d-flex align-items-center">
                      <div class="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start me-2">
                        <i class="fas fa-running text-success"></i>
                      </div>
                      <span>{{ item.descripcion }}</span>
                    </div>
                    <!-- Adicionales -->
                    <h2 class="fs--18 mt-4 mb-4">Adicionales</h2>
                    <div v-for="item in filteredAdicionales" :key="item.id"
                      class="clearfix mb-2 d-flex align-items-center">
                      <div class="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start me-2">
                        <i class="fas fa-plus-circle text-info"></i>
                      </div>
                      <span>{{ item.descripcion }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Recomendaciones -->
              <div class="col-12 col-md-12 col-lg-4 mb-4">
                <div class="card p-4 b-0 h-100" data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">
                  <!-- title -->
                  <h2 class="fs--18">Recomendaciones</h2>
                  <div class="card-body pl-0 pr-0 text-gray-900">
                    <div v-for="item in filteredRecommendations" :key="item.id"
                      class="clearfix mb-2 d-flex align-items-center">
                      <div class="badge badge-secondary badge-soft badge-ico-sm rounded-circle float-start me-2">
                        <i class="fas fa-lightbulb text-warning"></i>
                      </div>
                      <span>{{ item.descripcion }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      adults: 0, // Default value for adults
      children: 0, // Default value for children
      tourName: '',
      tourHistory: '',
      selectedLanguage: 'es', // Valor predeterminado para el idioma seleccionado
      imagePortadaUrl: '', // URL de la imagen portada
      tourDuration: '',
      tourLanguages: '',
      tourNameCorto: '',
      tourEtiquetaAl: '',
      price_agencia: '',
      price_online: '',
      tourImage: '',
      linkVideo: '',
      tours: [],
      sliderTours: [],
      tour_characteristics: [], // Aquí se almacenará la lista de características


      selectedDate: 0, // Índice de la fecha seleccionada
      currentDate: new Date(), // Fecha actual
      displayedDates: [] // Fechas que se mostrarán
    };
  },
  computed: {
    totalPrice() {
      return this.adults * this.price_agencia;
    },
    ahorro() {
      // Calcular el ahorro restando el precio online del precio de agencia
      return this.price_online - this.price_agencia;
    },
    // Filtrar por Itinerario
    filteredItinerary() {
      return this.tour_characteristics.filter(
        (item) => item.id_type_characteristic === 1
      );
    },
    // Filtrar por Actividades
    filteredActivities() {
      return this.tour_characteristics.filter(
        (item) => item.id_type_characteristic === 2
      );
    },
    // Filtrar por Recomendaciones
    filteredRecommendations() {
      return this.tour_characteristics.filter(
        (item) => item.id_type_characteristic === 4
      );
    },
    // Filtrar por Adicionales
    filteredAdicionales() {
      return this.tour_characteristics.filter(
        (item) => item.id_type_characteristic === 3
      );
    },
    // Filtrar por Que Incluye
    filteredIncludes() {
      return this.tour_characteristics.filter(
        (item) => item.id_type_characteristic === 5
      );
    },
    // Filtrar por No Incluye
    filteredNotIncludes() {
      return this.tour_characteristics.filter(
        (item) => item.id_type_characteristic === 6
      );
    },
  },
  methods: {
    generateDates() {
      this.displayedDates = [];
      for (let i = -1; i <= 2; i++) {
        const date = new Date();
        date.setDate(this.currentDate.getDate() + i); // Añade los días a la fecha actual
        this.displayedDates.push(new Date(date)); // Clonar y agregar
      }
    },
    selectDate(index) {
      this.selectedDate = index;
      console.log("Fecha seleccionada: ", this.displayedDates[index]);
    },
    incrementDate() {
      // Mueve las fechas hacia adelante
      this.currentDate.setDate(this.currentDate.getDate() + 1);
      this.generateDates();
    },
    decrementDate() {
      // Mueve las fechas hacia atrás
      this.currentDate.setDate(this.currentDate.getDate() - 1);
      this.generateDates();
    },
    formatDate(date) {
      const options = { weekday: 'short', day: 'numeric', month: 'short' };
      return date.toLocaleDateString('es-ES', options); // Formato de fecha con el idioma en español
    },
    async fetchTours() {
      try {
        const response = await axios.get('https://guaros-backend-production.up.railway.app/api/v1/tours-client/list');
        this.tours = response.data.data.map(tour => ({
          ...tour,
          id_tour: tour.id_tour,
          imagen_portada: `https://guaros-backend-production.up.railway.app/storage/${tour.imagen_portada}`
        }));

        console.log(this.tour);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    },
    goToReservation() {
      const linkData = {
        path: '/ReservationTours',
        query: {
          tourName: this.tourName,
          adults: this.adults,
          children: this.children,
          price_agencia: this.price_agencia,
          totalPrice: this.totalPrice,
          selectedDate: this.displayedDates[this.selectedDate], // Enviamos la fecha completa
          language: this.selectedLanguage // Enviar el idioma seleccionado

        }
      };

      // Muestra en la consola antes de navegar
      console.log('Datos que se están enviando:', linkData);

      // Redirige manualmente usando $router.push()
      this.$router.push(linkData);
    },
    increment(type) {
      if (type === 'adults') {
        this.adults++;
      } else if (type === 'children') {
        this.children++;
      }
    },
    decrement(type) {
      if (type === 'adults' && this.adults > 0) {
        this.adults--;
      } else if (type === 'children' && this.children > 0) {
        this.children--;
      }
    },
    async fetchTour() {
      try {
        const tourId = this.$route.params.id;
        const response = await axios.get(`https://guaros-backend-production.up.railway.app/api/v1/tours-client/tour/${tourId}`);
        const data = response.data.tour;
        this.tourName = data.nombre;
        this.tourHistory = data.historia;
        this.tourDuration = data.duracion;
        this.tourLanguages = data.idioma;
        this.tourImage = data.imagen_perfil;
        this.tourNameCorto = data.nombre_corto;
        this.price_agencia = data.price_agencia; // Asegúrate de que `data.price_agencia` contenga el precio de la agencia
        this.price_online = data.price_online;
        this.tourEtiquetaAl = data.etiqueta_al;
        // this.tourLocation = data.location;
        this.linkVideo = data.link_video; // Asegúrate de que `data.video_link` contenga el enlace al video
        this.imagePortadaUrl = `https://guaros-backend-production.up.railway.app/storage/${data.imagen_portada}`;

        this.sliderTours = data.slider_tours; // Asigna los datos de los slider tours
        this.tour_characteristics = data.tour_characteristics;
      } catch (error) {
        console.error('Error fetching tour data:');
      }
    },
  },
  mounted() {
    this.fetchTours();
    this.fetchTour(); // Llamar al método para cargar los datos cuando el componente se monta

    this.generateDates();

  },
};

</script>

<style scoped>
/* Puedes personalizar aún más los estilos */
.fs-5 {
  font-size: 1.25rem;
  /* Esto hace que el texto y los iconos tengan un tamaño ligeramente mayor */
}

.me-2 {
  margin-right: 0.5rem;
}

.image-container {
  position: relative;
  width: 100%;
  height: auto;
  /* Ajusta la altura según el contenido */
}

.image-container img {
  width: 100%;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  /* Color negro con opacidad */
  pointer-events: none;
  /* Para que la capa de sobreimpresión no interfiera con los eventos de la imagen */
}

/* Solo estilos aplicados a la selección de fechas */
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
/* Clase para el botón */
.video-btn {
  background-color: #ffeb3b; /* Cambia el color de fondo según lo que desees */
  color: #000; /* Color del texto */
  display: inline-flex;
  align-items: center; /* Alinea el ícono y el texto verticalmente */
  padding: 8px 16px; /* Ajusta el padding del botón */
  border-radius: 4px;
  text-decoration: none;
}

/* Clase para el ícono dentro del botón */
.video-icon {
  margin-right: 8px; /* Espacio entre el ícono y el texto */
  font-size: 18px; /* Ajusta el tamaño del ícono */
  vertical-align: middle;
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
  /* El formulario se pegará a 20px de la parte superior */
  z-index: 10;
}
</style>
