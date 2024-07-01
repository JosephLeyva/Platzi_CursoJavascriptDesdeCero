// Tipos de Datos primitivos -- Inmutables
let numero = 23
numero = numero + 10
console.log(numero)

// Tipo de Datos Complejos -- Mutables
let usuario = {nombre: "Pepito", edad: 15}
usuario.edad = 20
console.log(usuario)

let frutas = ["manzana", "pera"]
frutas[0] = "sandía"
console.log(frutas)

function cambiarNombre(objeto) {
    objeto.nombre = "Nuevo Nombre"
}

let persona = {nombre: "Antonio"}
console.log(persona)

// Llamar a la función cambiarNombre
cambiarNombre(persona) // Pasa la referencia del objeto, por lo que cambia el atributo

console.log(persona)