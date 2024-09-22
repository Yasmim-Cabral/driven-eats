let nomeComida = "";
let nomeBebida = "";
let nomeSobremesa = "";
let total = "";

function selecionarPrato(prato) {
    const pratoSelecionadoAntes = document.querySelector('.comida .selecionado');
    
    
    if (pratoSelecionadoAntes !== null) {
        pratoSelecionadoAntes.classList.remove("selecionado");
    }
    prato.classList.add("selecionado");

    nomeComida = document.querySelector(".selecionado .nome-comida");
    
    verificarSelecao();
    telaPedidoPreco();
}

function selecionarBebida(bebida) {
    const bebidaSelecionadaAntes = document.querySelector('.bebida .selecionado');
    
    
    if (bebidaSelecionadaAntes !== null) {
        bebidaSelecionadaAntes.classList.remove("selecionado");
    }
    bebida.classList.add("selecionado");

    nomeBebida = document.querySelector(".selecionado .nome-bebida");

    verificarSelecao();
    telaPedidoPreco();
}

function selecionarSobremesa(sobremesa) {
    const sobremesaSelecionadaAntes = document.querySelector('.sobremesa .selecionado');
    
    
    if (sobremesaSelecionadaAntes !== null) {
        sobremesaSelecionadaAntes.classList.remove("selecionado");
    }
    sobremesa.classList.add("selecionado");

    nomeSobremesa = document.querySelector(".selecionado .nome-sobremesa");

    verificarSelecao();
    telaPedidoPreco();
}

function verificarSelecao() {
    if (nomeComida !== "" && nomeBebida !== "" && nomeSobremesa !== "") {

        const botaoFinalizar = document.querySelector(".finalizar");
        botaoFinalizar.innerHTML = "Fechar pedido"
        botaoFinalizar.classList.add("botao-finalizar")
    }
}

function finalizarPedido() {
    if (nomeComida !== "" && nomeBebida !== "" && nomeSobremesa !== "") {
        document.querySelector(".fechar-pedido").classList.remove("escondido")
    }
}

function telaPedidoPreco(){
    const precoComida = Number(document.querySelector(".comida .selecionado .preco").innerHTML);
    const comidaFinal = document.querySelector(".comida-final");
    comidaFinal.innerHTML = `${nomeComida.innerHTML}: ${precoComida.toFixed(2)}`;

    const precoBebida = Number(document.querySelector(".bebida .selecionado .preco").innerHTML);
    const bebidaFinal = document.querySelector(".bebida-final");
    bebidaFinal.innerHTML = `${nomeBebida.innerHTML}: ${precoBebida.toFixed(2)}`;

    const precoSobremesa = Number(document.querySelector(".sobremesa .selecionado .preco").innerHTML);
    const sobremesaFinal = document.querySelector(".sobremesa-final");
    sobremesaFinal.innerHTML = `${nomeSobremesa.innerHTML}: ${precoSobremesa.toFixed(2)}`;

    total = Number(precoComida + precoBebida + precoSobremesa);
    const precoFinal = document.querySelector(".total");
    precoFinal.innerHTML = `Total: ${total.toFixed(2)}`
    
    wpp();
}

function cancelar (){
    const esconder = document.querySelector(".fechar-pedido")
    esconder.classList.add("escondido")
}

function wpp (){
    const link = document.querySelector(".link");
    link.href = `https://wa.me//5531983709973?text=Olá,%20gostaria%20de%20fazer%20o%20pedido:%0A-%20Prato:%20${nomeComida.innerHTML}%0A-%20Bebida:%20${nomeBebida.innerHTML}%0A-%20Sobremesa:%20${nomeSobremesa.innerHTML}%0ATotal:%20${total.toFixed(2)}`;
}