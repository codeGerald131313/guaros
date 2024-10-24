<template>
    <!-- Page Content -->
    <main>
        <section class="p-0 jarallax overlay-dark overlay-opacity-6 text-white">
            <!-- jarallax image -->
            <img class="jarallax-img" src="/img/portada/teamcontact.jpg" alt="...">

            <div class="container">

                <div class="d-middle col-12 col-md-12 col-lg-6 min-h-75vh text-center-xs">

                    <div class="mt-7overflow-hidden mb-8">

                        <h1 class="font-weight-light mb-4">
                            <span class="font-weight-medium">Contacto Guaros Tours</span>
                        </h1>

                        <p class="lead">
                            La mejor experiencia en servicio de hoteleria y turismos. contacte con los mejores.
                        </p>

                        <div class="mt-4">

                            <a aria-label="See our video" href="https://www.youtube.com/watch?v=fOr3iPLQn9E"
                                data-ajax-modal-type="video" data-ajax-modal-size="modal-xl"
                                data-ajax-modal-centered="true"
                                class="btn btn-youtube transition-hover-top mb-3 d-block-xs js-ajax-modal d-inline-flex">
                                <i class="fab fa-youtube video-icon-youtube"></i>
                                Ver Video Agencia
                            </a>


                        </div>

                    </div>

                </div>

            </div>
        </section>

        <!-- block : contact -->
        <section id="section_contact" class="mt-1 bg-light">
            <div class="container">

                <div class="row">

                    <div class="col-12 col-lg-6 mb-5">

                        <h2 class="font-weight-light mb-5">
                            <span class="font-weight-medium">Guaros</span> Contacto!
                            <small class="d-block h6">Estamos para servirte!</small>
                        </h2>


                        <div class="row">

                            <!-- call us -->
                            <div class="col-12 col-sm-6 mb-4">
                                <h3 class="font-weight-light text-primary h5 mb-4">
                                    LLamanos
                                </h3>

                                <p class="m-0">
                                    <a href="tel:+51943785327" class="link-muted">+51 943 785 327</a>
                                </p>
                                <p class="m-0">
                                    <a href="email:reservasguarosgroup@gmail.com" class="link-muted"><span
                                            class="__cf_email__"
                                            data-cfemail="0d7f687e687f7b6c7e6a786c7f627e6a7f62787d4d6a606c6461236e6260">[email&#160;protected]</span></a>
                                </p>
                            </div>

                            <!-- address -->
                            <div class="col-12 col-sm-6 mb-4">

                                <h3 class="font-weight-light text-primary h5 mb-4">
                                    Nuestra dirección
                                </h3>

                                <p class="m-0">
                                    Jr. Ricardo Palma 109, Tarapoto <br>
                                    San Martin - Peru
                                </p>

                            </div>
                        </div>



                        <div class="bg-white shadow-primary-xs rounded p-2 mt-5">

                            <!--
							Map
						-->
                            <div class="map-leaflet h--400 w-100 rounded" data-map-tile="voyager" data-map-zoom="17"
                                data-map-json='[
								{ 
									"map_lat": -6.489808,
									"map_long": -76.358791,
									"map_popup": "<b>Guaros Group SAC.</b> <br> Jr Ricardo Palma, No.109,<br> Tarapoto / Perú <br> <a href=`tel:+51960992485`>+51 960992485</a>"
								}
							]'><!-- map container--></div>

                        </div>

                    </div>

                    <div class="col-12 col-lg-6">

                        <div class="rounded bg-white shadow-xs d-flex">
                            <div class="m-5 m-4-xs">

                                <h2 class="h3-xs font-weight-light mb-5">
                                    Envianos un Mensaje.
                                </h2>


                                <form novalidate action="php/contact_form.php" method="POST"
                                    data-ajax-container="#ajax_dd_contact_response_container"
                                    data-ajax-update-url="false" data-ajax-show-loading-icon="true"
                                    data-ajax-callback-function="" data-error-scroll-up="false"
                                    data-ajax-control-alerts="true" data-ajax-control-alert-succes="#contactSuccess"
                                    data-ajax-control-alert-unexpected="#contactErrorUnexpected"
                                    data-ajax-control-alert-mandaroty="#contactErrorMandatory"
                                    data-error-toast-text="<i class='fas fa-exclamation-circle'></i> <!-- Cambiado a FontAwesome: Exclamation Circle --> Por favor, complete todos los campos requeridos!"
                                    data-error-toast-delay="2000" data-error-toast-position="bottom-center"
                                    class="bs-validate js-ajax">


                                    <!-- 1. 
									optional, hidden action for your backend

									PHP Basic Example
									if($_POST['action'] == 'contact_form_submit') {
										... send message
									}
								-->
                                    <input type="hidden" name="action" value="contact_form_submit" tabindex="-1">
                                    <!-- -->


                                    <!-- 2. 
									A very small optional trick (using .hide class instead of type="hidden") for some low spam robots. 
									If this is not empty, the process should stop. A normal user/visitor should not be able to see this field.

									PHP Basic Example
									if($_POST['norobot'] != '') {
										exit;
									}
								-->
                                    <input type="text" name="norobot" value="" class="hide" tabindex="-1">
                                    <!-- -->

                                    <div class="form-label-group mb-3">
                                        <input required placeholder="Nombre" id="contact_name" name="contact_name"
                                            type="text" class="form-control">
                                        <label for="contact_name">Nombre</label>
                                    </div>

                                    <div class="form-label-group mb-3">
                                        <input required placeholder="Correo" id="contact_email" name="contact_email"
                                            type="email" class="form-control">
                                        <label for="contact_email">Correo</label>
                                    </div>

                                    <div class="form-label-group mb-3">
                                        <input required placeholder="Celular" id="contact_phone" name="contact_phone"
                                            type="text" class="form-control">
                                        <label for="contact_phone">Celular</label>
                                    </div>

                                    <div class="form-label-group mb-4">
                                        <textarea required placeholder="Mensaje" id="contact_message"
                                            name="contact_message" class="form-control" rows="3"></textarea>
                                        <label for="contact_message">Mensaje</label>
                                    </div>

                                    <!-- GDPR CONSENT -->
                                    <div class="clearfix bg-light position-relative rounded p-4 mb-4">

                                        <span class="text-muted fs--12 d-block position-absolute bottom-0 end-0 m-2">
                                            NOTA
                                        </span>

                                        <label class="form-checkbox form-checkbox-primary">
                                            <input required type="checkbox" name="contact_gdpr">
                                            <i></i>
                                            <span>
                                                Acepto que mis datos se almacenen de acuerdo con las pautas
                                                establecidas en la
                                                <a href="#" target="_blank">Política de privacidad</a>.
                                            </span>
                                        </label>

                                    </div>
                                    <!-- /GDPR CONSENT -->




                                    <!-- 
									Server detailed error
									!ONLY! If debug is enabled!
									Else, shown ony "Server Error!"
								-->
                                    <div id="ajax_dd_contact_response_container"></div>

                                    <!-- {:err:unexpected:} internal server error -->
                                    <div id="contactErrorUnexpected" class="hide alert alert-danger p-3">
                                        Unexpected Error!
                                    </div>

                                    <!-- {:err:required:} mandatory fields -->
                                    <div id="contactErrorMandatory" class="hide alert alert-danger p-3">
                                        Please, review your data and try again!
                                    </div>

                                    <!-- {:success:} message sent -->
                                    <div id="contactSuccess" class="hide alert alert-success p-3">
                                        Thank you for your message!
                                    </div>




                                    <button type="submit" class="btn btn-primary btn-block">
                                        Send Message
                                    </button>

                                </form>
                                <!-- /CONTACT FORM : AJAX -->


                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
        <!-- /block : contact -->
    </main>

</template>

<script>


export default {
    name: 'ContactPage',
}
</script>

<style scoped>
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
</style>