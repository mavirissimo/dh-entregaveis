function elevarAoSegundo(primeiroNumero, segundoNumero) {
    return primeiroNumero ** segundoNumero 

}

console.log(elevarAoSegundo(5, 7))


let quadrado = function (numero) {
 return numero * numero
}

console.log(quadrado(10))


// numero é uma variavel local 

// function atribuicao () {
//     var numero = 5
// }

// console.log(numero)


function trianguloRetangulo(ladoA, ladoB) {
    function hipotenusa () {
        return (ladoA ** 2) + (ladoB ** 2)
    }
    return Math.sqrt(hipotenusa())
}

let resultado = trianguloRetangulo (4,5)

console.log('resultado = ' + resultado)



function meuSanduiche (ingrediente1, ingrediente2, callback) {
    console.log('estou comendo um sanduíche de ' + ingrediente1 + ' com ' + ingrediente2)
    setTimeout(function() {
        callback()
    }, 8000)
}

function comiSanduiche(){
    console.log('terminei de comer meu sanduíche')
}

meuSanduiche('pão', 'ovo', comiSanduiche)


function trianguloRetangulo(ladoA, ladoB) {
    function hipotenusa () {
        return Math.sqrt((ladoA ** 2) + (ladoB ** 2))
    }
    return ladoA + ladoB + hipotenusa()
}

let resultado1 = trianguloRetangulo (4,5)

console.log('resultado = ' + resultado1)



