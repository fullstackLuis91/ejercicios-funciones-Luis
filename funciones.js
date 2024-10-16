function resta (a,b) {
    return a - b
}
console.log (resta(9,9))

function duplicaNumero (valor)  {
    if (typeof valor !== "number") {
        return "Debo ser ejecutada con un número"
    }
    return valor * 2
}
console.log (duplicaNumero (5))

function caracterInicial (caracter) {
    if (typeof caracter !== "string") {
        return "Debo ser ejecutada con un string"
    }
    if (caracter.length === 0) {
        return "Debo ser ejecutada con un string no vacío"
    }
    return caracter.charAt(0)
}
console.log (caracterInicial(""))

function ultimoCaracter (caracter) {
    if (typeof caracter !== "string") {
        return "Debo ser ejecutada con un string"
    }
    if (caracter.length === 0) {
        return "Debo ser ejecutada con un string no vacío"
    }
    return caracter.charAt(caracter.length - 1)
}
console.log(cuentaCaracteres("Hola"))

function cuentaCaracteres (caracter) {
    if (typeof caracter !== "string") {
        return "Debo ser ejecutada con un string"
    }
    return caracter.length
}
console.log(cuentaCaracteres("hola"))

function esPalindromo (texto) {
    if (typeof texto !== "string" || texto.length === 0) {
        return "no es un formato correcto"
    }
}

function getPrecioMostrar (valor) {
    if (typeof valor !== "number") {
        return "no es un formato correcto";
    }
    return valor.toFixed(2) + "€" 
}

console.log (getPrecioMostrar(2))

function division (division1,division2) {
    if (typeof division1 !== "number" || typeof division2 !== "number") {
        return "ambas deben ser number"
    }
    return division1/division2
}
console.log(division(9,9))

function clasificarNota() {
    let nota = parseFloat(prompt("Introduce una nota del 0 al 10:"))

    switch (true) {
        case (nota >= 0 && nota < 5):
            console.log("Insuficiente.")
            break;
        case (nota >= 5 && nota < 7):
            console.log("Suficiente.")
            break;
        case (nota >= 7 && nota < 9):
            console.log("Notable.")
            break;
        case (nota >= 9 && nota <= 10):
            console.log("Sobresaliente.")
            break;
        default:
            console.log("Nota inválida. Debe estar entre 0 y 10.")
    }
}

clasificarNota()






        
