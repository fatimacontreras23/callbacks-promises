const validarEdadPromesa = (edad) => {
return new Promise((resolve, reject) => {
if (edad >= 18) {
resolve("Mayor de edad: registro permitido");
} else {
reject("Menor de edad: acceso restringido");
}
});
};
validarEdadPromesa(16)
.then((mensajeExito) => {
console.log("ÉXITO:", mensajeExito);
})
.catch((mensajeError) => {
console.log("RECHAZO:", mensajeError);
});