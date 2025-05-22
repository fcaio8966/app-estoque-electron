var formProduto = document.getElementById("form-produto")

function cadastrarProduto(event){

    event.preventDefault()

    var produto = document.getElementById("nome-produto").value
    
    var quantidade = document.getElementById("quantidade-produto").value
    
    var imagem = document.getElementById("imagem-produto").value
    
    console.log ("função cadastrarProduto chamada ")
    console.log (produto)
    console.log(quantidade)
}

formProduto.addEventListener("submit",cadastrarProduto)