// 1. Función que simula buscar al estudiante en la base de datos
const buscarEstudianteCallback = (matricula, callback) => {
console.log(`[Callback] Buscando matrícula ${matricula}...`);
setTimeout(() => {
if (matricula !== 2026) {
callback("Estudiante no encontrado en el padrón.", null);
} else {
const estudiante = {
matricula: 2026,
nombre: "Sofía Ramírez",
promedio: 9.4
};
callback(null, estudiante);
}
}, 1000);
};
// 2. Función que simula verificar el estado de la beca según el estudiante
const verificarBecaCallback = (estudiante, callback) => {
console.log(`[Callback] Verificando beca para ${estudiante.nombre}...`);
setTimeout(() => {
if (estudiante.promedio >= 9.0) {
const infoBeca = {
titular: estudiante.nombre,
estado: "Beca de Excelencia Activa",
monto: 4500
};
callback(null, infoBeca);
} else {
callback("Promedio insuficiente para beca.", null);
}
}, 1000);
};
// 3. Ejecución del flujo completo
buscarEstudianteCallback(2026, (errorEst, estudiante) => {
if (errorEst !== null) {
console.error(`[Error en Paso 1]: ${errorEst}`);
return;
}
verificarBecaCallback(estudiante, (errorBeca, beca) => {
if (errorBeca !== null) {
console.error(`[Error en Paso 2]: ${errorBeca}`);
return;
}
console.log("--- REPORTE FINAL (CALLBACKS) ---");
console.log(`Alumno: ${beca.titular}`);
console.log(`Resultado: ${beca.estado} ($${beca.monto})`);
});
});