
/*
Desafio 1 - Quantidade de Números Positivos

Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada - Você receberá seis valores, negativos e/ou positivos.

Saída - Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.
 
Exemplo de Entrada: 7 -5 6 -3.4 4.6 12	Exemplo de Saída: 4 valores positivos

Solução: */

let a = parseInt(gets());
let b = parseInt(gets());
let c = parseInt(gets());
let d = parseInt(gets());
let e = parseInt(gets());
let f = parseInt(gets());

let array = [a,b,c,d,e,f];

let pos = array.filter(value => value > 0);

console.log(pos.length + " valores positivos");


