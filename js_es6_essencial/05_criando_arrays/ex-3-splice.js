const arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.splice(2);

console.log(arr);

//primeiro parametro: posição do array que irá remover ou alterar
//segundo parametro: 0 não altera nada
//terceiro parametro: adiciona um elemento 
arr.splice(0, 0, 'first');

console.log(arr);

const frutas = ['banana', 'maçã', 'laranja'];
console.log(frutas);

//adicionar acerola após banana
frutas.splice(1, 0, 'acerola');
console.log(frutas);

frutas.splice(2, 1, 'melancia', 'morango');
console.log(frutas);

