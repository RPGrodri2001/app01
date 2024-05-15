//funcion1
function getLocation(){
    navigator.geolocation.getCurrentPosition(onSuccess);
}
//funcion3
function onSuccess(position){
    let name = prompt('Hola bb soy el programa Ginex, por fa dame tu nombre: |');
    document.getElementById("output").innerHTML = "Hola " + name + " , Esta es tu ubicacion Actual: " +  "latitud: " + position.coords.latitude + " y Longitud: " +  position.coords.longitude;
}