<template>
    <main>
      <!-- Cover Section -->
      <section class="cover-section jarallax overlay-dark overlay-opacity-6 text-white">
        <img class="jarallax-img" src="/img/packs/diseno-fondo-abstracto_1297-82.avif" alt="Background Image">
        <div class="container text-center py-5">
          <h1 class="section-title">Mis Reservas</h1>
          <p class="section-subtitle">Aquí puedes ver todas tus reservas de tours, paquetes y hoteles.</p>
        </div>
      </section>
  
      <!-- Reservations Content -->
      <section class="container reservations-content py-5">
        <div v-if="reservations.length" class="reservations-list">
          <ReservationItem
            v-for="reservation in reservations"
            :key="reservation.id"
            :reservation="reservation"
          />
        </div>
        <div v-else class="text-center">
          <p>No tienes reservas actualmente.</p>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import ReservationItem from './ReservationItem.vue';
  
  export default {
    name: 'MyReservations',
    components: { ReservationItem },
    data() {
      return {
        reservations: [] // Aquí se almacenan las reservas del usuario
      };
    },
    mounted() {
      this.fetchReservations(); // Cargar reservas al montar el componente
    },
    methods: {
      fetchReservations() {
        // Lógica de ejemplo para obtener reservas del usuario
        this.reservations = [
          { id: 1, type: 'Paquete', title: 'Tour Machu Picchu', date: '2024-01-15', status: 'Confirmada' },
          { id: 2, type: 'Hotel', title: 'Hotel Sol y Luna', date: '2024-02-10', status: 'Pendiente' },
          { id: 3, type: 'Tour', title: 'Excursión a Laguna 69', date: '2024-03-20', status: 'Cancelada' },
        ];
      }
    }
  };
  </script>
  
  <style scoped>
  .cover-section {
    position: relative;
    height: 250px;
  }
  
  .cover-section .jarallax-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    margin: 0;
  }
  
  .section-subtitle {
    color: #f8f9fa;
    font-size: 1.1rem;
  }
  
  .reservations-content {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
  }
  
  .reservations-list {
    display: grid;
    gap: 20px;
  }
  
  .text-center p {
    font-size: 1.2rem;
    color: #777;
  }
  </style>
  