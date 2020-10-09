const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');
const aliensImg = ['img/monster-1.png', 'img/monster-2.png', 'img/monster-3.png', 'img/monster-4.png', 'img/monster-5.png'];
const instructionsText = document.querySelector('.game-instructions');
const paragrafo = document.querySelector('.par');
const startButton = document.querySelector('.start-button');
let alienInterval;

//Sons do jogo
var somDisparo = document.getElementById('somDisparo');
var somExplosao = document.getElementById('somExplosao');
var somFundo = document.getElementById('somFundo');
var somGameover = document.getElementById('somGameover');
var somStart = document.getElementsByClassName('somStart')[0];

//Música em loop
somStart.addEventListener("ended", function(){somStart.currentTime = 0; somStart.play();}, false);
somStart.play();

//Função que cria os movimentos básicos da nave: sobe, desce e atira.
function flyShip(event) {
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if(event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if(event.key === " ") {
        event.preventDefault();
        fireLaser();
    }
}

//Função de subir
function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top'); //getcomputedStyle puxa os elementos de css
    if(topPosition === "0px") {
        return
    } else {
        let position = parseInt(topPosition);
        position -= 25;
        yourShip.style.top = `${position}px`;
    }
}

//Função de descer
function moveDown() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "500px") {
        return
    } else {
        let position = parseInt(topPosition);
        position += 25;
        yourShip.style.top = `${position}px`;
    }
}

//Função de atirar
function fireLaser() {
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
    somDisparo.play();
}

function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = 'img/shoot.png';
    newLaser.classList.add('laser'); //cria uma classe com nome laser para editar no css
    newLaser.style.left = `${xPosition}px`;
    newLaser.style.top = `${yPosition - 10}px`;
    return newLaser;
}

function moveLaser(laser) { //Vai executar essa função a cada 10 mili segundos.
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(laser.style.left);
        let aliens = document.querySelectorAll('.alien');

        aliens.forEach((alien) => { // Comparando se cada inimigo foi atingido, sem sim troca a src da imagem para explosão.
            if(checkLaserCollision(laser, alien)) {
                alien.src = 'img/explosion.png';
                alien.classList.remove('alien');
                alien.classList.add('dead-alien');
            }
        })

        if(xPosition === 340) {
            laser.remove();
        } else {
            laser.style.left = `${xPosition + 8}px`;
        }
    }, 10);
}

//Função para aparecer monstros inimigos aleatórios
function createAliens() {
    let newAlien = document.createElement('img');
    let alienSprite = aliensImg[Math.floor(Math.random() * aliensImg.length)]; //Sorteio das imagens dos monstros
    newAlien.src = alienSprite;
    newAlien.classList.add('alien');
    newAlien.classList.add('alien-transition');
    newAlien.style.left = '370px';
    newAlien.style.top = `${Math.floor(Math.random() * 330) + 30}px`;
    playArea.appendChild(newAlien);
    moveAlien(newAlien);
}

//Função para movimentar os inimigos
function moveAlien(alien) {
    let moveAlienInterval = setInterval(() => {
        let xPosition = parseInt(window.getComputedStyle(alien).getPropertyValue('left'));
        if(xPosition <= 50) {
            if(Array.from(alien.classList).includes('dead-alien')) {
                alien.remove();
            } else {
                gameOver();
            }
        } else {
            alien.style.left = `${xPosition - 4}px`;
        }
    }, 30);
}

//Função de colisão
function checkLaserCollision(laser, alien) {
    let laserTop = parseInt(laser.style.top);
    let laserLeft = parseInt(laser.style.left);
    let laserBottom = laserTop - 20;
    let alienTop = parseInt(alien.style.top);
    let alienLeft = parseInt(alien.style.left);
    let alienBottom = alienTop - 30;

    if(laserLeft != 340 && laserLeft + 40 >= alienLeft) {
        if(laserTop <= alienTop && laserTop >= alienBottom) {
            somDisparo.pause();
            somExplosao.play();
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }    
}

//Função de início do jogo
startButton.addEventListener('click', (event) => {
    playGame();
    somStart.pause();
    somFundo.addEventListener("ended", function(){somFundo.currentTime = 0; somFundo.play();}, false);
somFundo.play();
});

function playGame() {
    startButton.style.display = 'none';
    instructionsText.style.display = 'none';
    paragrafo.style.display = 'none';
    window.addEventListener('keydown', flyShip);
    alienInterval = setInterval(() => {
        createAliens();
    }, 2000);
}

//Função de Game Over
function gameOver() {
    somFundo.pause();
    somGameover.play();
    window.removeEventListener('keydown', flyShip);
    clearInterval(alienInterval);
    let aliens = document.querySelectorAll('.alien');
    aliens.forEach((alien) => alien.remove());
    let lasers = document.querySelectorAll('.laser');
    lasers.forEach((laser) => laser.remove());
    setTimeout(() => { 
        alert('Game Over!');
        yourShip.style.top = "250px";
        startButton.style.display = "block";
        instructionsText.style.display = "block";
        paragrafo.style.display = "block";
    });
}
