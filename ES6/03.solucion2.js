// 1. Función que retorna una Promesa al buscar al estudiante
const buscarEstudiantePromesa = (matricula) => {
return new Promise((resolve, reject) => {
console.log(`[Promesa] Buscando matrícula ${matricula}...`);
setTimeout(() => {
if (matricula !== 2026) {
reject("Estudiante no encontrado en el padrón.");
} else {
const estudiante = {
matricula: 2026,
nombre: "Sofía Ramírez",
promedio: 9.4
};
resolve(estudiante);
}
}, 1000);
});
};
// 2. Función que retorna una Promesa al verificar la beca
const verificarBecaPromesa = (estudiante) => {
return new Promise((resolve, reject) => {
console.log(`[Promesa] Verificando beca para ${estudiante.nombre}...`);
setTimeout(() => {
if (estudiante.promedio >= 9.0) {
const infoBeca = {
titular: estudiante.nombre,
estado: "Beca de Excelencia Activa",

monto: 4500
};
resolve(infoBeca);
} else {
reject("Promedio insuficiente para beca.");
}
}, 1000);
});
};
// 3. Ejecución del flujo mediante encadenamiento lineal
buscarEstudiantePromesa(2026)
.then((estudiante) => {
return verificarBecaPromesa(estudiante);
})
.then((beca) => {
console.log("--- REPORTE FINAL (PROMESAS) ---");
console.log(`Alumno: ${beca.titular}`);
console.log(`Resultado: ${beca.estado} ($${beca.monto})`);
})
.catch((error) => {
console.error(`[Error en el proceso]: ${error}`);
});