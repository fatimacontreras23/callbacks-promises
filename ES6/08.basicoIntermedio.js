const convertirAMayusculas = (texto) => {
console.log("Texto en mayúsculas:", texto.toUpperCase());
};
const contarCaracteres = (texto) => {
console.log("Longitud del texto limpio:", texto.length);
};
const procesarTexto = (cadenaOriginal, callback) => {
    const textoLimpio = cadenaOriginal.trim();
callback(textoLimpio);
};
procesarTexto(" hola mundo ", convertirAMayusculas);
procesarTexto(" hola mundo ", contarCaracteres);