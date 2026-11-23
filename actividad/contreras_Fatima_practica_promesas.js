// === PARTE 1 ===

// ---------------------------------------------------------------------
// Reto 1.1: El callback que se ejecuta antes de tiempo
// ---------------------------------------------------------------------
// ¿Por qué falla?
// Al escribir guardarEnDispositivo(mostrarConfirmacion()) se EJECUTA
// mostrarConfirmacion en ese mismo instante (por los paréntesis), por lo
// que el mensaje se imprime de inmediato. Como esa función no retorna
// nada, a setTimeout se le pasa "undefined" en lugar de una función,
// y eso provoca un error (TypeError en Node.js).
// Solución: pasar la REFERENCIA de la función, sin paréntesis.

const mostrarConfirmacion = () => {
    console.log("Notificación: Datos guardados en el dispositivo.");
};

const guardarEnDispositivo = (callback) => {
    console.log("Guardando información, por favor espera...");
    setTimeout(callback, 1000);
};

// Código corregido:
guardarEnDispositivo(mostrarConfirmacion);


// ---------------------------------------------------------------------
// Reto 1.2: La cadena de promesas que pierde el dato (undefined)
// ---------------------------------------------------------------------
// ¿Por qué falla?
// El primer .then() calcula totalConCargo pero no lo retorna. Una
// función sin return devuelve undefined, y ese valor es el que recibe el
// siguiente .then() como "precioFinal"; por eso se imprime NaN
// (undefined + número no se calculó bien y se muestra undefined/NaN).
// Solución: agregar "return totalConCargo;" para pasar el dato en la cadena.

const obtenerPrecioBoleto = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(120), 500);
    });
};

// Código corregido:  

obtenerPrecioBoleto()
    .then((precioBase) => {
        console.log(`Precio base del boleto: $${precioBase}`);
        const totalConCargo = precioBase + 30;
        return totalConCargo; // <- lo que faltaba
    })
    .then((precioFinal) => {
        console.log(`Total final a pagar: $${precioFinal}`);
    });


// === PARTE 2: SOLUCIÓN CON CALLBACKS ===

const validarCuponCallback = (codigoCupon, callback) => {
    console.log(`Validando cupón '${codigoCupon}' en el servidor...`);

    setTimeout(() => {
        if (codigoCupon === "DESCUENTO20") {
            // Éxito: sin error (null) y con el resultado
            callback(null, { codigo: "DESCUENTO20", porcentaje: 20 });
        } else {
            // Falla: mensaje de error y resultado null
            callback("El cupón ingresado no existe o ha expirado.", null);
        }
    }, 1000);
};

const manejarRespuestaCupon = (error, datosCupon) => {
    // 1. Si hay error, se imprime y se detiene la función
    if (error) {
        console.log(error);
        return;
    }

    // 2. Si no hay error, se muestra el cupón válido
    console.log(`Cupón válido: ${datosCupon.codigo} con ${datosCupon.porcentaje}% de descuento.`);
};

// Pruebas obligatorias:
validarCuponCallback("DESCUENTO20", manejarRespuestaCupon);
validarCuponCallback("CUPON_FALSO", manejarRespuestaCupon);


// === PARTE 3: SOLUCIÓN CON PROMESAS ENCADENADAS ===

const validarCuponPromesa = (codigoCupon) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (codigoCupon === "DESCUENTO20") {
                resolve({ codigo: "DESCUENTO20", porcentaje: 20 });
            } else {
                reject("El cupón ingresado no existe o ha expirado.");
            }
        }, 800);
    });
};

const aplicarDescuentoPromesa = (montoPedido, datosCupon) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (montoPedido < 200) {
                reject("El monto mínimo de compra para usar este cupón es de $200.");
            } else {
                // Nota: la propiedad del objeto es "porcentaje" (minúscula)
                const descuento = montoPedido * (datosCupon.porcentaje / 100);
                const totalFinal = montoPedido - descuento;

                resolve({
                    montoOriginal: montoPedido,
                    descuentoAplicado: descuento,
                    totalPagar: totalFinal
                });
            }
        }, 800);
    });
};

// Consumo de la cadena de promesas con "DESCUENTO20" y un pedido de $300:
validarCuponPromesa("DESCUENTO20")
    .then((cupon) => {
        console.log(`Cupón '${cupon.codigo}' aceptado: ${cupon.porcentaje}% de descuento.`);
        return aplicarDescuentoPromesa(300, cupon);
    })
    .then((resumenPago) => {
        console.log(`Monto original: $${resumenPago.montoOriginal}`);
        console.log(`Descuento aplicado: $${resumenPago.descuentoAplicado}`);
        console.log(`Total a pagar: $${resumenPago.totalPagar}`);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
    .finally(() => {
        console.log("--- Proceso de validación de compra finalizado ---");
    });