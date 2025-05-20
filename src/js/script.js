var botaoEntrar = document.getElementById("submit")

function login (){
    var campoEmail = document.getElementById("email")
    var campoSenha = document.getElementById("passord").value
    if( campoEmail == "admin@admin.com" && compoSenha=="admin123"){
        window.location.replace("dashboard.html")
    } else {
        console.log("email ou senha incorreto")
    }
        
    console.log("entrou na função login")
} 

botaoEntrar.addEventListener("click",login)