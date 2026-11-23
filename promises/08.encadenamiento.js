function obtenerPrecioBase(idProducto) {
return new Promise(function(resolve, reject) {
setTimeout(function() {
console.log("Paso 1: Precio base obtenido ($500)");
resolve(500);
}, 1000);
});
}
function aplicarDescuento(precio) {
return new Promise(function(resolve, reject) {
setTimeout(function() {
var precioConDescuento = precio * 0.90; // 10% de descuento
console.log("Paso 2: Descuento aplicado ($" + precioConDescuento + ")");
resolve(precioConDescuento);
}, 1000);
});
}
obtenerPrecioBase(1)
.then(function(precioInicial) {
return aplicarDescuento(precioInicial);
})
.then(function(precioRebajado) {
var totalConEnvio = precioRebajado + 50;
console.log("Paso 3: Sumando costo de envío ($50)");
return totalConEnvio;
})
.then(function(granTotal) {
console.log("Resultado final a cobrar: $" + granTotal);
});