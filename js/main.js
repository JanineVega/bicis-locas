function validateForm(){
// ----------------Validando ------------------------------------------------
    var inputName     =   document.getElementById("name").value;
    var nombreError   =   document.getElementById("nombre-error");
    var lastname      =   document.getElementById("lastname").value;
    var lastnameError =   document.getElementById("lastname-error");
    var correo        =   document.getElementById("input-email").value;
    var emailError    =   document.getElementById("email-error");
    var contraseña      = document.getElementById("input-password").value;
    var contraseñaError = document.getElementById("password-error");
    var indice        =   document.getElementById("opciones").selectedIndex;
    var indiceError   =   document.getElementById("indice-error");
    var boton         =   document.getElementById("validar");

      if (inputName.length == 0 || inputName == null || !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(inputName))){
        nombreError.innerHTML="La primera letra con mayúscula"
        alert("Ingrese un nombre válido, por favor.");
        return false;

      }else if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(lastname)) || lastname == null ) {
        lastname.innerHTML="La primera letra con mayúscula"
        alert("Ingrese un apellido válido, la primera letra en mayúscula");
        return false;

      } else if (!(/^[\w]+@{1}[\w]+\.+[a-z]{3}$/.test(correo))){
        alert("La dirección de email " + correo + " no es correcta.");
        return false;

      } else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}/.test(contraseña))|| contraseña=="password" || contraseña=="123456" || contraseña == "098754"){
        alert("La contraseña es invalida! ");
        contraseñaError.innerHTML = "Debe ser mayor o igual a 6 digitos contener letras y números, almenos un carácter y una letra mayúscula.";
        return false;

      }else if (indice == null || indice==0) {
        alert("Seleccione una opción");
        return false;
        }
}
