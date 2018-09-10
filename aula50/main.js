
        
        // nome.onblur = function() {
        //     if(!this.value) {
        //         this.focus()
        //     }
        // }

        formulario.onsubmit = function (event) {
            event.preventDefault ()
        
            let input = document.querySelectorAll("input")
            // input.style.border = "2px solid gray"

            // let borda = function () {
            //     border = "2px dotted red"
            // }

            let alerta = function (seletor) {
                seletor.setAttribute("style", "border: 2px dotted red")
            }
            

            input.forEach(function(valor, chave) {
                input[chave].removeAttribute("style")
            });
            
            // for(let i = 0; i < input.length; i++ ) {
            //     input[i].removeAttribute("style")
            // }

            
            if (!nome.value) {
                nome.placeholder = "preencha o campo corretamente"
                alerta(nome)
            }
                else if (!email.value) {
                    email.placeholder = "preencha o campo corretamente"
                    alerta(email)
                }
                else if (!senha.value) {
                    senha.placeholder = "preencha o campo corretamente"
                    alerta(senha)
                }
                else if (!senha1.value) {
                    senha1.placeholder = "preencha o campo corretamente"
                    alerta(senha1)
        
                } else {
                    formulario.submit()
                }
            }
        
            senha1.onblur = function () {
                if (senha.value !== senha1.value) {
                    senha1.value = ""
                    senha1.placeholder = "As duas senhas precisam ser iguais"
                    senha1.style.border = "2px dotted red"
                    // senha1.focus()
                    senha.value = ""
                }
            }
        
            let img = document.querySelector("img")
            let esta_visivel = false
        
            img.onclick = function () {
                if (!esta_visivel) {
                    esta_visivel = true
                    senha.type = "text"
                    return
                }
                esta_visivel = false
                senha.type = "password"
            }

            let limpar = document.querySelector(".limpar")

            limpar.onclick = function () {
                nome.value = ""
                email.value = ""
                senha.value = ""
                senha1.value = ""
            }

            
        
            // codigo capenga antes do thiago dar aquela ideia
            // const mostrar = function () {
            //     senha.type = "text"
            // }
        
            // const esconder = function () {
            //     senha.type = "password"
            // }
        
            // const img = document.querySelector("img")
            // img.addEventListener("mousedown", mostrar)
            // img.addEventListener("mouseup", esconder)
        
        
        
        
        // D. Adicionar um checkbox que permita que o usuário escolha se quer ou não receber
        // notícias sobre o site.
        // E. Criar dois botões: um para limpar todos os campos e outro que permita
        // ocultar o formulário e mostrar um <ul> com cada dado
        // inserido no form (nome e valor).
        // F. Caso o usuário seja do sexo masculino, a página deve mostrar o fundo de uma cor e, caso
        // seja do sexo feminino, de outra. Para não excluir ninguém, adicionar
        // uma terceira opção (“outro”), que exiba outra cor -->