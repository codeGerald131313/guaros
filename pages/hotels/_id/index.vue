<template>

    <!-- Page Content -->
    <main>
        <div class="">
            <!-- COVER -->
            <section class=" jarallax overlay-dark overlay-opacity-6 text-white">

                <!-- jarallax image -->
                <img class="jarallax-img " srcset="/img/packs/diseno-fondo-abstracto_1297-82.avif " alt="...">


                <div class="container position-relative">



                    <!-- Barra de búsqueda (debe estar sobre el contenido de la sección) -->
                    <div class="search-bar d-flex align-items-center">
                        <div class="search-bar-item">
                            <input type="text" id="search_destination" placeholder="¿A dónde viajas?"
                                class="form-control border-0">
                        </div>

                        <div class="search-bar-item">
                            <input type="text" id="book_date" name="date" readonly
                                class="form-control border-0 rangepicker" placeholder="Selecciona fechas"
                                autocomplete="off">
                        </div>

                        <div class="search-bar-item search-bar-button">
                            <button type="submit" class="btn btn-danger w-100">Buscar</button>
                        </div>
                    </div>
                </div>

            </section>
            <!-- /COVER -->

            <!-- Tabs Section -->
            <section class="container py-5">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs custom-tabs justify-content-center" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                            aria-selected="false">Vista General</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                            aria-controls="profile" aria-selected="true">Info y precios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                            aria-controls="contact" aria-selected="false">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="about-tab" data-toggle="tab" href="#about" role="tab"
                            aria-controls="about" aria-selected="false">Normas de la casa</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="surrounding-tab" data-toggle="tab" href="#surrounding" role="tab"
                            aria-controls="surrounding" aria-selected="false">Alrededores</a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content ">
                    <div class="tab-pane fade " id="home" role="tabpanel" aria-labelledby="home-tab">
                        <section class="room-selection-section py-5">
                            <h3 class="section-title text-center mb-5">Información General</h3>

                            <div class="row gx-4">
                                <!-- Contenedor principal para igualar altura -->
                                <div class="d-flex flex-wrap">
                                    <!-- Hotel Gallery -->
                                    <div class="col-md-6 d-flex align-items-stretch mb-4 mb-md-0">
                                        <div class="gallery-container position-relative rounded-3 shadow-sm">
                                            <div class="grid-container">
                                                <!-- Recorre las imágenes del hotel -->
                                                <div v-for="(image, index) in hotel.images" :key="image.id"
                                                    class="grid-item">
                                                    <div class="image-overlay">
                                                        <img :src="`https://guaros-backend-production.up.railway.app/storage/${image.image_path}`"
                                                            alt="Imagen del Hotel">
                                                        <div class="overlay-content">
                                                            <h5 class="text-white">Imagen {{ index + 1 }}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Hotel Information -->
                                    <div class="col-md-6 d-flex align-items-stretch">
                                        <div class="hotel-info p-4 bg-light rounded-3 shadow-sm flex-grow-1">
                                            <h2 class="hotel-title mb-3 fw-bold text-danger">
                                                {{ hotel.nombre }}
                                            </h2>
                                            <p class="hotel-address text-muted mb-2">
                                                <i class="fas fa-map-marker-alt"></i> {{ hotel.direccion }}
                                            </p>
                                            <p class="hotel-description mb-4 text-dark">
                                                {{ hotel.descripcion }}
                                            </p>

                                            <h4 class="services-title mb-3 fw-bold text-dark">Servicios</h4>
                                            <ul class="list-unstyled services-list">
                                                <li v-for="service in hotel.services" :key="service.id" class="mb-2">
                                                    <i :class="service.icon + ' text-muted icon-spacing'"></i> {{
                                                    service.name }}
                                                </li>
                                            </ul>

                                            <h4 class="price-title mt-4 fw-bold text-dark">Precio por Noche</h4>
                                            <p class="price h2 text-danger fw-bold">S/ 150.00</p>

                                            <button
                                                class="btn btn-danger btn-lg mt-3 px-5 rounded-pill shadow-sm">Reservar
                                                Ahora</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <section class="room-selection-section py-5">
                            <div class="container">
                                <h3 class="section-title text-center mb-5">Selección de Habitaciones</h3>

                                <!-- Subtítulo "Disponibilidad" centrado en el lado izquierdo -->
                                <h4 class="availability-subtitle text-left">Disponibilidad</h4>

                                <div class="availability-bar">
                                    <div class="availability-section">
                                        <div class="date-picker">
                                            <input type="text" id="book_date" name="date"
                                                class="form-control border-0 rangepicker"
                                                placeholder="Selecciona fechas" autocomplete="off">
                                        </div>
                                        <div class="guests-picker">
                                            <div class="guests-select" @click="toggleDropdown">
                                                <div class="guests-info">
                                                    <span>{{ guestsSummary }}</span>
                                                    <i class="arrow" :class="{ open: isDropdownOpen }"></i>
                                                </div>

                                                <div class="dropdown-menu" v-if="isDropdownOpen">
                                                    <div class="guest-counter">
                                                        <label>Adultos</label>
                                                        <div class="counter">
                                                            <button class="btn-minus"
                                                                @click="decrease('adults')">-</button>
                                                            <span class="guest-count">{{ adults }}</span>
                                                            <button class="btn-plus"
                                                                @click="increase('adults')">+</button>
                                                        </div>
                                                    </div>
                                                    <div class="guest-counter">
                                                        <label>Niños</label>
                                                        <div class="counter">
                                                            <button class="btn-minus"
                                                                @click="decrease('children')">-</button>
                                                            <span class="guest-count">{{ children }}</span>
                                                            <button class="btn-plus"
                                                                @click="increase('children')">+</button>
                                                        </div>
                                                    </div>
                                                    <div class="guest-counter">
                                                        <label>Habitaciones</label>
                                                        <div class="counter">
                                                            <button class="btn-minus"
                                                                @click="decrease('rooms')">-</button>
                                                            <span class="guest-count">{{ rooms }}</span>
                                                            <button class="btn-plus"
                                                                @click="increase('rooms')">+</button>
                                                        </div>
                                                    </div>
                                                    <button class="btn-done" @click="closeDropdown">Listo</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="btn btn-check-availability">Ver disponibilidad</button>
                                    </div>
                                </div>

                                <div class="table-responsive">
                                    <table class="table table-bordered table-hover table-modern">
                                        <thead>
                                            <tr>
                                                <th>Tipo de Habitación</th>
                                                <th>Número de Personas</th>
                                                <th>Precio de Hoy</th>
                                                <th>Tus Opciones</th>
                                                <th>Seleccionar Habitaciones</th>
                                                <th>Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(type, index) in hotelTypes" :key="type.id">
                                                <td class="room-type">
                                                    <strong>{{ type.typebedroom_description }}</strong>
                                                    <ul class="room-features">
                                                        <!-- Puedes agregar características específicas si están disponibles -->
                                                        <li><i class="fas fa-check"></i> Ejemplo de característica</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div class="people-icons">
                                                        <i class="fas fa-user"></i>
                                                        <!-- Suponiendo que cada habitación tiene un número específico -->
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="price-block">
                                                        <div class="price-current">S/ {{ type.price }}</div>
                                                        <div class="price-note">Incluye impuestos y cargos</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="options-list">
                                                        <li v-if="type.option">
                                                            <i class="fas fa-check-circle"></i> {{ type.option.name }}
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <!-- Añadir la opción 0 al selector -->
                                                    <select class="form-select" v-model="type.selectedRoom"
                                                        @change="updateSelection(type)">
                                                        <option value="0">S/. 0.00</option>
                                                        <option v-for="n in type.availableRooms" :key="n" :value="n">
                                                            S/.{{ n }}
                                                        </option>
                                                    </select>
                                                </td>


                                                <td>
                                                    <!-- Solo mostrar el botón y resumen de selección en la primera fila -->
                                                    <div v-if="index === 0">
                                                        <button class="btn btn-primary btn-block" id="sendReservationHotel" 
                                                            @click="reserveAllRooms">Reservar</button>
                                                        <div v-if="selectedRooms.length > 0" class="mt-3">
                                                            <p><strong>Habitaciones seleccionadas:</strong></p>
                                                            <ul>
                                                                <li v-for="room in selectedRooms" :key="room.id">
                                                                    {{ room.typebedroom_description }} - Precio: S/.{{
                                                                        room.selectedRoom }}
                                                                </li>
                                                            </ul>
                                                            <p><strong>Total a pagar: S/. {{ totalPrice.toFixed(2)
                                                                    }}</strong></p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>


                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                        <!-- Nueva Sección de Servicios en Tres Columnas -->
                        <section class="room-selection-section py-5">
                            <h3 class="section-title text-center mb-4">Servicios del Hotel</h3>
                            <div class="row">
                                <!-- Utiliza v-for para recorrer las columnas generadas dinámicamente -->
                                <div v-for="(column, index) in columns" :key="index" class="col-md-4 mb-4">
                                    <div class="service-block bg-light p-4 rounded shadow-sm text-center">
                                        <div class="service-icon mb-3">
                                            <i :class="getIconForCategory(column.title) + ' fa-3x'"></i>
                                        </div>
                                        <h4 class="service-category-title mb-3">{{ column.title }}</h4>
                                        <ul class="list-unstyled services-list">
                                            <!-- Lista los servicios en la columna actual -->
                                            <li v-for="(service, sIndex) in column.services" :key="sIndex">
                                                <i :class="service.icon + ' text-muted'"></i> {{ service.name }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>



                    </div>
                    <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <section class="room-selection-section py-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <h3 class="text-center mb-4 display-6 text-dark font-weight-bold">Normas de la Casa
                                    </h3>
                                    <p class="text-center mb-5 text-muted">Residencial Brest Amazon Tarapoto acepta
                                        peticiones especiales. ¡Añádelas en el siguiente paso!</p>

                                    <div class="card shadow-lg border-0">
                                        <div class="card-body p-5 bg-light">
                                            <div class="row">
                                                <!-- Fila 1 -->
                                                <div class="col-md-6 mb-4">
                                                    <div class="d-flex flex-column align-items-start">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-sign-in-alt fa-lg text-dark mr-3"></i>
                                                            <h4 class="h5 text-dark mb-0">Entrada</h4>
                                                        </div>
                                                        <p class="text-muted ml-4">{{ hotel.rules.entrada }}</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 mb-4">
                                                    <div class="d-flex flex-column align-items-start">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-sign-out-alt fa-lg text-dark mr-3"></i>
                                                            <h4 class="h5 text-dark mb-0">Salida</h4>
                                                        </div>
                                                        <p class="text-muted ml-4">{{ hotel.rules.salida }}</p>
                                                    </div>
                                                </div>

                                                <!-- Fila 2 -->
                                                <div class="col-md-6 mb-4">
                                                    <div class="d-flex flex-column align-items-start">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-money-check-alt fa-lg text-dark mr-3"></i>
                                                            <h4 class="h5 text-dark mb-0">Cancelación / prepago</h4>
                                                        </div>
                                                        <p class="text-muted ml-4">
                                                            Las condiciones de cancelación y de pago por adelantado
                                                            pueden variar según el tipo de alojamiento.
                                                            Consulta las <a href="#" class="text-dark">condiciones</a>
                                                            que puede tener cada opción cuando la elijas.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 mb-4">
                                                    <div class="d-flex flex-column align-items-start">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-bed fa-lg text-dark mr-3"></i>
                                                            <h4 class="h5 text-dark mb-0">Camas para niños</h4>
                                                        </div>
                                                        <p class="text-muted ml-4 mb-2"><strong>Condiciones para
                                                                estancias con niños:</strong></p>
                                                        <ul class="list-unstyled text-muted ml-4">
                                                            <li>Se pueden alojar niños de cualquier edad.</li>
                                                            <li>Los niños a partir de 5 años pagan como adultos en este
                                                                alojamiento.</li>
                                                        </ul>
                                                        <p class="text-muted ml-4 mb-2"><strong>Condiciones sobre cunas
                                                                y camas supletorias:</strong></p>
                                                        <ul class="list-unstyled text-muted ml-4">
                                                            <li>Más de 0 años: Cama supletoria a petición (US$13 por
                                                                persona y noche).</li>
                                                        </ul>
                                                        <p class="text-muted ml-4">No hay cunas disponibles en este
                                                            alojamiento.</p>
                                                        <p class="text-muted ml-4">Todas las camas supletorias están
                                                            sujetas a disponibilidad.</p>
                                                    </div>
                                                </div>

                                                <!-- Fila 3 -->
                                                <div class="col-md-6 mb-4">
                                                    <div class="d-flex flex-column align-items-start">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-user-check fa-lg text-dark mr-3"></i>
                                                            <h4 class="h5 text-dark mb-0">Restricción por edad</h4>
                                                        </div>
                                                        <p class="text-muted ml-4">Edad mínima para el check-in: 18</p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 mb-4">
                                                    <div class="d-flex flex-column align-items-start">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-paw fa-lg text-dark mr-3"></i>
                                                            <h4 class="h5 text-dark mb-0">Mascotas</h4>
                                                        </div>
                                                        <p class="text-muted ml-4">No se admiten.</p>
                                                    </div>
                                                </div>

                                                <!-- Fila 4 -->
                                                <div class="col-md-12">
                                                    <div class="d-flex flex-column align-items-start">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-credit-card fa-lg text-dark mr-3"></i>
                                                            <h4 class="h5 text-dark mb-0">Métodos de pago aceptados</h4>
                                                        </div>
                                                        <p class="text-muted ml-4">
                                                            Residencial Brest Amazon Tarapoto acepta estas tarjetas y se
                                                            reserva el derecho de cargar de forma temporal una cantidad
                                                            antes de la entrada.
                                                            <!-- Aquí puedes incluir los íconos de tarjetas de crédito -->
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>




                    </div>
                    <div class="tab-pane fade" id="surrounding" role="tabpanel" aria-labelledby="surrounding-tab">


                        <!-- Nueva Sección de Alrededores del Hotel -->
                        <section class="room-selection-section py-5">
                            <h3 class="section-title text-center mb-4">Explora los Alrededores del Hotel</h3>
                            <div class="row">
                                <!-- Utiliza v-for para recorrer las categorías de alrededores -->
                                <div v-for="category in uniqueCategories" :key="category" class="col-md-4">
                                    <div class="surrounding-category">
                                        <div class="category-icon">
                                            <i :class="getCategoryIcon(category) + ' fa-lg'"></i>
                                        </div>
                                        <h4 class="surroundings-category-title">{{ category }}</h4>

                                        <ul class="list-unstyled surroundings-list">
                                            <!-- Filtra y lista los alrededores según la categoría -->
                                            <li v-for="surrounding in filteredSurroundings(category)"
                                                :key="surrounding.id" class="surrounding-item">
                                                <span class="item-name">{{ surrounding.place_name }}</span>
                                                <span class="item-distance">{{ surrounding.description }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            </section>

        </div>
    </main>
</template>

<script>

export default {
    layout: 'default', // Asegúrate de que este layout está configurado correctamente
    data() {
        return {
            selectedRooms: [], // Para almacenar las selecciones de habitaciones
            totalPrice: 0, // Total acumulado de la reserva
            hotel: {

                nombre: '',
                direccion: '',
                descripcion: '',
                telefono: '',
                imagen_principal_url: '',
                services: [],
                rules: {
                    entrada: '',
                    salida: ''
                },
                surroundings: [],
                services_dos: [], // Array para los servicios en columnas


                // Incluye otros campos si es necesario
            },
            hotelTypes: [],
            selectedRoom: null, // Para almacenar la selección de habitación

            columns: [], // Array para almacenar las columnas con los servicios organizados
            numberOfPeople: 2,
            adults: 2,
            children: 0,
            rooms: 1,
            isDropdownOpen: false
        };
    },
    computed: {
        guestsSummary() {
            return `${this.adults} adultos · ${this.children} niños · ${this.rooms} habitación${this.rooms > 1 ? 'es' : ''}`;
        },
        uniqueCategories() {
            const categories = this.hotel.surroundings.map(s => s.category);
            return [...new Set(categories)];
        },
        formattedHotelTypes() {
            // Devuelve los tipos de habitaciones formateados
            return this.hotelTypes.map(type => ({
                ...type,
                price: `$${type.price}`, // Ejemplo de formato
            }));
        },
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        // Organizar servicios en columnas basadas en la categoría
        organizeServicesIntoColumns() {
            // Crear un objeto para almacenar servicios organizados por `category`
            const servicesByCategory = this.hotel.services.reduce((acc, service) => {
                if (!acc[service.category]) {
                    acc[service.category] = [];
                }
                acc[service.category].push(service);
                return acc;
            }, {});

            // Convertir el objeto en una lista de columnas
            this.columns = Object.keys(servicesByCategory).map(category => {
                return {
                    title: category, // Usar `category` como título
                    services: servicesByCategory[category].map(service => ({
                        name: service.name,
                        icon: service.icon
                    })) // Extraer `name` e `icon` de cada servicio
                };
            });
        },
        // Actualiza las selecciones cuando cambia el valor del select
        updateSelection(type) {
            // Convertir price y selectedRoom a número
            const roomPrice = parseFloat(type.selectedRoom);

            // Ver si ya existe una selección para este tipo
            const existingRoomIndex = this.selectedRooms.findIndex(room => room.id === type.id);

            if (existingRoomIndex !== -1) {
                // Si ya existe, restamos el precio anterior
                this.totalPrice -= parseFloat(this.selectedRooms[existingRoomIndex].selectedRoom);

                // Si el nuevo valor es 0, eliminamos la habitación de la selección
                if (roomPrice === 0) {
                    this.selectedRooms.splice(existingRoomIndex, 1);  // Elimina el registro de la selección
                } else {
                    // Actualizamos la selección y sumamos el nuevo precio
                    this.selectedRooms[existingRoomIndex].selectedRoom = type.selectedRoom;
                    this.totalPrice += roomPrice;
                }
            } else {
                // Si no existe, la agregamos y sumamos el precio (si no es 0)
                if (roomPrice !== 0) {
                    this.selectedRooms.push({
                        id: type.id,
                        typebedroom_description: type.typebedroom_description,
                        selectedRoom: type.selectedRoom
                    });
                    this.totalPrice += roomPrice;  // Sumar el nuevo precio
                }
            }
        },

        // Obtener el icono según la categoría del servicio (personaliza según tus necesidades)
        getIconForCategory(category) {
            switch (category) {
                case 'Instalaciones de la habitación':
                    return 'fa-solid fa-bed'; // Ejemplo, personaliza según la categoría
                case 'Servicios de Recepción':
                    return 'fa-solid fa-info-circle';
                default:
                    return 'fa-solid fa-cogs'; // Icono por defecto
            }
        },
        // Filtra los servicios por categoría
        getServicesByCategory(category) {
            return this.hotel.services_dos.filter(service => service.category === category);
        },
        cleanRuleText(text) {
            return text.replace(/\\+/g, '').replace(/"/g, '');
        },
        closeDropdown() {
            this.isDropdownOpen = false;
        },
        increase(type) {
            if (type === 'adults') this.adults++;
            if (type === 'children') this.children++;
            if (type === 'rooms') this.rooms++;
        },
        decrease(type) {
            if (type === 'adults' && this.adults > 1) this.adults--;
            if (type === 'children' && this.children > 0) this.children--;
            if (type === 'rooms' && this.rooms > 1) this.rooms--;
        },
        reserveRoom(type) {
            // Capturamos los valores de la habitación seleccionada y otros detalles
            const reservationDetails = {
                roomType: type.typebedroom_description,
                price: type.price,
                selectedRoom: this.selectedRoom, // Habitación seleccionada
                adults: this.adults,
                children: this.children,
                rooms: this.rooms
            };

            // Mostramos los valores en la consola
            console.log("Detalles de la reserva:", reservationDetails);
        },
        // Procesar todas las habitaciones seleccionadas con un cargador de 1 segundo
        // Procesar todas las habitaciones seleccionadas con un cargador de 1 segundo
        reserveAllRooms() {
            if (this.selectedRooms.length === 0) {
                alert('Por favor, selecciona al menos una habitación.');
                return;
            }

            // Capturamos los valores de los huéspedes y fechas
            const reservationDetails = {
                guests: {
                    adults: this.adults,
                    children: this.children,
                    rooms: this.rooms
                },
                dates: document.getElementById('book_date').value, // Capturamos la fecha seleccionada en el input
                selectedRooms: this.selectedRooms, // Habitaciones seleccionadas
                totalPrice: this.totalPrice, // Total a pagar
                hotel: {
                    nombre: this.hotel.nombre,
                    direccion: this.hotel.direccion,
                    descripcion: this.hotel.descripcion,
                    telefono: this.hotel.telefono,
                    imagen_principal_url: this.hotel.imagen_principal_url,
                    services: this.hotel.services,
                    rules: this.hotel.rules,
                    surroundings: this.hotel.surroundings
                }
            };

            // Convertimos los detalles de la reserva en una cadena JSON y la codificamos
            const reservationQuery = encodeURIComponent(JSON.stringify(reservationDetails));

            // Navegar a la ruta de destino con los datos como query
            this.$router.push({ path: '/ReservaResumen', query: { data: reservationQuery } });
        },

        // Filtra los surroundings por categoría
        filteredSurroundings(category) {
            return this.hotel.surroundings.filter(s => s.category === category);
        },
        fetchHotelTypes(hotelId) {
            axios.get(`https://guaros-backend-production.up.railway.app/api/v1/hotels-client/${hotelId}/rooms`)
                .then(response => {
                    if (response.data.status === 'success') {
                        // Almacenar los tipos de habitaciones en una variable de estado
                        this.hotelTypes = response.data.data;
                        console.log(this.hotel.hotelTypes);
                    } else {
                        console.error('Error al obtener los tipos de habitaciones:', response.data.message);
                    }
                })
                .catch(error => {
                    console.error('Error en la solicitud:', error);
                });
        },
        // Devuelve el icono basado en la categoría
        getCategoryIcon(category) {
            // Puedes ajustar estos iconos según sea necesario
            const icons = {
                'Restaurantes Cercanos': 'fas fa-utensils',
                'Atracciones Turísticas': 'fas fa-landmark',
                'Transporte': 'fas fa-bus'
            };
            return icons[category] || 'fas fa-info-circle'; // Default icon
        }
    },
    mounted() {
        // Capturar el parámetro de la ruta (ID del hotel)
        const routeId = this.$route.params.id;
        console.log('ID from route:', routeId);

        this.fetchHotelTypes(routeId);

        // Hacer la solicitud al backend con axios para obtener los detalles del hotel
        axios.get(`https://guaros-backend-production.up.railway.app/api/v1/hotels-client/record/${routeId}`)
            .then(response => {
                if (response.data.status === 'success') {
                    // Almacenar los datos del hotel en la variable de estado
                    this.hotel = response.data.data;
                    this.organizeServicesIntoColumns();

                    // Formatear la URL de la imagen principal
                    this.hotel.imagen_principal_url = `https://guaros-backend-production.up.railway.app/storage/${this.hotel.imagen_principal}`;

                    this.hotel.rules = {
                        entrada: this.cleanRuleText(this.hotel.rules.find(rule => rule.category_id === 1)?.rule_text || ''),
                        salida: this.cleanRuleText(this.hotel.rules.find(rule => rule.category_id === 2)?.rule_text || '')
                    };
                } else {
                    console.error('Error al obtener los datos del hotel:', response.data.message);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    }

}
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px; /* Espacio entre imágenes */
}
.grid-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Bordes redondeados para las imágenes */
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

.grid-item-1 {
    grid-column: span 2;
    grid-row: span 2;
}

.grid-item-2 {
    grid-column: span 2;
    grid-row: span 1;
}

.grid-item-3 {
    grid-column: span 1;
    grid-row: span 1;
}

.grid-item-4 {
    grid-column: span 1;
    grid-row: span 1;
}

.custom-tabs .nav-item {
    margin: 0 10px;
}

.custom-tabs .nav-link {
    background-color: #f8f9fa;
    border: none;
    padding: 15px 20px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    color: #c0392b;
    /* Rojo suave */
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}


.custom-tabs .nav-link.active {
    background-color: #dc3545;
    /* Rojo menos intenso */
    color: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.custom-tabs .nav-link:hover {
    background-color: #f1948a;
    /* Rojo más suave para hover */
    color: #c0392b;
}

.tab-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    
}


.tab-content h4 {
    font-size: 24px;
    margin-bottom: 15px;
}

.tab-content p {
    font-size: 16px;
    color: #7f8c8d;
    /* Gris neutro para el texto */
    line-height: 1.6;
}


/* Diseño del bloque de servicios */
.service-block {
    transition: all 0.3s ease;
    background: #ffffff;
    /* Fondo blanco */
    border-radius: 12px;
    /* Bordes redondeados */
    border: 1px solid #e0e0e0;
    /* Borde suave */
    overflow: hidden;
    /* Para asegurar que el contenido no se desborde */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Sombra suave */
    position: relative;
    /* Necesario para posicionar el efecto de hover */
}

/* Estilos al hacer hover sobre un bloque */
.service-block:hover {
    background-color: #f1f1f1;
    /* Fondo ligeramente gris al hacer hover */
    transform: translateY(-8px);
    /* Efecto de elevarse */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    /* Sombra más prominente */
}

/* Estilos del icono del servicio */
.service-icon {
    border-radius: 10px;
    /* Esquinas redondeadas más sutiles */
    padding: 20px;
    background-color: #f8f9fa;
    /* Fondo claro y profesional */
    border: 2px solid #e0e0e0;
    /* Borde sutil */
    transition: background-color 0.3s ease, transform 0.3s ease;
    /* Transiciones suaves */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Sombra suave */
}

/* Efecto hover para iconos */
.service-block:hover .service-icon {
    background-color: #e9ecef;
    /* Fondo ligeramente más oscuro en hover */
    transform: scale(1.05);
    /* Escala para un efecto de zoom sutil */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    /* Sombra más pronunciada en hover */
}


/* Título de la categoría del servicio */
.service-category-title {
    font-weight: bold;
    color: #333333;
    /* Color de texto */
    margin-bottom: 15px;
    /* Espacio inferior */
}

/* Listas de servicios */
.services-list {
    font-size: 16px;
    /* Tamaño de fuente */
    color: #555555;
    /* Color de texto */
    padding: 0;
    margin: 0;
}

.services-list li {
    margin-bottom: 10px;
    /* Espacio inferior entre elementos */
    display: flex;
    /* Alineación horizontal */
    align-items: center;
    /* Alineación vertical */
}

/* Icono de check */
.services-list i.fas.fa-check-circle {
    margin-right: 10px;
    /* Espacio entre el icono y el texto */
    color: #888888;
    /* Color gris del icono */
    transition: color 0.3s ease;
    /* Transición de color */
}

/* Cambiar color del icono al hacer hover sobre el bloque */
.service-block:hover .services-list i.fas.fa-check-circle {
    color: #333333;
    /* Color más oscuro en hover */
}




/* Título de la sección */
.section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 30px;
    /* Espaciado entre el título y el contenido */
}

/* Estilos de la categoría de alrededores */
.surrounding-category {
    background-color: #ffffff;
    /* Fondo blanco */
    border: 1px solid #ddd;
    /* Borde sutil */
    border-radius: 10px;
    /* Bordes redondeados */
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Sombra suave */
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    /* Transiciones suaves */
    text-align: center;
    /* Centrar el texto */
    position: relative;
    /* Necesario para el hover */
}

/* Estilos del ícono de la categoría */
.category-icon {
    border-radius: 50%;
    padding: 15px;
    background-color: #f0f4f8;
    /* Fondo claro */
    border: 2px solid #e0e0e0;
    /* Borde sutil */
    display: inline-block;
    /* Ajuste del tamaño del contenedor del ícono */
    margin-bottom: 15px;
    /* Espacio debajo del ícono */
    transition: background-color 0.3s ease, transform 0.3s ease;
    /* Transiciones suaves */
}

/* Estilo del ícono en hover */
.surrounding-category:hover .category-icon {
    background-color: #e9ecef;
    /* Fondo más oscuro en hover */
    transform: scale(1.1);
    /* Escala del ícono en hover */
}

/* Título de la categoría */
.surroundings-category-title {
    font-size: 1.25rem;
    margin-bottom: 15px;
    color: #333;
    /* Color del texto */
}

/* Estilos de la lista de alrededores */
.surroundings-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Estilo de cada ítem de la lista */
.surroundings-list li {
    padding: 10px 0;
    /* Espacio interno en la parte superior e inferior */
    position: relative;
    /* Posición relativa para cualquier posicionamiento absoluto interno */

    /* Asegúrate de que no haya margen o padding que cause desalineamiento */
    margin: 0;
    text-align: left;
    /* Alinear el texto a la izquierda */
}


/* Hover en la categoría */
.surrounding-category:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    /* Sombra más pronunciada en hover */
    transform: translateY(-5px);
    /* Levantar el contenedor en hover */
}

.surrounding-item {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
    align-items: center;
}


.item-name {
    font-weight: semi-bold;
    color: #333;
    flex-grow: 1;
    /* Esto permite que el nombre ocupe el espacio restante */

}

.item-distance {
    color: #888;
    font-size: 14px;
    text-align: right;
    margin-left: 5px;

}












.room-selection-section {
    background-color: #f9f9f9;
    padding: 50px 0;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 30px;
}

.table-modern {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.table-modern thead th {
    background-color: #f5f5f5;
    color: #333;
    font-weight: 600;
    text-align: center;
    padding: 16px;
}

.table-modern tbody td {
    padding: 20px;
    vertical-align: middle;
}

.room-type {
    font-weight: 600;
    color: #333;
}

.room-features {
    list-style: none;
    padding: 0;
    margin: 10px 0 0;
}

.room-features li {
    margin-bottom: 8px;
    font-size: 0.875rem;
    color: #666;
}

.room-features i {
    color: #28a745;
    margin-right: 5px;
}

.people-icons i {
    font-size: 1.2rem;
    color: #333;
}

.price-block {
    text-align: center;
    font-size: 1rem;
    color: #333;
}

.price-current {
    font-size: 1.5rem;
    color: #0f0f0f;
    font-weight: bold;
}

.price-original {
    text-decoration: line-through;
    color: #ac2121;
}

.price-discount {
    font-size: 0.875rem;
    margin-top: 5px;
    color: #888;
}

.options-list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.875rem;
}

.options-list li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.options-list i {
    margin-right: 8px;
    color: #035816;
}

.form-select {
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
}

.btn-primary {
    background-color: #dc3545;
    border-color: #dc3545;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
}

.btn-primary:hover {
    background-color: #dc3545;
    border-color: #dc3545;
}





.availability-bar {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 2px solid #cccccc;
    /* Gris claro que también combina con rojo */
    border-radius: 5px;
    background-color: white;
    width: fit-content;
    margin-bottom: 20px;
}


.availability-section {
    display: flex;
    align-items: center;
    gap: 10px;
}

.date-picker input {
    border: 1px solid #ddd;
    padding: 8px;
    border-radius: 5px;
    width: 220px;
    text-align: center;
}

.date-picker span {
    padding: 0 5px;
    font-weight: bold;
    color: #333;
}


.btn-check-availability {
    background-color: #dc3545;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.btn-check-availability:hover {
    background-color: #dc3545;
}

.availability-subtitle {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 15px;
    font-weight: bold;
    color: #333;
}







.guests-picker {
    position: relative;

}

.guests-select {
    display: inline-block;
    position: relative;
    background-color: white;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
}

.guests-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    margin-left: 10px;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    display: none;
    z-index: 10;
    width: 250px;
}

.guests-select:hover .dropdown-menu {
    display: block;
}

.guest-counter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.counter {
    display: flex;
    align-items: center;
}

.counter button {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
}

.counter .guest-count {
    margin: 0 10px;
}

.btn-done {
    display: block;
    width: 100%;
    background-color: #0071c2;
    color: white;
    border: none;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
}

.icon-spacing {
    margin-right: 8px;
    /* Ajusta el valor según sea necesario */
}
</style>
