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

                <!-- Contenedor principal con dos columnas dentro del formulario -->
                <form @submit.prevent="submitForm" id="form_reserva_hotel">
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
                                <button type="button" class="btn-change">Cambia tu selección</button>
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
                                        <li>Ten en cuenta que tu tarjeta puede aplicar cargos por transacción internacional.</li>
                                        <li>Los ciudadanos de Perú deben abonar un 18% de IVA. Este impuesto no está incluido en el precio final.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Columna derecha: Introduce tus datos -->
                        <div class="columna-derecha">
                            <div class="reserva-form">
                                <h3>Introduce tus datos</h3>
                                <div class="form-group">
                                    <label for="nombre">Nombre *</label>
                                    <input type="text" id="nombre" v-model="nombre" required />
                                </div>
                                <div class="form-group">
                                    <label for="apellido">Apellido *</label>
                                    <input type="text" id="apellido" v-model="apellido" required />
                                </div>
                                <div class="form-group">
                                    <label for="email">E-mail *</label>
                                    <input type="email" id="email" v-model="email" required />
                                </div>
                                <div class="form-group">
                                    <label for="direccion">Dirección</label>
                                    <input type="text" id="direccion" v-model="direccion" />
                                </div>
                            </div>

                            <!-- Información útil -->
                            <div class="informacion-util">
                                <h3>Información útil</h3>
                                <p><i class="fas fa-credit-card"></i> No se necesita tarjeta de crédito</p>
                            </div>

                            <!-- Información de la habitación -->
                            <div class="habitacion-info" v-if="reservationDetails">
                                <div v-for="(room, index) in reservationDetails.selectedRooms" :key="index">
                                    <h3>{{ room.typebedroom_description }}</h3>
                                    <p><i class="icono-desayuno"></i> Desayuno incluido en el precio</p>
                                    <p>9.2 Fantástico - 3 comentarios</p>
                                    <p><i class="icono-cancelacion"></i> Cancelación gratis antes del 22 de septiembre de 2024</p>
                                    <p><i class="icono-pago"></i> Sin pago por adelantado - Pagarás en el alojamiento</p>
                                    <p><strong>Personas:</strong> {{ reservationDetails.guests.adults }} adulto(s), {{ reservationDetails.guests.children }} niño(s)</p>
                                    <p><i class="icono-no-fumar"></i> No se puede fumar</p>
                                </div>
                                <p><strong>Total a pagar:</strong> S/. {{ finalPrice.toFixed(2) }}</p>
                            </div>
                            <div v-else>
                                <p>No se encontraron detalles de la reserva.</p>
                            </div>

                            <!-- Opciones para añadir a tu reserva -->
                            <div class="opciones-reserva">
                                <h3>Opciones para añadir a tu reserva</h3>
                                <div class="form-group">
                                    <input type="checkbox" id="traslado" v-model="traslado" />
                                    <label for="traslado"><i class="fas fa-plane"></i> Quiero solicitar el servicio de traslado desde el aeropuerto</label>
                                    <p>Le diremos al alojamiento que te interesa este servicio para que puedan enviarte más información además de los precios.</p>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" id="alquilar-coche" v-model="alquilarCoche" />
                                    <label for="alquilar-coche"><i class="fas fa-car"></i> Quiero alquilar un coche</label>
                                    <p>¡Aprovecha al máximo tu viaje! Consulta las opciones de alquiler de coches en la confirmación de la reserva.</p>
                                </div>
                            </div>

                            <!-- Peticiones especiales -->
                            <div class="peticiones-especiales">
                                <h3>Peticiones especiales</h3>
                                <div class="form-group">
                                    <label for="peticiones">Escribe tus peticiones en inglés o en español. (opcional)</label>
                                    <textarea id="peticiones" v-model="peticiones" rows="4"></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" id="habitaciones-cerca" v-model="habitacionesCerca" />
                                    <label for="habitaciones-cerca">Me gustaría que mis habitaciones estuviesen cerca (si es posible)</label>
                                </div>
                            </div>

                            <!-- Tu hora de llegada -->
                            <div class="hora-llegada">
                                <h3>Tu hora de llegada</h3>
                                <div class="form-group">
                                    <label for="hora-llegada">Añade tu hora de llegada aproximada (opcional)</label>
                                    <select id="hora-llegada" v-model="horaLlegada">
                                        <option value="">Indica una hora</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                        <option value="17:00">17:00</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Botón de envío -->
                            <div class="btn-container">
                                <button type="submit" class="btn-siguiente" style="background-color: #b00; border-color: #b00;">
                                    Reservar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
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
            hotelFeatures: [],
            reservationDetails: null,
            checkInDate: "",
            checkInTime: "",
            checkOutDate: "",
            checkOutTime: "",
            totalNights: 0,
            selectedRoomInfo: "",
            nombre: "",
            apellido: "",
            email: "",
            direccion: "",
            traslado: false,
            alquilarCoche: false,
            peticiones: "",
            habitacionesCerca: false,
            horaLlegada: "",
            // Propiedades para el desglose de precios
            originalPrice: 0,
            discount: 0,
            finalPrice: 0,
            usdPrice: 0,
            additionalCharges: 0 // Si hay cargos adicionales
        };
    },
    created() {
        // Decodificar y parsear los datos de la query
        const reservationData = this.$route.query.data;
        if (reservationData) {
            this.reservationDetails = JSON.parse(decodeURIComponent(reservationData));
            console.log("Detalles de la reserva recibidos:", this.reservationDetails);

            // Actualizar los valores del hotel desde reservationDetails
            this.hotelName = this.reservationDetails.hotel?.nombre || "";
            this.hotelAddress = this.reservationDetails.hotel?.direccion || "";
            this.hotelRating = this.reservationDetails.hotel?.rating || 0;
            this.hotelReviews = this.reservationDetails.hotel?.reviews || 0;
            this.hotelFeatures = this.reservationDetails.hotel?.services?.map(service => service.name) || [];

            if (this.reservationDetails.dates) {
                const datesArray = this.reservationDetails.dates.split(' - ');
                this.checkInDate = datesArray[0] || "";
                this.checkOutDate = datesArray[1] || "";
            }

            this.checkInTime = "15:00";
            this.checkOutTime = "12:00";
            this.totalNights = this.calculateNights(this.checkInDate, this.checkOutDate);
            const room = this.reservationDetails.selectedRooms[0];

            this.selectedRoomInfo = `Habitación: ${room.typebedroom_description} - Precio: S/. ${room.selectedRoom}. 
            Para ${this.reservationDetails.guests.adults} adulto${this.reservationDetails.guests.adults > 1 ? 's' : ''}`;

            if (this.reservationDetails.guests.children > 0) {
                this.selectedRoomInfo += `, ${this.reservationDetails.guests.children} niño${this.reservationDetails.guests.children > 1 ? 's' : ''}`;
            }

            console.log("Ga" ,room);

            // Actualizar precios
            this.updatePrices(this.reservationDetails.totalPrice, this.reservationDetails.guests.adults);
        } else {
            console.error("No se recibieron detalles de la reserva.");
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
        updatePrices(totalPrice, numberOfAdults) {
            // Multiplica el totalPrice por el número de adultos
            this.originalPrice = totalPrice * numberOfAdults;

            this.discount = this.originalPrice * 0.2; // Por ejemplo, 20% de descuento
            this.finalPrice = this.originalPrice - this.discount;
            this.usdPrice = this.finalPrice / 3.8; // Convertir a USD, suponiendo un tipo de cambio de 3.8
            this.additionalCharges = this.finalPrice * 0.18; // 18% de IVA, por ejemplo
        },
        submitForm() {
            // Combina todos los datos del formulario y la reserva
            const formDetails = {
                nombre: this.nombre,
                apellido: this.apellido,
                email: this.email,
                direccion: this.direccion,
                traslado: this.traslado,
                alquilarCoche: this.alquilarCoche,
                peticiones: this.peticiones,
                habitacionesCerca: this.habitacionesCerca,
                horaLlegada: this.horaLlegada
            };

            // Combina formDetails con reservationDetails
            const combinedDetails = {
                hotel: {
                    nombre: this.hotelName,
                    direccion: this.hotelAddress,
                    rating: this.hotelRating,
                    reviews: this.hotelReviews,
                    features: this.hotelFeatures
                },
                reservationDetails: this.reservationDetails,
                formDetails: formDetails,
                priceDetails: {
                    originalPrice: this.originalPrice,
                    discount: this.discount,
                    finalPrice: this.finalPrice,
                    usdPrice: this.usdPrice,
                    additionalCharges: this.additionalCharges
                }
            };

            // Convierte a JSON y codifica
            const combinedDetailsEncoded = encodeURIComponent(JSON.stringify(combinedDetails));

            console.log('Datos completos a enviar:', combinedDetails);

            // Navega al componente PaymentHotel.vue con todos los datos en el query
            this.$router.push({ path: '/PaymentHotel', query: { data: combinedDetailsEncoded } });
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

/* Estilo de la cabecera de la reserva */
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

/* Estilo para las características del hotel */
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
    /* Alinea las dos columnas */
    gap: 20px;
    /* Espacio entre las dos columnas */
    margin-top: 20px;
}

/* Columna izquierda con los datos de la reserva */
.columna-izquierda {
    width: 48%;
    /* 48% del ancho total */
}

/* Columna derecha con el formulario */
.columna-derecha {
    width: 48%;
    /* 48% del ancho total */
}

/* Estilo para los datos de la reserva */
.reserva-info,
.desglose-precio,
.reserva-form {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

/* Estilos específicos para el desglose del precio */
.precio-final {
    background-color: #f0f8ff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

/* Texto tachado para precios anteriores */
.tachado {
    text-decoration: line-through;
    color: red;
}

/* Botón para cambiar la selección */
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

.btn-change:hover,
.btn-submit:hover {
    background-color: #c82333;
}

/* Contenedor que alinea el botón a la derecha */
.btn-container {
    text-align: right;
}

/* Botón para capturar los valores */
.btn-siguiente {
    float: right;
    /* Alinea el botón a la derecha */
    display: inline-block;
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #c82333;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-siguiente:hover {
    background-color: #a71d2a;
    /* Cambia el color de hover para contraste */
}


/* Estilos para el formulario */
.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: #333333;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-sizing: border-box;
}

/* Información útil */
.informacion-util {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.informacion-util h3 {
    margin-bottom: 10px;
}

.informacion-util p {
    color: #555;
    font-size: 14px;
}

/* Información de la habitación */
.habitacion-info {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.habitacion-info h3 {
    margin-bottom: 10px;
}

.habitacion-info p {
    color: #555;
    font-size: 14px;
}

.caracteristicas-habitacion span {
    display: inline-block;
    margin: 5px;
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
}

.formulario-adicional {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.formulario-adicional .form-group {
    width: 48%;
}

.formulario-adicional input {
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-sizing: border-box;
}


/* Opciones para añadir a tu reserva */
.opciones-reserva,
.peticiones-especiales,
.hora-llegada {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.opciones-reserva h3,
.peticiones-especiales h3,
.hora-llegada h3 {
    margin-bottom: 15px;
}

.opciones-reserva .form-group,
.peticiones-especiales .form-group,
.hora-llegada .form-group {
    margin-bottom: 15px;
}

.opciones-reserva label,
.peticiones-especiales label {
    font-size: 16px;
    color: #333;
}

.opciones-reserva p,
.peticiones-especiales p,
.hora-llegada p {
    font-size: 14px;
    color: #777;
}

textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-sizing: border-box;
}

select {
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-sizing: border-box;
}

input[type="checkbox"] {
    margin-right: 10px;
}

/* Íconos FontAwesome para las secciones */
.opciones-reserva i,
.peticiones-especiales i,
.hora-llegada i {
    margin-right: 10px;
    color: #28a745;
}
</style>
