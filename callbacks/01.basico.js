//Declaramos la funcion que servira como callback
function despedirse(){
    console.log('Adios, hemos terminado la clase');
}

//Declaramos la funcion principal que recibe un parametro llamado callback

function iniciarProceso(miCallback){
    console.log('Iniciando el proceso principal...');
    //invocamosla funcion que recibimos como argumento
    miCallback();

}

//Llamamos a la funcion principal
iniciarProceso(despedirse);