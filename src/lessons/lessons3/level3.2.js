// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
function printWithEven(start = 10, end = 1000) {
  for (let i = start; i <= end; i++) {
    const prelast = Math.floor(i / 10) % 10;
    if (prelast % 2 === 0) {
      console.log(i);
    }
  }
}

// Дан массив. Удалите из него каждый пятый элемент.
function removeEveryFifthElement(arr) {
  return arr.filter((_, index) => (index + 1) % 5 !== 0);
}

// Дана некоторая переменная с числом:
// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
// '00000'
function makeZeroString(n) {
  return '0'.repeat(n);
}

// Дана некоторая строка со словами:
// const str = 'aaa bbb ccc eee fff';
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
// 'aaa ccc fff'
function removeEverySecondWord(str) {
  const words = str.split(' ');
  const filtered = words.filter((_, index) => index % 2 === 0);
  return filtered.join(' ');
}

// Дан массив:
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// Найдите сумму элементов этого массива.
function sumMatrix(matrix) {
  return matrix.flat().reduce((acc, val) => acc + val, 0);
}
