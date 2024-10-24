window.onload = function asignar_hora() {
    const hoy = new Date();
    var fecha = (hoy.getMonth() + 1) + '/' + hoy.getDate() + '/' + hoy.getFullYear();
    var minuto = hoy.getMinutes();
    var segundo = hoy.getSeconds();
    if (minuto < 9) {
        minuto = '0' + minuto;
    }
    if (segundo < 9) {
        segundo = '0' + segundo;
    }
    var hora = hoy.getHours() + ':' + minuto + ':' + segundo;
    var fechaYHora = fecha + ' ' + hora;
    $("#book_date").val(fechaYHora);
}
var input = document.getElementById('numero_cell');
input.addEventListener('input', function() {

    if (this.value.length > 12) {}
    this.value = this.value.slice(0, 12);
    this.value = this.value.replace(/[^0-9\.]/g, '');

})


function GuardarReserva(e) {

    var formData = new FormData();

    var parametros = {
        "fecha": $("#book_date").val(),
        "cantidad_personas": $("#book_people").val(),
        "nombre": $("#book_fullname").val(),
        "telefono": $("#numero_cell").val(),
    };

    console.log(parametros);

    $.ajax({
        url: 'guardarReserva',
        headers: { 'X-CSRF-Token': $('meta[name=csrf-token').attr('content') },
        type: 'POST',
        data: parametros,
        success: function(data) {


            $('#confirma_reserva').css('display', 'block');
            $("#book_people").val('');
            $("#book_people").val('');
            $("#book_fullname").val('');
            $("#numero_cell").val('');
            setTimeout(gfg, 3000);
            asignar_hora();


        }
    });

    function gfg() {
        $('#confirma_reserva').css('display', 'none');
    }

}
