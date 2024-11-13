<template>
    <main>
        <div class="">
            <section class=" jarallax overlay-dark overlay-opacity-6 text-white">
                <!-- Imagen de fondo -->
                <img class="jarallax-img" srcset="/img/packs/diseno-fondo-abstracto_1297-82.avif" alt="...">
            </section>
            <div class="simple-space"></div>
            <section class="container tabs-section">
                <div class="left-column">
                    <h2 class="title">{{ tourName }}</h2>
                    <form @submit.prevent="goToReservation" class="form-grid" id="form_reservations_dime1">
                        <!-- Datos del cliente -->
                        <div class="form-group-row">
                            <!-- Campo Nombre -->
                            <div class="form-group">
                                <label for="nombre">Nombre *</label>
                                <input type="text" v-model="nombre" class="input-field" required />
                            </div>

                            <!-- Campo Apellidos -->
                            <div class="form-group">
                                <label for="apellidos">Apellidos *</label>
                                <input type="text" v-model="apellidos" class="input-field" required />
                            </div>
                        </div>

                        <!-- Campo DNI -->
                        <div class="form-group full-width">
                            <label for="dni">DNI *</label>
                            <input type="text" v-model="dni" class="input-field" required />
                        </div>

                        <div class="form-group full-width">
                            <label for="email">E-mail *</label>
                            <input type="email" v-model="email" class="input-field" required />
                        </div>
                        <div class="form-group full-width">
                            <label for="telefono">Teléfono *</label>
                            <input type="tel" v-model="telefono" class="input-field" required />
                        </div>

                        <!-- Información adicional -->
                        <div class="info-adicional">
                            <h3>Información adicional</h3>
                            <div class="form-group full-width">
                                <label for="hotel">Indica el punto de recogida</label>
                                <select v-model="hotel" class="input-field">
                                    <option value="Hotel Monte VerdeGa">Hotel Monte Verde</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div class="form-group full-width">
                                <label for="requisito">¿Tienes algún requisito especial?</label>
                                <input type="text" v-model="requisito" class="input-field" />
                            </div>
                        </div>

                        <!-- Adulto -->
                        <div v-for="(adulto, index) in adultos" :key="index" class="form-group full-width">
                            <h3>Adulto {{ index + 1 }}</h3>
                            <div class="form-group">
                                <label :for="'adultoNombre' + index">Nombre *</label>
                                <input type="text" v-model="adulto.nombre" :id="'adultoNombre' + index"
                                    class="input-field" required />
                            </div>
                            <div class="form-group">
                                <label :for="'adultoApellidos' + index">Apellidos *</label>
                                <input type="text" v-model="adulto.apellidos" :id="'adultoApellidos' + index"
                                    class="input-field" required />
                            </div>
                        </div>

                        <!-- Infantil -->
                        <div v-for="(infantil, index) in infantiles" :key="index" class="form-group full-width">
                            <h3>Infantil {{ index + 1 }}</h3>
                            <div class="form-group">
                                <label :for="'infantilNombre' + index">Nombre</label>
                                <input type="text" v-model="infantil.nombre" :id="'infantilNombre' + index"
                                    class="input-field" />
                            </div>
                            <div class="form-group">
                                <label :for="'infantilApellidos' + index">Apellidos</label>
                                <input type="text" v-model="infantil.apellidos" :id="'infantilApellidos' + index"
                                    class="input-field" />
                            </div>
                        </div>

                        <div class="form-group full-width">
                            <button type="submit" class="btn btn-danger btn-block"
                                style="background-color: #b00; border-color: #b00;">
                                Reservar
                            </button>
                        </div>
                    </form>

                </div>
                <!-- Columna derecha: Resumen de la reserva -->
                <div class="right-column">
                    <div class="tour-summary">
                        <img :src="imagen_portada" alt="Imagen del tour" class="tour-image-small">

                        <div class="tour-details">
                            <h4>{{ tourName }}</h4>
                            <p>{{ adults }} × Adulto (edad: 4-99) - S/. {{ price_agencia }}</p>
                            <p>{{ children }} × Infantil (edad: 0-3) - S/. 0</p>
                            <p class="total-price-highlight">Precio total: <strong>S/. {{ totalPrice }}</strong></p>
                        </div>
                    </div>
                    <div class="cancelation-policy">
                        <p><strong>Condiciones de cancelación:</strong> Cancelación gratis hasta las 7:30 del {{
                            selectedDate }}</p>
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
            nombre: '',
            apellidos: '',
            dni: '',
            email: '',
            telefono: '',
            hotel: 'Hotel Monte VerdeGa',
            requisito: '',
            adultos: [], // Array para almacenar adultos (nombre y apellidos)
            infantiles: [], // Array para almacenar infantiles (nombre y apellidos)
            selectedTime: this.$route.query.selectedTime || '', // Recibe el nombre del tour
            tourName: this.$route.query.tourName || '', // Recibe el nombre del tour
            adults: parseInt(this.$route.query.adults, 10) || 0, // Cantidad de adultos
            children: parseInt(this.$route.query.children, 10) || 0, // Cantidad de niños
            price_agencia: this.$route.query.price_agencia || 0, // Precio de agencia
            totalPrice: this.$route.query.totalPrice || 0, // Precio total
            selectedDate: this.$route.query.selectedDate ? new Date(this.$route.query.selectedDate) : new Date(), // Convertir a Date
            selectedLanguage: this.$route.query.language || 'es', // Valor predeterminado si no se recibe el idioma
            imagen_portada: this.$route.query.imagen_portada || ''
        };
    },
    mounted() {
        // Inicializamos los arrays de adultos e infantiles según las cantidades recibidas
        this.initFormFields();
        console.log('Datos recibidos:', {
            tourName: this.tourName,
            adults: this.adults,
            children: this.children,
            price_agencia: this.price_agencia,
            totalPrice: this.totalPrice,
            selectedDate: this.selectedDate,
            selectedLanguage: this.selectedLanguage || 'es', // Valor predeterminado si no se recibe el idioma
            selectedTime: this.selectedTime,
            imagen_portada: this.imagen_portada
        });
    },
    methods: {
        initFormFields() {
            // Crear un array con un objeto vacío por cada adulto
            this.adultos = Array.from({ length: this.adults }, () => ({ nombre: '', apellidos: '' }));
            // Crear un array con un objeto vacío por cada niño
            this.infantiles = Array.from({ length: this.children }, () => ({ nombre: '', apellidos: '' }));
        },
        goToReservation() {
            // Crear un objeto con todos los datos del formulario (columna izquierda)
            const formData = {
                nombre: this.nombre,
                apellidos: this.apellidos,
                email: this.email,
                telefono: this.telefono,
                hotel: this.hotel,
                requisito: this.requisito,
                adultos: JSON.stringify(this.adultos), // Serializar adultos
                infantiles: JSON.stringify(this.infantiles), // Serializar infantiles
                booking_type: 'tour' // o 'hotel', 'experiencia', según el caso
            };

            // Crear un objeto con los datos del resumen (columna derecha)
            const resumenData = {
                tourName: this.tourName,
                adults: this.adults,
                children: this.children,
                price_agencia: this.price_agencia,
                totalPrice: this.totalPrice,
                selectedDate: this.selectedDate,
                selectedLanguage: this.selectedLanguage // Valor predeterminado si no se recibe el idioma
            };

            // Mostrar los datos combinados en consola antes de redirigir
            console.log('Datos del formulario y resumen:', { ...formData, ...resumenData });

            // Redirigir usando el router de Vue, pasando todos los datos combinados
            this.$router.push({
                path: '/payment',
                query: { ...formData, ...resumenData } // Pasamos directamente los datos en query
            });
        }



    }
};

</script>

<style scoped>
.gallery-container {
    display: flex;
    align-items: stretch;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    width: 100%;
    height: 100%;
}

.grid-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
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


.image-overlay {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.image-overlay img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.image-overlay:hover img {
    transform: scale(1.1);
}

.overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-overlay:hover .overlay-content {
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
    /* Fondo semi-transparente para el texto */
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.left-column,

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

.tabs-section {
    margin-bottom: 75px;
    /* Ajusta este valor según la distancia que desees */
}

.title {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #333;
}

.form-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}


.form-group {
    flex: 1;
    /* Asegura que ambos campos ocupen el mismo espacio */
}


.form-group-row {
    display: grid;
    /* Usamos CSS Grid */
    grid-template-columns: 1fr 1fr;
    /* Dos columnas iguales */
    gap: 20px;
    /* Espacio entre columnas */
    width: 100%;
    /* Ocupa todo el ancho disponible */
}

.full-width {
    grid-column: span 2;
    /* Para los campos que deben ocupar toda la fila */
}

.input-field {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    /* Asegura que el campo ocupe todo el ancho de la columna */
    box-sizing: border-box;
    /* Asegura que el padding no afecte el tamaño del campo */
}

.submit-button {
    display: block;
    text-align: center;
    width: 100%;
    background-color: #b00;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    /* Evita subrayados en el link */
}

.submit-button:hover {
    background-color: #a00;
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

.simple-space {
    margin-top: 20px;
    /* Ajusta el valor según el espacio que desees */
}

.tour-details {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    /* Elimina cualquier margen superior */
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
    text-align: left
}

.tour-details h4 {
    margin: 0 0 10px 0;
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;
}


.cancelation-policy {
    font-size: 0.9rem;
    color: #555;
}
</style>
