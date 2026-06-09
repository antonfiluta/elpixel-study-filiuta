// №1
// Дана строка: 'abcde'
// Получите массив букв этой строки.
const str = 'abcde';
const lettersArray = str.split('');
console.log(lettersArray);

// №2
// Дано некоторое число: 12345
// Получите массив цифр этого числа.
const num = 12345;
const digitsArray = String(num).split('').map(Number);
console.log(digitsArray);

// №3
// Дано некоторое число: 12345
// Переверните его: 54321
const reversedNum = Number(String(num).split('').reverse().join(''));
console.log(reversedNum);

// №4
// Дано некоторое число: 12345
// Найдите сумму цифр этого числа.
const sumOfDigits = String(num)
  .split('')
  .reduce((sum, digit) => sum + Number(digit), 0);
console.log(sumOfDigits);
