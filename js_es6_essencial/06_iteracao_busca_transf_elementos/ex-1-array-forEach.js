const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(`Indice ${index} - Valor: ${value}`);
});

const frutas = ['goiaba', 'melancia', 'banana'];

frutas.forEach((fruta, index) => {
    console.log(index, fruta);
});

frutas.forEach((fruta, index, arr) => console.log(index, fruta, arr));





