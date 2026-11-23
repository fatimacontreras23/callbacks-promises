const dividirNumerosPromesa = (dividendo, divisor) => {
return new Promise((resolve, reject) => {
setTimeout(() => {
    if (divisor === 0) {
reject("No es posible dividir entre cero.");
} else {
resolve(dividendo / divisor);
}
}, 500);
});
};
dividirNumerosPromesa(20, 4)
.then((resultado) => {
console.log(`Resultado de la división: ${resultado}`);
})
.catch((error) => {
console.error(`Error matemático: ${error}`);
});