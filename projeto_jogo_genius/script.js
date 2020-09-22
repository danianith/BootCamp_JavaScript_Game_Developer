let order = []; // Array onde ficará as ordens aleatórias das cores no jogo.
let clickedOrder = [];  // Array onde ficará as ordens dos clicks nas cores.
let score = 0; // Placar do jogo iniciando em 0.

// 0 - verde (green)   |   1 - vermelho (red)   |   2 - amarelo (yellow)   |   3 - azul (blue)   |  Lógica das cores.

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Função que irá sortear números aleatórios entre 0 e 3 ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); // Math.floor vai arredondar o número. Math.random()*4 vai sortear aleatório um número entre 0 e 3.
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]); // Essa variável vai guardar cada elemento criado enquanto o for estiver rodando.
        lightColor(elementColor, Number(i) + 1);
    }
}

//Função que Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 400);
}

//Função que checa se os botões clicados são os mesmos da ordem gerada do jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou!`);
        nextLevel();
    }
}

//Função para click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);   
}

//Função que retorna as cores
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    }else if(color == 1) {
        return red;
    }else if(color == 2) {
        return yellow;
    }else if(color == 3) {
        return blue;
    }
}

//Função para o próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função de Game Over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em OK para reiniciar!`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Função para Iniciar Jogo
let playGame = () => {
    alert('Bem Vindo ao Genius!');
    score = 0;

    nextLevel();
}

//Eventos de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Início do Jogo
playGame();
