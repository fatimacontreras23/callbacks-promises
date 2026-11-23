var miPromesa = new Promise(
    //funcion ejecutora 
    function(resolve, reject){
        //cuerpo de la funcion ejecutora 
        var operacionExitosa = true;

        if (operacionExitosa){
            //cambia el estado de 'pendiente' a 'fullfilled' y nos entra el valor 
            resolve ("los datos se procesaron correctamente");   
             }else 
             {
                    //cambia el estado de 'peding' a 'rejected' y entraga el motivo del fallo
                    reject ("los datos se procesaron correctamente");
                
             }

    }
);

//then(): registra una funcioan  que se ejecutara cuendo la promesa pase al estado fullfilled
miPromesa.then(function(mensajeRecibido){
    console.log("Resultados capturados en then():" + mensajeRecibido);
});