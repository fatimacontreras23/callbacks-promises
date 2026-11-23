var promesaSaludo = new Promise(function(resolve, reject) {
resolve("Hola desde una promesa");
});
promesaSaludo.then(function(mensajeRecibido) {
console.log("Resultado capturado en then(): " + mensajeRecibido);
});