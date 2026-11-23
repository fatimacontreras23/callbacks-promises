//Declaramos al callback
function mostrarTotal(montoTotal){
    console.log("El total a pagar con IVA incluido es: $" +montoTotal)

}

//Declaramos la funcion principal
function calcularPrecioConIVA(precioBase, callbackMostrar){
    var iva= precioBase * 0.16;
    var total=precioBase + iva;

    //Invocamos el callback pasandole como argumento la variable 'total
    callbackMostrar(total)

}

calcularPrecioConIVA(100, mostrarTotal)