let botao;
let quantidade = 0;
function jogosAlugados() {
    console.log(`Total de jogos alugados: ${quantidade}`);
}

function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    let texto;
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        texto = 'devolver';
    } else {
        texto = 'alugar';
    }
    let confirmacao = prompt(`Você deseja ${texto} o jogo? (sim/não)`);
    if (confirmacao == 'sim') {
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        quantidade--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        quantidade++;
    }
} else {
    alert('Ação interrompida');
}
jogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    quantidade = document.querySelectorAll('.dashboard__item__img--rented').length;
    jogosAlugados();
});