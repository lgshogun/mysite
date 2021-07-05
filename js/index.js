function incializar(senha) {
    var senha = prompt("Qual a senha?");

    if (senha == "12345") {
        alert("Bem Vindo LGShogun!");
    }
    
    else{
        alert("Senha Incorreta, bye!");
        window.close();
    }
}