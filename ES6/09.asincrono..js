const entregarAlCliente = (mensaje) => {
console.log(mensaje);
};
const prepararPedido = (nombrePlatillo, callback) => {
console.log(`Cocinando ${nombrePlatillo}...`);
setTimeout(() => {
const resultado = `Platillo listo: ${nombrePlatillo}`;
callback(resultado);
}, 1500);
};
prepararPedido("Tacos al pastor", entregarAlCliente);