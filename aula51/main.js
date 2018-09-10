

let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        // console.log(xmlhttp.responseText)
        // console.log(JSON.parse(xmlhttp.responseText))

        let resposta = JSON.parse(xmlhttp.responseText)
        let respostaEmArray = Object.entries(resposta.contenido)

            // object.values pega o valor do objeto e tranforma em Array
            // object.keys paga a posição do objeto e tranforma e Array
            // objet.entris pega posição e chave e tranforma em Array

        // console.log(respostaEmArray)

        respostaEmArray.forEach(function(valor){

            let pais = valor[0]
            let id = valor[1]

            let option = document.createElement("option")
            let optionPais = document.createTextNode(pais)
            option.appendChild(optionPais)
            selectPaises.appendChild(option)

            option.setAttribute("value", id)


        })


    }
}

xmlhttp.open("GET", "http://pilote.techo.org/?do=api.getPaises", true)
xmlhttp.send()


// input.forEach(function(valor, chave) {
//     input[chave].removeAttribute("style")
// });

/* <script>
let li = document.createElement("LI");
let liText = document.createTextNode("Water");
li.appendChild(liText);
document.getElementById("myList").appendChild(li);
</script>
<body>
<ul id="myList"></ul>
</body> */



    //   5. Relacionar o HTML a um arquivo JS que, quando o site for carregado, faça um pedido usando o
    //   método getPaises. Imprimir em linha de comando o resultado desse pedido em texto e em um
    //   JSON.