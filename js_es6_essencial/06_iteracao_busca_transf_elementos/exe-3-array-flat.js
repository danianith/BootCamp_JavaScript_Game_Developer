const arr = [1, 2, [30, 40]];

console.log(arr.flat());

const arr2 = [1, 2, [30, 40, [70, 80, [25, 45]]]];

console.log(arr2.flat(2));

// [ 1, 2, 30, 40 ]
// [ 1, 2, 30, 40, 70, 80, [ 25, 45 ] ]