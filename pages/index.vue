<template>
  <!-- Page Content -->
  <main>

    <div>
      <section class="sow-util-slideshow min-h-100vh d-middle justify-content-start overlay-dark overlay-opacity-6"
        data-sow-slideshow-interval="4000" data-sow-slideshow-fade-delay="2000" data-sow-slideshow="
		/img/portada/turismo-canotaje-tarapoto.jpg
		,/img/portada/turismo-lamas-tarapoto.jpg
		,/img/portada/turismo-ahuashiyacu-tarapoto.jpg
		,/img/portada/turismo-sause-tarapoto.jpg">

        <div class="container">
          <div class="row text-center-md text-center-xs d-middle justify-content-start">

            <div class="col-12 col-lg-7 mb-5 d-flex flex-column align-items-center  text-white py-7" data-aos="fade-in"
              data-aos-delay="0" data-aos-offset="0">

              <img class="my-4" src="img/logo.png" width="210" height="140" alt="...">
              <!-- main title -->
              <h1 class="h1-xs display-3 mb-0 font-weight-medium" data-gfont="Yellowtail" data-aos="fade-in"
                data-aos-delay="300" data-aos-offset="0">
                Agencia de<span class="text-danger">Turismo!</span>
              </h1>

              <!-- slogan -->
              <p class="display-5 h5-xs font-weight-normal my-2" data-gfont="Yellowtail" data-aos="fade-in"
                data-aos-delay="600" data-aos-offset="0">
                Para disfrutar al maximo
              </p>
            </div>

            <div class="col-12 col-lg-5 text-align-end text-center-md text-center-xs" data-aos="fade-in"
              data-aos-delay="50" data-aos-offset="0">

              <div
                class="d-inline-block bg-white shadow-primary-xs rounded px-4 py-3 p-4-xs w-100 max-w-450 text-align-start jarallax"
                data-jarallax-element="60">

                <h2 class="h5 mb-2">
                  <i class="fas fa-clock"></i> <!-- Agregado icono de reloj -->
                  <span class="d-inline-block pl-2 pr-2">Haz tu Reserva.</span>
                </h2>


                <form action="https://guarosgroup.com/booking" method="POST" novalidate class="bs-validate"
                  id="reservar" name="reservar">
                  <input type="hidden" name="_token" value="3GFNeJRC0B6aG6L467jjGE3jRpSFs7AS0hQA5V0h"> <!-- Date -->

                  <div class="form-label-group mb-4">
                    <input required placeholder="Fecha?" id="book_date" name="date" type="text" readonly value=""
                      class="form-control rangepicker" autocomplete="off" data-disable-auto-update-input="true"
                      data-single-datepicker="true" data-timepicker="true" data-timepicker-24h="true"
                      data-timepicker-show-seconds="false" data-disable-past-dates="true"
                      data-date-format="DD-MM-YYYY HH:mm" data-quick-locale='{
											"lang_apply"	: "Aceptar",
											"lang_cancel"	: "Cancelar",
											"lang_crange"	: "Custom Range",
											"lang_months" 	: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
											"lang_weekdays" : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
										}'>
                    <label for="book_date">Fecha y hora de llegada?</label>
                  </div>

                  <!-- People -->
                  <div class="form-label-group mb-4">
                    <select required id="book_people" name="cantPerson" class="form-control" title="">
                      <option value="">Cuantas Personas viajan?</option>
                      <option value="1">1 Personas</option>
                      <option value="2">2 Personas</option>
                      <option value="3">3 Personas</option>
                      <option value="4">4 Personas</option>
                      <option value="6">5 Personas</option>
                      <option value="8">6 Personas</option>
                      <option value="12">7 Personas</option>
                      <option value="18">8 Personas</option>
                      <option value="20">+ de 10 Personas</option>
                      <option value="20+">+ de 20 Personas</option>
                    </select>
                    <label for="book_people">N° de Personasas viajeras</label>
                  </div>

                  <!-- Name -->
                  <div class="form-label-group mb-4">
                    <input placeholder="Nombre Completo" required id="book_fullname" name="full_name" type="text"
                      value="" class="form-control">
                    <label for="book_fullname">Nombre del responsable</label>
                  </div>

                  <!-- Contact -->
                  <div class="form-label-group mb-4">
                    <input placeholder="N° de Celular" id="numero_cell" required name="phone" type="number" value=""
                      class="form-control">
                    <label for="book_fullname">Celular del responsable</label>
                  </div>

                  <small class="d-block text-muted fs--13 my-2">
                    Al enviar este mensaje, ¡acepta <a target="blank" class="link-muted">nuestros términos y
                      condiciones</a> relacionados con
                    la ley GDPR!
                  </small>
                  <button type="submit" class="btn btn-danger">
                    Reservar Ahora
                  </button>
                </form>



              </div>

            </div>

          </div>
        </div>

      </section>
      <!-- /COVER -->

      <!-- block : txt+img : end -->
      <section id="section_about">
        <div class="container">

          <!-- title -->
          <div class="max-w-700 mx-auto text-center mb-6" data-gfont="Courgette">
            <p class="fs--14 text-monospace font-weight-medium">SOBRE NOSOTROS</p>
            <h1>
              Agencia <span class="text-danger">{{ data.nom_empresa }}</span> tarapoto
            </h1>

          </div>


          <div class="d-flex row">

            <div class="p-4  col-12 col-lg-6 col-md-5 col-xl-5 ">
              <!-- 1 -->
              <div class="d-flex align-items-center">
                <div class="w--45">
                  <i class="fas fa-info-circle fs--30 text-danger"></i> <!-- Cambiado a FontAwesome: Info Circle -->
                </div>
                <div class="col">
                  <h3 class="h5 px-1">
                    Pequeña Historia!
                  </h3>
                </div>
              </div>

              <p class="mb-5">{{ data.nota }}</p>



              <!-- 2 -->
              <div class="d-flex align-items-center">
                <div class="w--45">
                  <i class="fas fa-thumbs-up fs--30 text-warning"></i> <!-- Cambiado a FontAwesome: Thumbs Up -->
                </div>
                <div class="col">
                  <h3 class="h5 px-1">
                    Servicio de Calidad
                  </h3>
                </div>
              </div>

              <p class="mb-5">{{ data.mision }}</p>


              <!-- 3 -->
              <div class="d-flex align-items-center">
                <div class="w--45">
                  <i class="fas fa-shield-alt fs--30 text-primary"></i> <!-- Cambiado a FontAwesome: Shield Alt -->
                </div>
                <div class="col">
                  <h3 class="h5 px-1">
                    Generamos Confianza
                  </h3>
                </div>
              </div>

              <p class="mb-5">{{ data.vision }}</p>

            </div>

            <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
<script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
<df-messenger
  location="us-central1"
  project-id="project-441623"
  agent-id="86f66a4a-75f0-44ce-9b1c-ab5aae734e3e"
  language-code="en"
  max-query-length="-1">
  <df-messenger-chat-bubble
   chat-title="Guaros Tours">
  </df-messenger-chat-bubble>
</df-messenger>
<style>
  df-messenger {
    z-index: 999;
    position: fixed;
    --df-messenger-font-color: #000;
    --df-messenger-font-family: Google Sans;
    --df-messenger-chat-background: #f3f6fc;
    --df-messenger-message-user-background: #d3e3fd;
    --df-messenger-message-bot-background: #fff;
    bottom: 16px;
    right: 16px;
  }
</style>
            <div class="col-12 col-lg-6 col-md-7 col-xl-7">
  <picture class="d-block mt-3" data-aos="fade-in" data-aos-delay="150" data-aos-offset="0">
    <div class="rounded-xl bg-light">
      <div
        class="swiper-container swiper-preloader swiper-warning swiper-btn-group swiper-btn-group-start text-white"
        data-swiper='{
          "slidesPerView": 1,
          "spaceBetween": 0,
          "autoplay": { "delay" : 2500, "disableOnInteraction": false },
          "effect": "fade",
          "loop": true,
          "pagination": { "type": "progressbar" }
        }'>

        <div class="swiper-wrapper">
          <div v-for="slider in sliders" :key="slider.id_slider_inicios"
            class="swiper-slide overlay-dark overlay-opacity-3 bg-cover"
            :style="{ backgroundImage: `url(${getImageUrl(slider.imagen)})` }">
            <!-- Ajustamos las imágenes con object-fit -->
            <img class="w-100 fixed-height py-5" :src="getImageUrl(slider.imagen)" alt="...">
          </div>
        </div>

        <!-- prev/next arrows -->
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>

        <div class="swiper-pagination h--3 mt--1 position-relative"></div>

      </div>
    </div>

    <!-- play -->
    <div class="clearfix d-flex align-items-center mt-4">
      <!-- play button -->
      <span class="d-inline-block rounded-circle border border-light bw--3 p-1 transition-hover-zoom transition-all-ease-150 shadow-primary-lg">
        <a aria-label="Mirar nuestro video" href="https://www.youtube.com/watch?v=fOr3iPLQn9E"
          class="js-ajax-modal d-inline-flex bg-primary text-white rounded-circle w--60 h--60 align-items-center justify-content-center text-decoration-none"
          data-ajax-modal-type="video" data-ajax-modal-size="modal-xl" data-ajax-modal-centered="true">
          <i class="fas fa-play fs--25 mt--3"></i>
        </a>
      </span>
      <span class="d-inline-block px-3 text-primary">
        <b>Ver video Guaros </b>
      </span>
    </div>
    <!-- /play -->
  </picture>
</div>


          </div>

        </div>
      </section>
      <!-- /block : txt+img : end -->

      <!-- Tours -->
      <section class="bg-light pt-4 pb-4">
        <div class="container">
          <!-- title -->
          <div class="max-w-700 mx-auto text-center mb-6 mt-4" data-gfont="Courgette">
            <h2>
              Tours en <span class="text-danger">Tarapoto</span>
            </h2>
            <small class="d-block h6">Disfruta de los tours más hermosos de la <b>región!</b></small>
          </div>

          <div class="row gutters-sm gutters-xs--xs">
            <div v-for="tour in tours" :key="tour.id_tour" class="order-2 col-6 col-lg-3 mb-3 mb-2-xs">
              <NuxtLink :to="`/tours/${tour.id_tour}`"
                class="h-100 position-relative d-flex flex-wrap align-items-center justify-content-center text-decoration-none text-white mb-4 text-center overflow-hidden overlay-dark overlay-opacity-4 rounded shadow-primary-xs transition-hover-top transition-all-ease-150 bg-cover lazy"
                :style="{ backgroundImage: `url(${(tour.imagen_portada)})` }">
                <!-- blank svg : autoadjust background image -->
                <img class="w-100"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiA5IiAvPg=="
                  alt="...">
                <h3 class="position-absolute z-index-2 text-white fs--18 font-weight-medium">
                  {{ tour.nombre }}
                  <small class="d-block fs--13">{{ tour.etiqueta_al }}</small>
                </h3>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <!-- Packs -->
      <section>
        <div class="container">
          <!-- title -->
          <div class="max-w-700 mx-auto text-center mb-4" data-gfont="Courgette">
            <h2>
              Destino <span class="text-danger">Tarapoto</span>
            </h2>
            <small class="d-block h6">Disfruta de Paquetes todo <b>incluido!</b></small>
          </div>

          <!-- Lista de Packs mejorada -->
          <div class="row justify-content-center">
            <div v-for="pack in packs" :key="pack.id_pack" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                class="pack-card bg-white  rounded transition-all-ease-250 hover-effect p-2 h-100 d-flex flex-column">
                <NuxtLink :to="`/packs/${pack.id_pack}`" class="text-decoration-none h-100">
                  <figure class="p-0 m-0 text-center bg-gradient-radial-light rounded-top mb-3">
                    <img :src="pack.img_portada" alt="..." class="img-fluid pack-image">
                  </figure>
                  <div class="text-center-xs text-gray-800 py-3 mt-auto">
                    <span class="d-block text-uppercase fs--18 font-weight-bold max-h-50 overflow-hidden pack-title">
                      {{ pack.nombre }}
                    </span>
                    <span class="d-block text-danger font-weight-bold fs--18 mt-2">
                      S/.{{ pack.precio }}
                    </span>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- /Lista de Packs -->
        </div>
      </section>

      <!-- PARALLAX QUOTE -->
      <section class="position-relative jarallax overlay-dark overlay-opacity-7 text-white p-0">

        <!-- jarallax image -->
        <img class="jarallax-img" src="/img/tours/city-tour-tarapoto.jpg" alt="...">

        <div class="container pt--180 pb--180 position-relative z-index-2">

          <blockquote class="blockquote text-center" data-aos="fade-in" data-aos-delay="250" data-aos-offset="0">
            <h2 class="h1 h2-xs max-w-800 m-auto font-weight-light font-italic text-warning">
              Si crees que la aventura es peligrosa, prueba la rutina. Es mortal
            </h2>

            <footer class="blockquote-footer mt-4 fs--25 font-weight-light text-gray-500">
              <cite title="Source Title">Paulo Coelho</cite>
            </footer>
          </blockquote>

        </div>

        <!-- lines, looks like through a glass -->
        <div class="absolute-full w-100 overflow-hidden opacity-5">
          <img class="img-fluid" width="2000" height="2000" src="images/masks/shape-line-lense.svg" alt="...">
        </div>

      </section>
      <!-- /PARALLAX QUOTE -->
    </div>

  </main>

</template>



<script setup>
import { ref, onMounted } from 'vue';


const data = ref({});

const tours = ref([]);
const packs = ref([]);


const fetchNosotros = async () => {
  try {
    const response = await axios.get('https://guaros-backend-production.up.railway.app/api/v1/nosotros/list');

    data.value = response.data.data;

    console.log(data.value);
  } catch (err) {
    console.error('Error al obtener los datos de nosotros:', err);
  } finally {
  }
};
const sliders = ref([]);


const fetchSliders = async () => {
  try {
    const response = await axios.get('https://guaros-backend-production.up.railway.app/api/v1/slider-inicios/list'); // Ajusta la URL a tu API
    return response.data.data;
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return [];
  }
};



const fetchTours = async () => {
  try {
    const response = await axios.get('https://guaros-backend-production.up.railway.app/api/v1/tours-client/list');
    tours.value = response.data.data.map(tour => ({
      id_tour: tour.id_tour,
      ...tour,
      imagen_portada: `https://guaros-backend-production.up.railway.app/storage/${tour.imagen_portada}`
    }));
  } catch (error) {
    console.error('Error fetching tours:', error);
  }
};


onMounted(async () => {
  fetchNosotros();
  fetchTours();
  fetchPacks();
  sliders.value = await fetchSliders();

});

const fetchPacks = async () => {
  try {
    const response = await axios.get('https://guaros-backend-production.up.railway.app/api/v1/packs-client/list');
    packs.value = response.data.map(pack => ({
      ...pack,
      img_portada: `https://guaros-backend-production.up.railway.app/storage/${pack.img_portada}`
    }));
  } catch (error) {
    console.error('Error fetching packs:', error);
  }
};


const getImageUrl = (path) => {
  return `https://guaros-backend-production.up.railway.app/storage/slider_inicios/${path}`; // Ajusta la URL según tu configuración
};
</script>

<style scoped>
.pack-card {
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  /* Sombra más pronunciada */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pack-image {
  width: 100%;
  height: 180px;
  /* Ajusta la altura según el diseño que prefieras */
  object-fit: cover;
  /* Hace que la imagen ocupe todo el espacio sin deformarse */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transition: transform 0.3s ease;
}

.pack-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  /* Sombra más fuerte al hacer hover */
}

.pack-card:hover .pack-image {
  transform: scale(1.05);
}

.fixed-height {
  height: 400px; /* Ajusta la altura según lo que necesites */
  object-fit: cover; /* Asegura que la imagen ocupe todo el contenedor sin deformarse */
  object-position: center; /* Centra la imagen */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-cover {
  background-size: cover;
  background-position: center;
}

</style>