<template>
  <!-- Page Content -->
  <main>
    <div class="">
      <!-- COVER -->
      <section class="jarallax overlay-dark overlay-opacity-6 text-white">
        <!-- jarallax image -->
        <img class="jarallax-img" srcset="/img/packs/diseno-fondo-abstracto_1297-82.avif" alt="...">
      </section>
      <!-- /COVER -->

      <!-- Separador con un simple margen -->
      <div class="simple-space"></div>

      <section class="container tabs-section">
        <!-- Columna izquierda: Opciones de pago -->
        <div class="left-column">
          <h2 class="title">Revisión y pago</h2>

          <!-- Opciones de pago -->
          <div class="payment-options">
            <h3>¿Cómo quieres pagar?</h3>
            <div class="payment-methods">
              <!-- Nueva tarjeta -->
              <div class="payment-method card-method" @click="paymentMethod = 'new-card'"
                :class="{ selected: paymentMethod === 'new-card' }">
                <input type="radio" id="new-card" name="payment" value="new-card" v-model="paymentMethod" />
                <i class="fas fa-credit-card"></i>
                <label for="new-card">Nueva tarjeta</label>
              </div>

              <!-- PayPal -->
              <div class="payment-method card-method" @click="paymentMethod = 'paypal'"
                :class="{ selected: paymentMethod === 'paypal' }">
                <input type="radio" id="paypal" name="payment" value="paypal" v-model="paymentMethod" />
                <i class="fab fa-paypal"></i>
                <label for="paypal">PayPal</label>
              </div>
            </div>
          </div>

          <!-- Formulario para datos de la tarjeta -->
          <div v-if="paymentMethod === 'new-card'" class="new-card-form">
            <h3>Nueva tarjeta</h3>
            <form @submit.prevent="completePayment">
              <div class="form-group">
                <label for="name">Nombre del titular de la tarjeta</label>
                <input type="text" v-model="name" class="input-field" required />
              </div>

              <div class="form-group">
                <label for="cardNumber">Número de la tarjeta</label>
                <input type="text" v-model="cardNumber" class="input-field" required />
              </div>

              <!-- Flexbox container for Fecha de caducidad and CVC -->
              <div class="form-row">
                <div class="form-group half-width">
                  <label for="expiryDate">Fecha de caducidad</label>
                  <input type="text" v-model="expiryDate" class="input-field" placeholder="MM / AA" required />
                </div>

                <div class="form-group half-width">
                  <label for="cvc">CVC</label>
                  <input type="text" v-model="cvc" class="input-field" required />
                </div>
              </div>

              <button type="submit" class="submit-button">Completar la reserva</button>
            </form>
          </div>

          <!-- Formulario para PayPal (simulado) -->
          <div v-if="paymentMethod === 'paypal'" class="paypal-form">
            <h3>Pagar con PayPal</h3>
            <button @click="completePayment" class="submit-button">Ir a PayPal</button>
          </div>
        </div>

        <!-- Columna derecha: Detalles de la reserva -->
        <div class="right-column">
          <!-- Resumen para tipo de reserva 'tour' -->
          <div class="tour-summary" v-if="booking_type === 'tour'">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/205207768.jpg?k=5403b79dd1e3b66c392da9c976dbb289bb75d366ddb1b9f9180ec77ab1c75898&o="
              alt="Imagen del tour" class="tour-image-small">
            <div class="tour-details">
              <h4>{{ tourName }}</h4>
              <p><strong>{{ adults }}</strong> × Adulto</p>
              <p><strong>{{ children }}</strong> × Infantil</p>
              <p>Precio de agencia: <strong>S/. {{ price_agencia }}</strong></p>
              <p class="total-price-highlight">Precio total: <strong>S/. {{ totalPrice }}</strong></p>
            </div>
          </div>

          <!-- Resumen para tipo de reserva 'pack' -->
          <div class="tour-summary" v-if="booking_type === 'pack'">
            <img src="https://www.checkealo.pe/files/productos/6556/f0783376982bd132aa54174ba67e5e34.jpg"
              alt="Imagen del tour" class="tour-image-small">
            <div class="tour-details">
              <h4>{{ packName }}</h4>
              <p><strong>{{ adults }}</strong> × Adulto</p>
              <p><strong>{{ children }}</strong> × Infantil</p>
              <p>Precio de agencia: <strong>S/. {{ price_agencia }}</strong></p>
              <p class="total-price-highlight">Precio total: <strong>S/. {{ totalPrice }}</strong></p>
            </div>
          </div>

          <div class="cancelation-policy">
            <p><strong>Condiciones de cancelación:</strong> Cancelación gratis hasta las 7:30 del {{ selectedDate }}</p>
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
      // Variables para el método de pago
      paymentMethod: 'new-card',
      name: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',

      // Variables para almacenar los datos del formulario
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      hotel: '',
      requisito: '',
      adultos: [],  // Adultos del formulario (columna izquierda)
      infantiles: [],  // Niños del formulario
      booking_type: '', // Tipo de reserva ('tour', 'pack', etc.)

      // Variables para almacenar los datos del resumen
      tourName: '',
      packName: '', // Nombre del paquete para 'pack'
      adults: 0,  // Adultos del resumen (columna derecha)
      children: 0,  // Niños del resumen (columna derecha)
      price_agencia: 0,
      totalPrice: 0,
      selectedDate: '',
      selectedLanguage: ''
    };
  },
  mounted() {
    // Recibimos los datos del query (ya están en formato de objeto)
    const query = this.$route.query;

    // Asignamos los datos recibidos a las variables del componente
    this.nombre = query.nombre || '';
    this.apellidos = query.apellidos || '';
    this.email = query.email || '';
    this.telefono = query.telefono || '';
    this.hotel = query.hotel || '';
    this.requisito = query.requisito || '';
    this.adultos = query.adultos ? JSON.parse(query.adultos) : [];  // Deserializar adultos
    this.infantiles = query.infantiles ? JSON.parse(query.infantiles) : [];  // Deserializar infantiles

    this.booking_type = query.booking_type || 'default'; // Valor por defecto si no se especifica

    // Datos del resumen según el tipo de reserva
    if (this.booking_type === 'tour') {
      this.tourName = query.tourName || '';
    } else if (this.booking_type === 'pack') {
      this.packName = query.packName || '';
    }
    this.adults = Number(query.adults) || 0;  // Adultos del resumen
    this.children = Number(query.children) || 0;  // Niños del resumen
    this.price_agencia = parseFloat(query.price_agencia) || 0;
    this.totalPrice = parseFloat(query.totalPrice) || 0;
    this.selectedDate = query.selectedDate || '';
    this.selectedLanguage = query.selectedLanguage || '';

    // Mostrar datos en consola para verificación
    console.log('Datos del cliente recibidos:', query);
    console.log('Datos de la reserva recibidos:', query);
  },
  methods: {
    async completePayment() {
      // Crear un objeto con los datos del formulario (columna izquierda)
      const formData = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        email: this.email,
        telefono: this.telefono,
        hotel: this.hotel,
        requisito: this.requisito,
        adultos: this.adultos,
        infantiles: this.infantiles,
        booking_type: this.booking_type // Tipo de reserva
      };

      // Crear un objeto con los datos del resumen (columna derecha)
      const resumenData = {
        tourName: this.booking_type === 'tour' ? this.tourName : '',
        packName: this.booking_type === 'pack' ? this.packName : '',
        adults: this.adults,
        children: this.children,
        price_agencia: this.price_agencia,
        totalPrice: this.totalPrice,
        selectedDate: this.selectedDate,
        selectedLanguage: this.selectedLanguage
      };

      // Crear un objeto con los datos del pago
      const paymentFormData = {
        paymentMethod: this.paymentMethod,
        name: this.name,
        cardNumber: this.cardNumber,
        expiryDate: this.expiryDate,
        cvc: this.cvc
      };

      // Combinar todos los datos en un solo objeto
      const completeData = {
        ...formData,
        ...resumenData,
        ...paymentFormData
      };

      // Mostrar los datos combinados en consola
      console.log('Datos completos para procesar el pago:', completeData);

      // Determinar el endpoint en función del tipo de reserva (booking_type)
      let endpoint;
      if (this.booking_type === 'tour') {
        endpoint = 'https://guaros-backend-production.up.railway.app/api/v1/booking-client/create';
      } else if (this.booking_type === 'pack') {
        endpoint = 'https://guaros-backend-production.up.railway.app/api/v1/booking-client/create-pack';
      } 

      try {
        // Llamar a la API de Laravel para registrar los datos en el endpoint adecuado
        const response = await axios.post(endpoint, completeData);

        // Procesar la respuesta del servidor
        if (response.status === 200) {
          alert('Pago completado con éxito y reserva registrada');
        } else {
          alert('Hubo un problema al registrar la reserva.');
        }
      } catch (error) {
        // Manejar errores
        console.error('Error al completar el pago:', error);
        alert('Error al procesar el pago. Intenta nuevamente.');
      }
    }

  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.left-column {
  width: 40%;
  padding-right: 40px;
}

.right-column {
  width: 55%;
  padding: 20px;
}

.tour-summary {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

/* Espacio entre la sección COVER y el contenido siguiente */
section.jarallax {
  margin-bottom: 50px;
}

section.tabs-section {
  margin-bottom: 60px;
}

.tour-image-small {
  width: 130px;
  height: 130px;
  margin-right: 20px;
  border-radius: 10px;
  object-fit: cover;
}

.total-price {
  font-weight: bold;
}

.tour-details h4 {
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
}

.tour-details p {
  margin: 5px 0;
  font-size: 1rem;
  color: #555;
}

.total-price-highlight {
  margin: 5px 0;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 8px;
  color: #333;
  text-align: left;
}

.cancelation-policy {
  font-size: 0.9rem;
  color: #777;
  padding-top: 15px;
  border-top: 1px solid #ddd;
  margin-top: 20px;
}

/* Opciones de pago */
.payment-methods {
  display: flex;
  gap: 15px;
}

.card-method {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  justify-content: center;
  width: 150px;
  height: 80px;
  transition: border-color 0.3s;
}

.card-method i {
  font-size: 2rem;
}

.card-method.selected {
  border-color: #007bff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.payment-method input[type="radio"] {
  display: none;
}

.form-row {
  display: flex;
  justify-content: space-between;
}

.half-width {
  width: 48%;
}

.input-field {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.submit-button {
  background-color: #b00;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
}

.submit-button:hover {
  background-color: #a00;
}
</style>
