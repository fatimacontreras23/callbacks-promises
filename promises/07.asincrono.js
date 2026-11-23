function solicitarClima(ciudad){
    return new Promise(
        function(resolve, rejec){
        console.log("01. Solicitando pronostico del clima para " + ciudad + "...");
        setTimeout(()=>{
            if(ciudad == " "){
                rejec("Debes especificar el nombre de una ciudad valida ");
            }{
                var datosClima={
                    ciudad : ciudad,
                    temperatura:24,
                   condicion: ' Soleado'

                }
                resolve(datosClima)
            }

        }, 5000);
            
        }
    );
}
solicitarClima(" ")
.then(function(reporte){
    console.log("02. Clima en " + reporte.ciudad + ""
        + reporte.temperatura + " °C"
        + reporte.condicion + "",
    )
})
.catch(function(error){
    console.log ("Error: " + error);
});
console.log("03. La aplicacion continua ejecutandose mientras llega el reporte...", )