//pega elementos do botão sim e não
let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");

//função que move o botão não para uma nova posição **mouseover**
botaoNao.addEventListener("click", function() {
//move o botão NÃO aleatoriamente na tela
let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth) ;
let posY = Math.random() * (window.innerHeight - botaoNao.offsetHeight) ;
botaoNao.style.position = "absolute";
botaoNao.style.left = posX + "px";
botaoNao.style.top = posY + "px";
//exibe mensagem de erro
mensagemErro.style.display = "block";
});
//mantém o botão SIM fixo
botaoSim.addEventListener("click", function(){
alert("Ótima escolha =D\nMinha chave pix é o número do celular!")
});

