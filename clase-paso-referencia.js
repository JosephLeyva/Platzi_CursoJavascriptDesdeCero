// Tipo de Dato Complejo -- Paso por referencia

// Creación de un Objeto
let frutas = {
    naranja: '🍊'
}

let vegetales = frutas

// Reasignación del objeto
vegetales.naranja = '🥦'
console.log(frutas)

// *******************************
let ropa = {
    blusa: '👚'
}

ropa.pantalon = '👖'
console.log(ropa)

// Garbage collector --> en medida que ya no estemos utilizando cosas,
// JavaScript va limpiando y borrando memoria 