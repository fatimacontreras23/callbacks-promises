var promesaFallida = new Promise(function(resolve, reject) {
reject("No se pudo conectar con la base de datos.");
});
promesaFallida
.then(function(datos) {
// Esta línea se ignora porque la promesa fue rechazada
console.log("Datos:", datos);
})
.catch(function(motivoError) {
console.log("Error capturado en catch(): " + motivoError);
});