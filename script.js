let comidaEscolhida;

function selecionarComida(comidaClicada) {

    const comidaSelecionadaAntes = document.querySelector('.chosen1');

    if (comidaSelecionadaAntes !== null) {

        comidaSelecionadaAntes.classList.remove('chosen1');
    }

    const botao1 = document.querySelector(comidaClicada);

    botao1.classList.add('chosen1');

    comidaEscolhida = botao1.innerHTML;

    verificarSelecoes();

}

let bebidaEscolhida;

function selecionarBebida(bebidaClicada) {

    const bebidaSelecionadaAntes = document.querySelector('.chosen2');

    if (bebidaSelecionadaAntes !== null) {

        bebidaSelecionadaAntes.classList.remove('chosen2');
    }

    const botao2 = document.querySelector(bebidaClicada);

    botao2.classList.add('chosen2');

    bebidaEscolhida = botao2.innerHTML;

    verificarSelecoes();
}

let sobremesaEscolhida;

function selecionarSobremesa(sobremesaClicada) {

    const sobremesaSelecionadaAntes = document.querySelector('.chosen3');

    if (sobremesaSelecionadaAntes !== null) {

        sobremesaSelecionadaAntes.classList.remove('chosen3');
    }

    const botao3 = document.querySelector(sobremesaClicada);

    botao3.classList.add('chosen3');

    sobremesaEscolhida = botao3.innerHTML;

    verificarSelecoes();

}

function verificarSelecoes() {

    if (comidaEscolhida !== undefined) {

        if (bebidaEscolhida !== undefined) {

            if (sobremesaEscolhida !== undefined) {

                const fecharPedido = document.querySelector('.finishing');
                fecharPedido.classList.add('order');
                const finalizar = document.querySelector('.finishing');
                finalizar.innerHTML = "Fazer Pedido";

            }
        }

    }

}