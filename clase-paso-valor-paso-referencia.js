let x = 1
let y = 'Hola'
let z = null

// Paso por valor
let a = x
let b = y
let c = z

console.log(x, y, z, a, b, c) 

// Reasignacón de variable
a = 12
b = 'Platzi'
c = undefined

// Paso por referencia (variables complejos)
let frutas = ['manzana']
frutas.push('pera')

let panes = ['birote']
let copiaPanes = panes
copiaPanes.push('virginia')
console.log(panes) // [birote, virginia] --> se imprimen los dos
// Apuntan ambas variables a la misma dirección de memoria