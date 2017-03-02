function validateForm(){
	/* Escribe tú código aquí */


  var validarButton = document.getElementById("validar");

    var inputName = document.getElementById("name");
    var nombreError = document.getElementById("nombre-error");

    if (inputName.value == "") {
      nombreError.innerHTML = "Ingrese un nombre válido";
    } else {
      nombreError.innerHTML = "";
    }

    var lastname = document.getElementById("lastname");
    var lastnameError = document.getElementById("lastname-error");

    if (lastname.value == "") {
      lastnameError.innerHTML = "Ingrese un apellido válido";
    } else {
      lastnameError.innerHTML = "";
    }

    var correo= document.getElementById("input-email");
    var emailError = document.getElementById("email-error");

    if (correo.value == "") {
      emailError.innerHTML = "Ingrese un email válido";
    } else {
      emailError.innerHTML = "";
    }

    var contra= document.getElementById("input-password");
    var passwordError = document.getElementById("password-Error");

    if (contra.value == null ||
       == 0 || /^\s+$/.test(valor) ) {
      passwordError.innerHTML = "Ingrese un password válido";
    } else {
      passwordError.innerHTML = ;
    }
    if (contra.value == null ||
       == 0 || /^\s+$/.test(valor) ) {
      passwordError.innerHTML = "Ingrese un password válido";
    } else {
      passwordError.innerHTML = ;
    }

}
/*
var validarButton=document.getElementsByClassName("btn")[0];
validarButton.addEventListener('click',function() {
var validarNombre=document.getElementById('name');
if (validarNombre.value == "") {
  nombreError.innerHTML = "Ingrese un nombre válido A-Z y primera letra en mayuscula. Gracias!";
} else {
  nombreError.innerHTML = "";
}

var validarApellido=document.getElementById('lastname');
if (validarNombre.value == "") {
  nombreError.innerHTML = "Ingrese un nombre válido A-Z y primera letra en mayuscula. Gracias!";
} else {
  nombreError.innerHTML = "";
}
var validarEmail=document.getElementById('input-email');
var validarPassword=document.getElementById('input-password');
var validarSeleccion=document.getElementsByClassName('form-group"');
  }
}
*/
