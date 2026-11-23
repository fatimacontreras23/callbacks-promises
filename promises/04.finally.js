//finally(): Registra una funcion que se ejecutara siempre 
//cuando la promesa termine, sin importar  su estado .

var promesaConexion = new Promise(
    //funcion ejecutora 
    function(resolve, reject){
        console.log("01.  Mostrando animacion de carga...")
        //cuerpo de la funcion ejecutora 
        var operacionExitosa = false;

        if (operacionExitosa){
            //cambia el estado de 'pendiente' a 'fullfilled' y nos entra el valor 
            resolve (" Informacion cargada");   
             }else{
                    //cambia el estado de 'peding' a 'rejected' y entraga el motivo del fallo
                    reject (" La informacion no se cargo");
                
             }

    }
);

//then(): registra una funcioan  que se ejecutara cuendo la promesa pase al estado fullfilled
promesaConexion.then(function(mensajeRecibido){
    console.log("02. Resultados capturados en then():" + mensajeRecibido);
})
.catch(function(motivoError){
    console.log("02. Error capturado en catch(): " + motivoError);
})
.finally(function(){
    console.log(" 03. Limpieza finally(): Ocultanndo animacion de carga...")
});