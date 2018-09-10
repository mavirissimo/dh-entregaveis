
let body = document.querySelector("body")
let cor = false

let contador = 0
let paragrafo = document.createElement("p")
body.appendChild(paragrafo)


function clicar () {
    alert ("Fui clicado")
    
    contador ++
    paragrafo.innerHTML = "Clique número: " + contador

    if (!cor) {
        cor = true
        body.style.background = "red"
        return
    }
    cor = false
    body.style.background = "blue"

}

botao.addEventListener('click', clicar)

document.onkeydown = function (event){
    let clique = event.keyCode
    if (clique == 83) {
        botao.removeEventListener("click", clicar)
    }
    if (clique == 80) {
        botao.addEventListener('click', clicar)   
    }
}



// let alerta = function (seletor) {
//     seletor.setAttribute("style", "border: 2px dotted red")
// }
// input.forEach(function(valor, chave) {
//     input[chave].removeAttribute("style")
// });

// function myFunction(event) {
//     var x = event.keyCode;
//     if (x == 27) {  // 27 is the ESC key
//         alert ("You pressed the Escape key!");
//     }
// }

// 2. Modificar o arquivo anterior de forma que, se o usuário pressionar a tecla “S” (Stop),
// o botão deixe de funcionar, e se ele pressionar a tecla “P” (Play), o botão volte a
// funcionar.


// imagem.onclick = function () {
//     imagem.removeEventListener("mouseover", ver_imagem)
//     texto.innerHTML = "estou clicando na imagem"
// }

// const mudar_cor = function () {
//     this.style.background = "red"
// }
// const cor = document.querySelector("body")
// cor.addEventListener("click", mudar_cor)

// cor.removeEventListener("click", mudar_cor)

// const imagem = document.querySelector("img")
// imagem.addEventListener ("mouseover", ver_imagem)

// var contador = document.querySelector('.badge');

// document.querySelector('button').addEventListener('click', function(){
//   var numero = parseInt(contador.textContent) + 1;
//   contador.textContent = numero;
// });


// const botao = document.createElement("button")
// const botaoTexto = document.createTextNode("Apague a coruja")
// botao.appendChild(botaoTexto)
// document.querySelector(".botao").appendChild(botao)
// body.innerHTML = "<h2>Clique número N</h2>"




// 4. Criar um site com 3 divs: um de segundos, outro de minutos e outro de horas. Criar
// um cronômetro. Quando chegar a 60, o marcador de segundos deve reiniciar e
// somar 1 ao marcador de minutos. Quando o marcador de minutos chegar a 60, deve
// reiniciar e somar 1 ao marcador de horas.
// 5. Criar uma página contendo uma calculadora básica com os seguintes botões
// (adição, subtração, multiplicação e divisão) e os números
// 6. Criar um site contendo uma caixa com um contador que conte quantas vezes o
// cursor é passado por cima dela.
// 7. Faça uma request para mostrar todos as fotos e seus títulos na seguinte api:
// https://jsonplaceholder.typicode.com/albums/1/photos -->