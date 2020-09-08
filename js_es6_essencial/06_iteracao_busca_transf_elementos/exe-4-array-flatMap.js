const arr = [1, 2, 3, 4, 5];
console.log(arr);

const arr2 = arr.flatMap(value => [value * 2]);
console.log(arr2);

const arr3 = arr.flatMap(value => [[value * 2]]);
console.log(arr3);

