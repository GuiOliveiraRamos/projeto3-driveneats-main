let comidaEscolhida;
let titleComida;
let priceComida;
function selecionarComida(comidaClicada) {

    const comidaSelecionadaAntes = document.querySelector('.chosen1');

    if (comidaSelecionadaAntes !== null) {

        comidaSelecionadaAntes.classList.remove('chosen1');
    }

    const botao1 = document.querySelector(comidaClicada);

    botao1.classList.add('chosen1');

    comidaEscolhida = botao1.innerHTML;

    const comidaTitle = botao1.querySelector('.tituloComida');
    const comidaPrice = botao1.querySelector('.precoComida');

    titleComida = comidaTitle.innerHTML;
    priceComida = comidaPrice.innerHTML;
    console.log(titleComida)
    verificarSelecoes();

}

let bebidaEscolhida;
let titleBebida;
let priceBebida;
function selecionarBebida(bebidaClicada) {

    const bebidaSelecionadaAntes = document.querySelector('.chosen2');

    if (bebidaSelecionadaAntes !== null) {

        bebidaSelecionadaAntes.classList.remove('chosen2');
    }

    const botao2 = document.querySelector(bebidaClicada);

    botao2.classList.add('chosen2');

    bebidaEscolhida = botao2.innerHTML;

    const bebidaTitle = botao2.querySelector('.tituloBebida');
    const bebidaPrice = botao2.querySelector('.precoBebida');

    titleBebida = bebidaTitle.innerHTML;
    priceBebida = bebidaPrice.innerHTML;

    verificarSelecoes();
}

let sobremesaEscolhida;
let titleSobremesa;
let priceSobremesa;
function selecionarSobremesa(sobremesaClicada) {

    const sobremesaSelecionadaAntes = document.querySelector('.chosen3');

    if (sobremesaSelecionadaAntes !== null) {

        sobremesaSelecionadaAntes.classList.remove('chosen3');
    }

    const botao3 = document.querySelector(sobremesaClicada);

    botao3.classList.add('chosen3');

    sobremesaEscolhida = botao3.innerHTML;

    const sobremesaTitle = botao3.querySelector('.tituloSobremesa');
    const sobremesaPrice = botao3.querySelector('.precosobremesa');

    titleSobremesa = sobremesaTitle.innerHTML;
    priceSobremesa = sobremesaPrice.innerHTML;

    verificarSelecoes();

}

function verificarSelecoes() {

    if (comidaEscolhida !== undefined) {

        if (bebidaEscolhida !== undefined) {

            if (sobremesaEscolhida !== undefined) {

                const fecharPedido = document.querySelector('.finishing');
                fecharPedido.classList.add('order');
                const finalizar = document.querySelector('.finishing');
                finalizar.innerHTML = "Fechar Pedido";

            }
        }
    }
}

function fecharPedidoWhatsApp() {

    priceComida = priceComida.replace('R$ ', '');
    priceBebida = priceBebida.replace('R$ ', '');
    priceSobremesa = priceSobremesa.replace('R$ ', '');

    priceComida = priceComida.replace(',', '.');
    priceBebida = priceBebida.replace(',', '.');
    priceSobremesa = priceSobremesa.replace(',', '.');

    let precoTotal = Number(priceComida) + Number(priceBebida) + Number(priceSobremesa);

    let msg = `Olá, gostaria de fazer o pedido:
     - Prato: ${titleComida}
     - Bebida: ${titleBebida}
     - Sobremesa: ${titleSobremesa}
     Total: R$ ${precoTotal.toFixed(2)}`;

    const mensagemWpp = encodeURIComponent(msg);

    window.open(`http://wa.me/32991368445?text=${mensagemWpp}`);

}