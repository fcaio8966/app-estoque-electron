var formProduto = document.getElementById("form-produto")

var listaProduto = []

function cadastrarProduto(event){

    event.preventDefault()

    var produto = document.getElementById("nome-produto").value
    
    var quantidade = document.getElementById("quantidade-produto").value
    
    var imagem = document.getElementById("imagem-produto").value
    
    console.log ("função cadastrarProduto chamada ")
    console.log (produto)
    console.log(quantidade)
    console.log(imagem)

    var objetoProduto = {
        nome: produto,
        quantidade: quantidade,
        imagem: imagem
    }
     console.log (objetoProduto)
     console.log ("função cadastrarProduto chamada ")
}

formProduto.addEventListener("submit",cadastrarProduto)