function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
const range1to100 = range(1, 100);

// 1. Найдите сумму всех целых чисел от 1 до 100.
const sumOfItems = range1to100.reduce((sum, item) => sum + item, 0);

// 2. Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
const sumOfEven = range1to100.reduce(
  (sum, item) => sum + (item % 2 === 0 ? item : 0),
  0
);

// 3. Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
const sumOfOdd = range1to100.reduce(
  (sum, item) => sum + (item % 2 !== 0 ? item : 0),
  0
);

// 4. Даны два целых числа. Найдите остаток от деления первого числа на второе.
const getRemainder = (n1, n2) => n1 % n2;

// 5. Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
const printReversedChars = (str) => {
  if (typeof str !== 'string') throw new Error('Не строка');
  [...str].reverse().forEach((item) => console.log(item));
};
