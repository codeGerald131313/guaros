<template>
    <div class="reservation-item">
      <h3 class="reservation-title">{{ reservation.title }}</h3>
      <p><strong>Tipo:</strong> {{ reservation.type }}</p>
      <p><strong>Fecha:</strong> {{ reservation.date }}</p>
      <p><strong>Estado:</strong> <span :class="statusClass">{{ reservation.status }}</span></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReservationItem',
    props: {
      reservation: {
        type: Object,
        required: true
      }
    },
    computed: {
      statusClass() {
        return {
          'text-success': this.reservation.status === 'Confirmada',
          'text-warning': this.reservation.status === 'Pendiente',
          'text-danger': this.reservation.status === 'Cancelada'
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .reservation-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .reservation-item:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .reservation-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 10px;
  }
  
  .text-success {
    color: #28a745;
  }
  
  .text-warning {
    color: #ffc107;
  }
  
  .text-danger {
    color: #dc3545;
  }
  </style>
  