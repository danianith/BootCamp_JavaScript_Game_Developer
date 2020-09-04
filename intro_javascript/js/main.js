

function clicou(){
    //alert("Obrigada por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/danianith/"); //Abre em uma nova janela.
    //window.location.href = "https://www.linkedin.com/in/danianith/"; (abre na mesma janela)
}

function trocar(elemento){    
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse.";
    elemento.innerHTML = "Obrigada por passar o mouse.";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false; 
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

function soma(n1, n2){
    return n1 + n2;
}
function setReplace(frase, nome, nome_nome){
    return frase.replace(nome, nome_nome);
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Holanda"));*/

/*var d = new Date();
alert("Mês " + d.getMonth()); //No mês colocar + 1 antes do último ). Caso contrário dá um mês antes.
alert("Dia " + d.getDay()); //Dá um dia a mais assim.
alert("Horas " + d.getHours());
alert("Minutos " + d.getMinutes());*/

/*var count;
for(count=0; count <= 5; count++){
    alert(count);
}*/

/*var count = 0;
while(count <= 5) {
    console.log(count);
    count = count + 1; //ou count++; que é ele + 1 também.
    
};*/

/*var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade");
}else {
    alert("Menor de idade");
};*/

/*var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

/*var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
alert(lista[1]);*/

/*var nome = "Daniani Thozeski";
var idade = 38;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo.";
//alert(nome + " tem " + idade + " anos. ");
//alert(idade + idade2);
//alert(frase.replace("Japão", "Holanda"));
console.log(n1 * idade + n2);
console.log(nome);
console.log(idade + idade2);
//console.log(frase.replace("Japão", "Holanda"));
//console.log(frase.toLowerCase());
console.log(frase.toUpperCase());*/
