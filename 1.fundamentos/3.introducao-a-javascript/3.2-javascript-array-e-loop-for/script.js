// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    // for (let index = 0; index < numbers.length; index += 1) {
    //     console.log(numbers[index]); -- ponto 1
    // }

// let result = 0;
//     for (let index =0; index < numbers.length; index += 1) {
//         result += numbers[index];
//     }
//     console.log(result); -- ponto 2

// let sum = 0;

//     for (let index = 0; index < numbers.length; index += 1) {
//         sum += numbers[index];
//     }
//     let average = sum / numbers.length;
//     console.log(average);
//     if (average >= 20) {
//         console.log("Valor maior que 20")
//     } else {console.log("Valor menor ou igual a 20")}; ponto 3 e 4

// let higherNumber = numbers[0];

//     for (let index = 1; index < numbers.length; index += 1) {
//         if (numbers[index] > higherNumber) {
//             higherNumber = numbers[index];
//         }
//     }
//     console.log(higherNumber);      ponto 5

//     let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }                                   ponto 6


// let smallestNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < smallestNumber) {
//     smallestNumber = numbers[index];
//   }
// }

// console.log(smallestNumber);        ponto 7

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };
