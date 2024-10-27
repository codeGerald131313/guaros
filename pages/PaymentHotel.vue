<template>
    <main>
        <div class="">
            <section class="jarallax overlay-dark overlay-opacity-6 text-white">
                <!-- Imagen de fondo -->
                <img class="jarallax-img" srcset="/img/packs/diseno-fondo-abstracto_1297-82.avif" alt="...">
            </section>
            <div class="simple-space"></div>
            <section class="container tabs-section">
                <!-- Resumen de la Reserva -->
                <div class="reserva-header">
                    <h2>Tu selección</h2>
                    <div class="hotel-details">
                        <h3>{{ hotelName }}</h3>
                        <p>{{ hotelAddress }}</p>
                        <p>⭐ {{ hotelRating }} - {{ hotelReviews }} comentarios</p>
                        <div class="hotel-features">
                            <span v-for="feature in hotelFeatures" :key="feature" class="feature">{{ feature }}</span>
                        </div>
                    </div>
                </div>

                <!-- Contenedor principal con dos columnas -->
                <div class="reserva-body">
                    <!-- Columna izquierda: Los datos de la reserva + Desglose del precio -->
                    <div class="columna-izquierda">
                        <div class="reserva-info">
                            <h3>Los datos de tu reserva</h3>
                            <div class="reserva-dates">
                                <p><strong>Entrada:</strong> {{ checkInDate }} - {{ checkInTime }}</p>
                                <p><strong>Salida:</strong> {{ checkOutDate }} - {{ checkOutTime }}</p>
                                <p><strong>Duración total de la estancia:</strong> {{ totalNights }} noches</p>
                                <p><strong>Has seleccionado:</strong> {{ selectedRoomInfo }}</p>
                            </div>
                            <button class="btn-change">Cambia tu selección</button>
                        </div>

                        <div class="desglose-precio">
                            <h3>Desglose del precio</h3>
                            <div class="precio-detalles">
                                <p><strong>Precio original</strong> <span>S/ {{ originalPrice.toFixed(2) }}</span></p>
                                <p><strong>Oferta Escapada</strong> <span>- S/ {{ discount.toFixed(2) }}</span></p>
                                <p class="nota">Este alojamiento ofrece un descuento para estancias seleccionadas.</p>
                            </div>

                            <div class="precio-final">
                                <p class="tachado">S/ {{ originalPrice.toFixed(0) }}</p>
                                <h2>Precio <span>S/ {{ finalPrice.toFixed(2) }}</span></h2>
                                <p>Se pueden aplicar otros cargos</p>
                                <p>En la moneda del alojamiento: US$ {{ usdPrice.toFixed(2) }}</p>
                            </div>

                            <div class="info-precio">
                                <h3>Información sobre el precio</h3>
                                <ul>
                                    <li><strong>Convertimos el precio</strong> para que veas el coste aproximado en S/.
                                        Pagarás en US$ o en PEN.</li>
                                    <li>Ten en cuenta que tu tarjeta puede aplicar cargos por transacción internacional.
                                    </li>
                                    <li>Los ciudadanos de Perú deben abonar un 18% de IVA. Este impuesto no está
                                        incluido en el precio final.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="columna-derecha">
                        <!-- Sección de "¿Cómo te gustaría pagar?" -->
                        <div class="pago">
                            <h3>¿Cómo te gustaría pagar?</h3>

                            <div class="form-group">
                                <label for="titular-tarjeta">Titular de la tarjeta *</label>
                                <input type="text" id="titular-tarjeta" v-model="titularTarjeta" required />
                            </div>

                            <div class="form-group">
                                <label for="tipo-tarjeta">Tipo de tarjeta *</label>
                                <select id="tipo-tarjeta" v-model="tipoTarjeta" required>
                                    <option value="">-- Selecciona --</option>
                                    <option value="new-card">Visa</option>
                                    <option value="mastercard">Mastercard</option>
                                    <option value="amex">American Express</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="numero-tarjeta">Introduce un número de tarjeta válido *</label>
                                <input type="text" id="numero-tarjeta" v-model="numeroTarjeta" required />
                            </div>

                            <div class="form-group">
                                <label for="fecha-caducidad">Fecha de caducidad *</label>
                                <div class="fecha-caducidad">
                                    <select id="mes-caducidad" v-model="mesCaducidad" required>
                                        <option value="">Mes</option>
                                        <option value="01">01 - Ene</option>
                                        <option value="02">02 - Feb</option>
                                        <option value="03">03 - Mar</option>
                                    </select>

                                    <select id="anio-caducidad" v-model="anioCaducidad" required>
                                        <option value="">Año</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="cvc">Código CVC</label>
                                <input type="text" id="cvc" v-model="cvc" />
                                <p>No es necesario que indiques el código CVC para hacer esta reserva.</p>
                            </div>

                            <div class="form-group">
                                <input type="checkbox" id="aceptar-marketing" v-model="aceptarMarketing">
                                <label for="aceptar-marketing">Acepto recibir emails de marketing con promociones y
                                    recomendaciones personalizadas.</label>
                            </div>

                            <!-- Botones de acción dentro del formulario -->
                            <div class="botones-accion">
                                <button class="btn-comprobar" @click="comprobarDatos">Comprueba tus datos</button>
                                <button class="btn-reserva" @click="completarReserva">Completa la reserva</button>
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
            hotelName: "",
            hotelAddress: "",
            hotelRating: 0,
            hotelReviews: 0,
            checkInDate: "",
            checkInTime: "",
            checkOutDate: "",
            checkOutTime: "",
            totalNights: 0,
            selectedRoomInfo: "",
            hotelFeatures: [], // Asegúrate de que esta propiedad esté definida como un array vacío
            titularTarjeta: "",
            tipoTarjeta: "",
            numeroTarjeta: "",
            mesCaducidad: "",
            anioCaducidad: "",
            cvc: "",
            aceptarMarketing: false,
            reservationData: null, // Almacenará todos los detalles recibidos de la reserva
            originalPrice: 0,
            discount: 0,
            finalPrice: 0,
            usdPrice: 0,
            additionalCharges: 0 // Si hay cargos adicionales
        };
    },
    created() {
        // Verificar si hay datos en la query
        const encodedData = this.$route.query.data;
        if (encodedData) {
            // Decodificar y parsear los datos
            this.reservationData = JSON.parse(decodeURIComponent(encodedData));
            console.log("Datos recibidos de la reserva:", this.reservationData);

            // Actualizar las propiedades con los datos recibidos
            this.hotelName = this.reservationData.hotel.nombre;
            this.hotelAddress = this.reservationData.hotel.direccion;
            this.hotelRating = this.reservationData.hotel.rating;
            this.hotelReviews = this.reservationData.hotel.reviews;
            this.checkInDate = this.reservationData.checkInDate;

            if (this.reservationData.reservationDetails) {
                const datesArray = this.reservationData.reservationDetails.dates.split(' - ');
                this.checkInDate = datesArray[0] || "";
                this.checkOutDate = datesArray[1] || "";
            }

            this.checkOutTime = this.reservationData.checkOutTime;
            this.totalNights = this.calculateNights(this.checkInDate, this.checkOutDate);
            this.selectedRoomInfo = this.reservationData.selectedRoomInfo;
            this.hotelFeatures = this.reservationData.hotelFeatures || []; // Asigna el valor recibido o un array vacío

            this.checkInTime = "15:00";
            this.checkOutTime = "12:00";

            const room = this.reservationData.reservationDetails.selectedRooms[0];
            this.selectedRoomInfo = `Habitación: ${room.typebedroom_description} - Precio: S/. ${room.selectedRoom}. 
        Para ${this.reservationData.reservationDetails.guests.adults} adulto${this.reservationData.reservationDetails.guests.adults > 1 ? 's' : ''}`;

            if (this.reservationData.reservationDetails.guests.children > 0) {
                this.selectedRoomInfo += `, ${this.reservationData.reservationDetails.guests.children} niño${this.reservationData.reservationDetails.guests.children > 1 ? 's' : ''}`;
            }

            // Actualizar precios considerando el número de adultos y noches
            this.updatePrices(
                this.reservationData.reservationDetails.totalPrice,
                this.reservationData.reservationDetails.guests.adults,
                this.totalNights
            );
        } else {
            console.error("No se recibieron datos de la reserva.");
        }
    },

    methods: {
        calculateNights(checkInDate, checkOutDate) {
            // Calcula la cantidad de noches entre dos fechas
            const inDate = new Date(checkInDate);
            const outDate = new Date(checkOutDate);
            const diffTime = Math.abs(outDate - inDate);
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        },
        updatePrices(totalPrice, numberOfAdults, numberOfNights) {
            // Multiplicar totalPrice por número de adultos y noches
            console.log("Actualizando precios", totalPrice, numberOfAdults, numberOfNights);
            this.originalPrice = totalPrice * numberOfAdults * numberOfNights;

            // Calcular el descuento (por ejemplo, 20% de descuento)
            this.discount = this.originalPrice * 0.2;

            // Calcular el precio final después del descuento
            this.finalPrice = this.originalPrice - this.discount;

            // Calcular el precio en USD (asumiendo un tipo de cambio de 3.8)
            this.usdPrice = this.finalPrice / 3.8;

            // Calcular cargos adicionales (por ejemplo, 18% de IVA)
            this.additionalCharges = this.finalPrice * 0.18;
        },
        comprobarDatos() {
            console.log("Comprobación de datos. Datos de la reserva:", this.reservationData);
        },
        completarReserva() {
            // Combina todos los datos de la reserva con los detalles del pago
            const paymentDetails = {
                titularTarjeta: this.titularTarjeta,
                tipoTarjeta: this.tipoTarjeta,
                numeroTarjeta: this.numeroTarjeta,
                mesCaducidad: this.mesCaducidad,
                anioCaducidad: this.anioCaducidad,
                cvc: this.cvc,
                aceptarMarketing: this.aceptarMarketing
            };

            // Combina los datos de la reserva, los detalles del pago y los precios
            const completeReservationDetails = {
                ...this.reservationData,
                paymentDetails,
                priceDetails: {
                    originalPrice: this.originalPrice,
                    discount: this.discount,
                    finalPrice: this.finalPrice,
                    usdPrice: this.usdPrice,
                    additionalCharges: this.additionalCharges,
                    totalPrice: this.finalPrice + this.additionalCharges // Total final incluyendo IVA u otros cargos
                }
            };

            // Muestra los datos combinados en la consola para verificar
            console.log("Reserva completa a enviar al backend:", completeReservationDetails);

            // Realiza la solicitud POST al backend
            axios.post('https://guaros-backend-production.up.railway.app/api/v1/hotels-booking-client/create', completeReservationDetails)
                .then(response => {
                    console.log('Respuesta del backend:', response.data);
                    if (response.data.status === 200) {
                        alert('Reserva completada con éxito');
                        // Puedes redirigir a una página de confirmación si lo deseas
                        // this.$router.push('/confirmacion');
                    } else {
                        alert('Hubo un problema al completar la reserva.');
                    }
                })
                .catch(error => {
                    console.error('Error al enviar los datos al backend:', error);
                    alert('Error al completar la reserva. Por favor, intenta nuevamente.');
                });
        }

    }
};
</script>

<style scoped>
/* Contenedor de la página */
.container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Cabecera de la reserva */
.reserva-header {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Detalles del hotel */
.hotel-details h3 {
    margin-bottom: 10px;
    color: #333333;
}

.hotel-details p {
    color: #777777;
}

/* Características del hotel */
.hotel-features {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.feature {
    background-color: #e0e0e0;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
}

/* Cuerpo de la reserva con dos columnas */
.reserva-body {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
}

/* Columna izquierda */
.columna-izquierda,
.columna-derecha {
    width: 48%;
}

/* Datos de la reserva */
.reserva-info,
.desglose-precio,
.pago {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

/* Precio final */
.precio-final {
    background-color: #f0f8ff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

/* Texto tachado */
.tachado {
    text-decoration: line-through;
    color: red;
}

/* Botones */
.btn-comprobar,
.btn-reserva {
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    border: none;
}

.btn-change,
.btn-submit {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #dc3545;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-comprobar {
    background-color: #007bff;
    color: white;
}

.btn-comprobar:hover {
    background-color: #0056b3;
}

.btn-reserva {
    background-color: #28a745;
    color: white;
}

.btn-reserva:hover {
    background-color: #218838;
}

/* Formulario de pago */
.pago .form-group {
    margin-bottom: 15px;
}

.pago label {
    font-size: 14px;
    color: #333;
}

.pago input[type="text"],
.pago select {
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-sizing: border-box;
}

.fecha-caducidad {
    display: flex;
    justify-content: space-between;
}

.fecha-caducidad select {
    width: 48%;
}

.botones-accion {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
</style>
