let primeiroNumero = prompt ('Digite o primeiro número')
let segundoNumero = prompt ('Digite o segundo número')

let corretos = confirm('Esses números estão corretos?')
if (corretos) {
    let maiorNumero = parseInt(primeiroNumero) > parseInt(segundoNumero)
    ? primeiroNumero
    : segundoNumero

    alert('O maior número é ' + maiorNumero)
} else {
    window.location.reload
}
