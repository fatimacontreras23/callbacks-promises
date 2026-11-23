const obtenerCarrito = () => {
return new Promise((resolve) => {
setTimeout(() => resolve([100, 200, 50]), 500);
});
};
const calcularEnvio = (subtotal) => {
return new Promise((resolve) => {
setTimeout(() => {
const costoEnvio = subtotal < 500 ? 99 : 0;
resolve(subtotal + costoEnvio);
}, 500);
});
};
obtenerCarrito()
.then((precios) => {
let subtotal = 0;
for (let i = 0; i < precios.length; i++) {
subtotal += precios[i];
}
console.log(`Subtotal de productos: $${subtotal}`);
return calcularEnvio(subtotal);
})
.then((totalFinal) => {
console.log(`Total final con envío incluido: $${totalFinal}`);
})
.catch((error) => {
console.error("Ocurrió un error:", error);
});