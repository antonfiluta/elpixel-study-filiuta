// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
function removeNumbersWithMoreThanThreeDigits(arr) {
  return arr.filter((num) => Math.abs(num).toString().length <= 3);
}

// Дано число, например, вот такое:
// let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.
function allDigitsGreaterThanZero(num) {
  return String(num)
    .split('')
    .every((digit) => digit !== '0');
}

// Дан некоторый массив, например, вот такой:
// [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
function flattenDigits(arr) {
  return arr.flatMap((num) => String(num).split('').map(Number));
}

// Дан следующая структура:
// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// Найдите сумму элементов этой структуры.
function sumOfObjectsValues(data) {
  return data
    .flatMap((obj) => Object.values(obj))
    .reduce((acc, val) => acc + val, 0);
}
