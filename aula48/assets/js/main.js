

window.onload = function() {
    document.getElementById("titular").style.display = 'none'
   
    document.querySelector("#lechuza").style.filter = "grayscale(100%)"
    
    const formulario = document.querySelectorAll("input")
    formulario.forEach(function (elemento) {
        elemento.style.background = "red"
    })

    const copy = document.querySelector("#copyright")
    console.log(copy.attributes)
    
    const redirTwitter = document.querySelector(".fa-twitter")
    console.log(redirTwitter.getAttribute("href"))

    const redirFace = document.querySelector(".fa-facebook")
    console.log(redirFace.getAttribute("href"))

    const redirYT = document.querySelector(".fa-youtube")
    redirYT.setAttribute("href", "https://www.youtube.com/channel/UCRQdwmWMhTcqDFjPT4UPZYA")

    const funcionando = document.querySelector("form")
    console.log(funcionando.hasAttribute('action'))

    funcionando.removeAttribute('url')
    funcionando.setAttribute('action', "")

    const mudarCor = document.querySelectorAll("h2")
    mudarCor.forEach(function (elemento) {
        elemento.style.color = "red"
    })

    const mudarIcones = document.querySelectorAll(".icon")
    mudarIcones.forEach(function (elemento) {
        elemento.style.color = "green"
    })

    const botao = document.createElement("button")
    const botaoTexto = document.createTextNode("Apague a coruja")
    botao.appendChild(botaoTexto)
    document.querySelector(".botao").appendChild(botao)

    botao.onclick = function () {
        document.querySelector("#lechuza").style.display = "none"
    }
    
    // const traduzir = document.querySelector("#top")
    // traduzir.textContent = "Topo"

    const traduzir = document.querySelectorAll("#nav a")
    traduzir.forEach(function (elemento, index) {
        switch (index) {
            case 0:
            elemento.textContent = "Topo"
            break
            case 1:
            elemento.textContent = "Trabalho"
            break
            case 2:
            elemento.textContent = "portifolio"
            break
            case 3:
            elemento.textContent = "Contato"
            break
        }
    })

    const li = document.querySelectorAll(".social li")
    li.setAttribute('class', "apagar")

    const social = document.querySelector("li .fa-foursquare")
    const foursquare = document.querySelector(".fa-foursquare")
    social.removeChild(foursquare)
}



// const funcionando = document.querySelector("form")
// console.log(funcionando.hasAttribute('action'))

// funcionando.removeAttribute('url')
// funcionando.setAttribute('action', "")