function procesarPago(monto) {
console.log("[UI] Botón de pago deshabilitado para evitar cobros dobles.");
return new Promise(function(resolve, reject) {
setTimeout(function() {
if (monto > 0) {
resolve("Transacción aprobada por $" + monto);
} else {
reject("El monto a cobrar no es válido.");
}
}, 1000);
});
}
procesarPago(0)
.then(function(recibo) {
    console.log("Éxito: " + recibo);
})
.catch(function(fallo) {
console.log("Error en el cobro: " + fallo);
})
.finally(function() {
console.log("[UI] Operación finalizada. Botón de pago habilitado nuevamente.");
});