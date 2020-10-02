const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false; // Diz se o dino está pulando.

let position = 0; //Posição inicial do dino.

//Função para verificar se o usuário pressionou a barra de espaço para o dino pular
function handleKeyUp(event) {
    if (event.keyCode === 32) {  //Se a tecla pressionada foi barra de espaço(keycode 32), então aciona função jump()
        if (!isJumping) {
            jump();
        }       
    }
}
//Função que inclui um botão reiniciar quando acaba o jogo
function createButton(){
     var btn = document.createElement('BUTTON');
     var lbl = document.createTextNode("Reiniciar");
     btn.classList.add('botao');
     btn.appendChild(lbl);   
     btn.onclick = function() {window.location.reload()};     
     document.body.appendChild(btn);    
}

//Função para o pulo do dino
function jump() {

    isJumping = true;  // dino está pulando.

    let upInterval = setInterval(() => {  // setInterval irá repetir o bloco de código a cada intervalo determinado, no caso 20ms.
        if (position >= 150) {  //Se a posição do dino for maior ou igual a 150px então o upInterval será limpo, ou seja o dino pára.
            clearInterval(upInterval);
            //Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) { //Se a posição for menor ou igual a 0 o dino pána.
                    clearInterval(downInterval);
                    isJumping = false; // se chegou na posição 0, dino n está mais pulando e pode pular novamente.
                }else {   // Caso a posição seja maior que 0 o dino desce 20px a cada 20ms.     
                    position -= 20;
                    dino.style.bottom = position + 'px'; //Passando parâmetro de css para o dino.
                }
            }, 20);
        }else { // Caso a posição do dino não tenha atingido 150px, ele subirá 20px a cada 20ms.
            //Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

//Função para criar os cactus
function createCactus() {
    const cactus = document.createElement('div'); //Aqui o js vai gerar elementos html na constante cactus, no caso uma div.
    let cactusPosition = 1000; //Define posição do cactus.
    let randomTime = Math.random() * 6000; //Criará números aleatórios de cactus na tela.

    cactus.classList.add('cactus'); //Add uma classe de nome cactus na div dentro da constante cactus.
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus); //Add um filho com appendChild.

    let leftInterval = setInterval(() => { // Movimentará o cactus para a esquerda na tela.

        if (cactusPosition < -60) {    //Se a posição do cactus for menor que -60 que é a sua largura ele irá desaparecer.
            clearInterval(leftInterval);
            background.removeChild(cactus); // Vai remover o filho cactus do background, para sumir.
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo!</h1>';
            createButton(); //Cria o botão para reiniciar
        
        } else { // Caso o cactus não tenha tingido a posição -60 segue movendo -10px a cada 20ms.
            cactusPosition -= 10;  //Velocidade que se moverá para a esquerda.
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime)  // setTimeout executa uma determinada função depois de um determinado tempo, no caso cria os cactus de forma randômica.
}

createCactus();
document.addEventListener('keydown', handleKeyUp);   //keydown vai verificar se o usuário apertou uma tecla.
