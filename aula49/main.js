

cumprimento.onclick = function () {
    alert("olá")
}

altera_fundo.onclick = function () {
    const cor_fundo = document.querySelector("body")
    cor_fundo.style.background = "green"  
}

const ver_imagem = function () {
    texto.innerHTML = "estou vendo a imagem"
}

const imagem = document.querySelector("img")
imagem.addEventListener ("mouseover", ver_imagem)

// onmouseover = function () {
//     texto.innerHTML = "estou vendo a imagem"
// }

imagem.onclick = function () {
    imagem.removeEventListener("mouseover", ver_imagem)
    texto.innerHTML = "estou clicando na imagem"
}

const mudar_cor = function () {
    this.style.background = "red"
}
const cor = document.querySelector("body")
cor.addEventListener("click", mudar_cor)

cor.removeEventListener("click", mudar_cor)

formulario.onsubmit = function (event) {
    event.preventDefault ()
    if (idade.value < 18) {
        idade.value = ""
        idade.placeholder = "você é dimenor!!"
        idade.style.border = "2px dashed red"  
    } else {
        formulario.submit()
    }
}

cor.addEventListener("mousemove", function(event) {
    console.log(event.clientX + " " + event.clientY)
})

const tempo = setTimeout(function(){
    alert("Você está a 10 segundos na página")
}, 10000)


const intervalo = setInterval(function() {
    alert ("Passaram 8 segundos...")
}, 8000)

setTimeout(function() {
    clearTimeout(tempo)
    clearInterval(intervalo)
}, 5000)


