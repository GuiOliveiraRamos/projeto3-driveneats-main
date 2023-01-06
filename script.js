function selecionarComida(botaoClicado) {

    const comidaSelecionadaAntes = document.querySelector('.chosen1');

    if (comidaSelecionadaAntes !== null) {

        comidaSelecionadaAntes.classList.remove('chosen1');
    }

    const botao = document.querySelector(botaoClicado);

    botao.classList.add('chosen1');
}


function selecionarBebida(botaoClicado) {

    const bebidaSelecionadaAntes = document.querySelector('.chosen2');

    if (bebidaSelecionadaAntes !== null) {

        bebidaSelecionadaAntes.classList.remove('chosen2');
    }

    const botao = document.querySelector(botaoClicado);

    botao.classList.add('chosen2');
}


function selecionarSobremesa(botaoClicado) {

    const sobremesaSelecionadaAntes = document.querySelector('.chosen3');

    if (sobremesaSelecionadaAntes !== null) {

        sobremesaSelecionadaAntes.classList.remove('chosen3');
    }

    const botao = document.querySelector(botaoClicado);

    botao.classList.add('chosen3');
}
function finalizarPedido() {

    const botao = document.querySelector('.finishing');

    let chosen1 = document.querySelector(".chosen1");
    let chosen2 = document.querySelector(".chosen2");
    let chosen3 = document.querySelector(".chosen3");

    if (chosen1 !== null && chosen2 !== null && chosen3 !== null) {

        botao.classList.add('order');
        botao.innerHTML = "Fazer Pedido";

    }


}