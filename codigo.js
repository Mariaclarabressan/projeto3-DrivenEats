let valorPrato = 0 
let valorBebida = 0 
let valorSobremesa = 0 
let nomePrato = ""
let nomeBebida = ""
let nomeSobremesa = ""


function PratoSelecionado (PratoEscolhido){
    const escolhido = document.querySelector(".prato-principal .escolhido");
    if (escolhido !== null){
        escolhido.classList.remove("escolhido");
    }

    PratoEscolhido.classList.add("escolhido");
    let preco = PratoEscolhido.querySelector(".preco").innerHTML;
    preco = Number(preco.replace("R$:","").replace(",","."));
    valorPrato = preco
    let nome = PratoEscolhido.querySelector(".titulo").innerHTML;
    nomePrato = nome;
    verificarPedido();  

}

function BebidaSelecionada (BebidaEscolhida){
    const escolhido = document.querySelector(".bebidas .escolhido");
    if (escolhido !== null){
        escolhido.classList.remove("escolhido");
    }
    BebidaEscolhida.classList.add("escolhido");
    let preco = BebidaEscolhida.querySelector(".preco").innerHTML;
    preco = Number(preco.replace("R$:","").replace(",","."));    
    valorBebida = preco
    let nome = BebidaEscolhida.querySelector(".titulo").innerHTML;
    nomeBebida = nome;
    verificarPedido();
}

function SobremesaSelecionada (SobremesaEscolhida){
    const escolhido = document.querySelector(".sobremesas .escolhido");
    if (escolhido !== null){
        escolhido.classList.remove("escolhido");
    }
    SobremesaEscolhida.classList.add("escolhido");
    let preco = SobremesaEscolhida.querySelector(".preco").innerHTML;
    preco = Number(preco.replace("R$:","").replace(",","."));
    valorSobremesa = preco
    let nome = SobremesaEscolhida.querySelector(".titulo").innerHTML;
    nomeSobremesa = nome;
    verificarPedido();
}
function verificarPedido(){
    
    if (document.querySelector(".prato-principal .escolhido") !== null){
        if (document.querySelector(".bebidas .escolhido") !== null){
          if (document.querySelector(".sobremesas .escolhido") !== null){
              let BotaoAcesso = (document.querySelector(".botao-pedido-completo"));
                BotaoAcesso.classList.remove("escondido");
                let BotaoDesligado = (document.querySelector(".botao-pedido-nao-finalizado"));
                BotaoDesligado.classList.add("escondido");      
          }  
        }
    }
         
}

function cancelar() {
    document.querySelector(".fundo-pedido").classList.add("escondido");
  }

function fecharPedido (){
    let total = (valorPrato + valorBebida + valorSobremesa).toFixed(2)
    let mensagem = " Olá, gostaria de fazer o pedido:\n - Prato: " +nomePrato +"\n - Bebida: " + nomeBebida + "\n - Sobremesa: " + nomeSobremesa + "\n Total: R$ " + total
    let mensagemFInal = encodeURIComponent(mensagem)
    let link = "https://wa.me/5513991882736?text=" + mensagemFInal    
    window.open(link)
}
