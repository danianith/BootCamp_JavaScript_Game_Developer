const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; // Variável que trava o tabuleiro, n permitindo virar todas as cartas ao mesmo tempo.

function flipCard() {

    if (lockBoard) return;
    if (this === firstCard) return; // Não deixará dar duplo clique na mesma carta.

    this.classList.add('flip'); // this será o contexto da função, no caso a carta específica em que está clicando.
    // Não pode ser utilizado o toggle e sim o add pois no toggle a class pode ser add e retirada e no add só add uma vez e n pode ser retirada depois.
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}

// Função para desabilitar as cartas viradas com Match
function disableCards() { 
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// Função para desvirar as cartas que não deram Match
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip'); 
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

// Função para resetar o tabuleiro
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Função para embaralhar as cartas
(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12); // .floor aredonda o resultado da expressão. Irá guardar números de 0 a 11.
        card.style.order = randomPosition; 
    })
})(); // Immediate-Invoked Function Encapsulada entre () e no final invoca com (); é uma função que é executada assim que definida.

cards.forEach((card) => { // forEach vai percorrer cada ítem, no caso cada carta e vai add o flip em cada carta clicada.
    card.addEventListener('click', flipCard)
})

