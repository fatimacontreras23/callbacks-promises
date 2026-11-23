//------------------ejemplo 1----------------------------------
//------------------etapa 1
function mostrarResultado(resultado) {
console.log(resultado);
}
function procesarDato(callback) {
var dato = "Hola, JavaScript";
callback(dato);
}
procesarDato(mostrarResultado);

//------------------etapa 2
const mostrarResultado = (resultado) => {
console.log(resultado);
};
const procesarDato = (callback) => {
const dato = "Hola, JavaScript";
callback(dato);
};
procesarDato(mostrarResultado);

//------------------ejemplo 2----------------------------------
//------------------etapa 1
function obtenerNumero() {
return new Promise(function(resolve, reject) {
setTimeout(function() {
var valor = 10;
resolve(valor);
}, 500);
});
}
obtenerNumero()
.then(function(numero) {
return numero * 3;
})
.then(function(resultadoTriple) {
console.log("El resultado es: " + resultadoTriple);
})
.catch(function(error) {
console.log("Error: " + error);
});
//------------------etapa 2
const obtenerNumero = () => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
const valor = 10;
resolve(valor);
}, 500);
});
};
obtenerNumero()
.then((numero) => numero * 3) // Retorno implícito: equivale a { return numero *3; }
.then((resultadoTriple) => {
console.log(`El resultado es: ${resultadoTriple}`); // Plantilla de cadena Template literal)
}).catch((error) => {
console.error(`Error: ${error}`);
});