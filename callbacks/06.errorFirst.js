function gestionarRespuesta(error, producto) {
  // 1. Siempre verificamos primero si ocurrió un error
  if (error !== null) {
    console.log("ERROR DETECTADO: " + error);
    return; // Detenemos la ejecución de la función aquí mismo
  }

  // 2. Si llegamos aquí, sabemos que error es null y el producto es válido
  console.log("ÉXITO: Producto encontrado -> " + producto.nombre + " ($" + producto.precio + ")");
}

/*function buscarProductoPorId(id, callback) {
  console.log("Buscando producto con ID: " + id + "...");

  setTimeout(function () {
    // Validamos si el ID es inválido
    if (id <= 0) {
      // Llamamos al callback con el mensaje de error como primer argumento
      callback("El ID del producto debe ser un número mayor a cero.", null);
    } else {
      var productoEncontrado = {
        id: id,
        nombre: "Monitor 24 pulgadas",
        precio: 3200
      };

      // Llamamos al callback con null como error y el objeto como segundo argumento
      callback(null, productoEncontrado);
    }
  }, 1000);
}

// Caso 1: Búsqueda exitosa
buscarProductoPorId(10, gestionarRespuesta);

// Caso 2: Búsqueda fallida
buscarProductoPorId(-5, gestionarRespuesta);*/
// AHORA (Con Promesa): Ya no necesitamos recibir el parámetro 'callback'
function buscarProductoPorIdPromesa(id) {
return new Promise(function(resolve, reject) {
console.log("Buscando producto con ID: " + id + "...");
setTimeout(function() {
if (id <= 0) {
// En lugar de callback("error", null), usamos reject()
reject("El ID del producto debe ser un número mayor a cero.");
} else {
var productoEncontrado = {
id: id,
nombre: "Monitor 24 pulgadas",
precio: 3200
};
// En lugar de callback(null, producto), usamos resolve()
resolve(productoEncontrado);
}
}, 1000);
});
}
// Consumo limpio y separado
buscarProductoPorIdPromesa(10)
.then(function(producto) {
console.log("ÉXITO: Producto encontrado -> " + producto.nombre + " ($" +
producto.precio + ")");
})
.catch(function(error) {
console.log("ERROR DETECTADO: " + error);
});