//setTomeOut()

function notificarDescarga(nombreArchivo){
    console.log("Notificacion: El archivo " + nombreArchivo + " se ha descargado corractamente" );
}

function descargarArchivo(archivo, callbackAlTerminar){
    console.log('Iniciando descarga de: ' + archivo+ '...');

    //simular una demora de 3 segundos(3000 milisegundos)
    setTimeout(
        function(){
            callbackAlTerminar(archivo);
        }, 3000);
}
descargarArchivo("manual_callbacks.pdf", notificarDescarga);
console.log("El usuario puede seguir navegando por la pagina mientras se descarga");