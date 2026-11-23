function verificarStock(cantidadSolicitada) {
return new Promise(function(resolve, reject) {
var stockDisponible = 10;
if (cantidadSolicitada <= stockDisponible) {
resolve("Pedido confirmado por " + cantidadSolicitada + " unidades.");
} else {
reject("Stock insuficiente. Solo quedan " + stockDisponible + " unidades.");
}
});
}
verificarStock(25)
.then(function(confirmacion) {
    console.log(confirmacion);
})
.catch(function(mensajeError) {
console.log("Atención: " + mensajeError);
});