// Ejemplo conceptual de cómo funciona fetch() en un proyecto real:
fetch("https://api.universidad.edu/estudiantes/2026")
.then((respuestaHttp) => respuestaHttp.json()) // .json() también devuelve una promesa
.then((estudiante) => {
console.log(estudiante.nombre);
})
.catch((errorDeRed) => {
console.error("Fallo al conectar al servidor:", errorDeRed);
});