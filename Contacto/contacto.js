function mostrar(){
    var name = document.getElementById("nombre");
    var lastn = document.getElementById("apellido");
    var mail = document.getElementById("correo");
    var phone = document.getElementById("celular");
    var country = document.getElementById("pais");
    var check = document.getElementsByName("conocer");
    var comment = document.getElementById("comentario");
    var checkedValue = document.querySelector('.form-check-input:checked').value;
    
    var str = " Gracias "+ name.value + " " + lastn.value + ". Enviaremos una respuesta al correo: " + mail.value + "o al numero " + phone.value + 
    ". Nos encanta concer más gente de: " + country.value +  " mediante "+ checkedValue +". Tu comentario fue: " + comment.value;

    alert(str);
}
