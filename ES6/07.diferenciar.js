function darBienvenida() {
console.log("Acceso concedido. ¡Bienvenido al sistema!");
}
function verificarAcceso(callback) {
console.log("Verificando permisos...");
callback();
}
// Corrección: se eliminan los paréntesis internos de darBienvenida
verificarAcceso(darBienvenida);