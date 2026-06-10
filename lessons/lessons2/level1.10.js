// Заполните массив случайными числами из промежутка от 1 до 100.
export function fillWithRandom(start = 1, end = 100) {
  return Array.from({ length: end - start + 1 }, () =>
    Math.round(start + Math.random() * (end - start))
  );
}

// Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца.
export function reverseNumber(number) {
  return String(number).split('').reverse();
}
// console.log(...reverseNumber(123345));

// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]
export function splitArray(array) {
  const splitedArray = Array.from(
    { length: Math.ceil(array.length / 2) },
    () => []
  );

  for (let i = 0; i < array.length; i++) {
    const m = Math.floor(i / 2);
    const k = i % 2;
    splitedArray[m][k] = array[i];
  }

  return splitedArray;
}
// console.log(...splitArray([1, 2, 3, 4, 5, 6]));

// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]
export function concatArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
// console.log(concatArrays([1, 2, 3], [4, 5, 6]));
