

//cargado el documento que va a realizar la escucha para realizar el cambio de foco
window.onload = function() {
    document.getElementById('nombre').addEventListener('blur', upperCase);
    document.getElementById('apellidos').addEventListener('blur', upperCase);
    document.getElementById('formulario').addEventListener('submit', validar);    
    console.log("hola");
}
    

//función para poner en mayúsculas
function upperCase(){
    var nombre=document.getElementById("nombre").value
    document.getElementById("nombre").value=nombre.toUpperCase();
    var apellidos=document.getElementById("apellidos").value
    document.getElementById("apellidos").value=apellidos.toUpperCase();
}

//función comprobar nombre con función regular evitando el uso de números
function validarNombre(nombre){
    var regEx = /^[a-z]+$/i;
    if(nombre.match(regEx)) 
    {
        return true;
    }
    else{
        alert("Sólo se pueden poner letras en el campo nombre.");
    }
}

//función comprobar apellidos con función regular evitando el uso de números
function validarApellidos(apellidos){
    var regEx = /^[a-z][a-z\s]*$/i;
    if(apellidos.match(regEx))
    {
        return true;
    }
    else{
        alert("Sólo se pueden poner letras y espacios en el campo apellidos.");
    }
}

//función validar edad que contenga sólo valores numéricos y que este entre 0 y 105 (falta expresión regular números)
function validarEdad(edad){
    var regEx = /^\d+$/;
    if(edad.match(regEx) && edad<=105)
    {
        return true;
    }
    else{
        alert("Introduce una edad válida.");
        return false;
    }    
}

//función validar nif 
function validarNif(nif){
    var regEx = /^\d{8}\-[a-z]$/i;
    if(nif.match(regEx))
    {
        return true;
    }
    else{
        alert("Introduce un nif válido.");
        return false;
    }
}


//función validar email 
function validarEmail(email){
    var regEx = /^[^@\s]+@[^@\.\s]+\.([a-z]{2,4})$/;
    if(email.match(regEx))
    {
        return true;
    }
    else{
        alert("Introduce un email válido.");
        return false;
    }
}


//Función para llamar a las validaciones
function validar(){
   
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var edad = document.getElementById('edad').value;
    var nif = document.getElementById('nif').value;    
    var email = document.getElementById('email').value;
   
    if(!validarNombre(nombre)) {      
  
        return false;
    }
    if(!validarApellidos(apellidos)) {        
    
        return false;
    }
    if(!validarEdad(edad)) {        
        
        return false;
    }
    if(!validarNif(nif)) {        
    
        return false;
    }
    if(!validarEmail(email)) {
          
        return false;
    }

const formulario = ['nombre', 'apellidos', 'edad', 'nif', 'email', 'provincia'];
formulario.forEach(function(id) {
    console.log(`${id} : ${document.getElementById(id).value}`);  
    
});  
}
