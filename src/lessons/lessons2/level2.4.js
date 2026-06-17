// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
export function indexOfFirstNum(str) {
  return [...str].findIndex((value) =>
    Number.isInteger(+value) ? true : false
  );
}
// console.log(indexOfFirstNum('qwe0rt3sdf34f1'));

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
export function getKeysAndValues(obj) {
  return [Object.keys(obj), Object.values(obj)];
}

// console.log(
//   getKeysAndValues({
//     key1: 'value',
//     key2: 'value2',
//   })
// );

// Дано число. Выведите в консоль количество четных цифр в этом числе.
export function getEvenAmount(number) {
  return [...`${number}`].filter((value) => value % 2 === 0).length;
}
// console.log(getEvenAmount(222456));

// Дана некоторая строка:
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'
export function oddToUpper(str) {
  return [...str]
    .map((item, index) => (index % 2 === 1 ? item : item.toUpperCase()))
    .join('');
}
// console.log(oddToUpper('abcde'));

// Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'
export function firstToUpper(str) {
  return str
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
}
console.log(firstToUpper('aaa bbb ccc'));
