const arr = [10, 20, 30, 40];

const somaArr = arr.reduce((total, value) => total += value, 0);
console.log('A soma do array é: ', somaArr);

const mediaArr = arr.reduce((total, value) => total += value, 0) / arr.length;
console.log('A média dos valores são:', mediaArr);
