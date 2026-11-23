const conectarServidor = () => Promise.resolve("Conectado al servidor principal");
const autenticarToken = () => Promise.reject("Token de seguridad expirado");
const descargarReporte = () => Promise.resolve("Reporte_Anual_2026.pdf");
conectarServidor()
.then((estado) => {
console.log("Paso 1:", estado);
return autenticarToken();
})
.then((tokenValido) => {
console.log("Paso 2:", tokenValido);
return descargarReporte();
})
.then((archivo) => {
console.log("Paso 3: Descargado", archivo);
})
.catch((error) => {
console.log("Alerta de seguridad:", error);
})
.finally(() => {
console.log("Cerrando sesión de red.");
});