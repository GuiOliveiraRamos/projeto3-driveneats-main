function selecionarComida(botaoClicado) {

    const comidaSelecionadaAntes = document.querySelector('.chosen1');

    console.log(comidaSelecionadaAntes);

    if (comidaSelecionadaAntes !== null) {

        comidaSelecionadaAntes.classList.remove('chosen1');
    }

    const botao = document.querySelector(botaoClicado);

    botao.classList.add('chosen1');
}


function selecionarBebida(botaoClicado) {

    const bebidaSelecionadaAntes = document.querySelector('.chosen2');

    console.log(bebidaSelecionadaAntes);

    if (bebidaSelecionadaAntes !== null) {

        bebidaSelecionadaAntes.classList.remove('chosen2');
    }

    const botao = document.querySelector(botaoClicado);

    botao.classList.add('chosen2');
}


function selecionarSobremesa(botaoClicado) {

    const sobremesaSelecionadaAntes = document.querySelector('.chosen3');

    console.log(sobremesaSelecionadaAntes);

    if (sobremesaSelecionadaAntes !== null) {

        sobremesaSelecionadaAntes.classList.remove('chosen3');
    }

    const botao = document.querySelector(botaoClicado);

    botao.classList.add('chosen3');
}