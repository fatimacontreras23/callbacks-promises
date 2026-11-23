function formatearMoneda(cantidad) {
console.log("$" + cantidad.toFixed(2) + " MXN");
}
function procesarVenta(precio, impuesto, mostrarFormato) {
var total = precio + impuesto;
mostrarFormato(total);
}
procesarVenta(250, 40, formatearMoneda);