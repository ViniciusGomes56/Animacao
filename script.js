
const personagem = document.querySelector('#personagem');
const cenario = document.querySelector('#imagemCenario');

let posicao = 0;
let atacando = false;

const velocidade = 8;

document.addEventListener('keydown', function(evento) {

    // Especial
    if (evento.code === 'Space' && !evento.repeat) {

        evento.preventDefault();

        if (atacando) {

            personagem.classList.remove('atacar');
            atacando = false;

        } else {

            atacando = true;

            personagem.classList.remove('andar');
            personagem.classList.add('atacar');

        }

        return;
    }

    if (atacando) {
        return;
    }

    // Movimento para esquerda
    if (evento.key === 'ArrowLeft') {

        personagem.classList.add('andar');
        personagem.classList.remove('direita');
        personagem.classList.add('esquerda');

        posicao = Math.min(posicao + velocidade, 0);

    }

    // Movimento para direita
    if (evento.key === 'ArrowRight') {

        personagem.classList.add('andar');
        personagem.classList.remove('esquerda');
        personagem.classList.add('direita');

        posicao = Math.max(posicao - velocidade, -2000);

    }

    cenario.style.transform = `translateX(${posicao}px)`;

});

// Parar movimento
document.addEventListener('keyup', function(evento) {

    if (evento.key === 'ArrowLeft' ||
        evento.key === 'ArrowRight') {

        personagem.classList.remove('andar');

    }

});

// Finalizar especial
personagem.addEventListener('animationend', function(evento) {

    if (
        atacando &&
        evento.animationName === 'especial4'
    ) {

        personagem.classList.remove('atacar');
        atacando = false;

    }

});
