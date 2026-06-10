// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
export function isFirstLetterSame(str) {
  const words = str.split(' ');
  return words[0].at(-1).toLowerCase() === words[1][0].toLowerCase();
}

// Дана некоторая строка. Найдите позицию третьего нуля в строке.
export function findThirdZero(str) {
  //   if ([...str].filter((item) => item === '0').length < 3) return -1;

  //   return `a${str}`
  //     .split('0')
  //     .reduce((sum, item, index) => sum + (index < 4 ? item.length : 0), 1);

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') ++count;
    if (count === 3) return i;
  }
  return -1;
}
// console.log(findThirdZero('123045067089'));

// Даны числа, разделенные запятыми:
// '12,34,56'
// Найдите сумму этих чисел.
export function findSum(str) {
  return str
    .split(',')
    .map(Number)
    .reduce((sum, item) => sum + item, 0);
}

// Дана дата в следующем формате:
// '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
export function transformData(data) {
  const parts = data.split('-');

  return {
    year: parts[0],
    month: parts[1],
    day: parts[2],
  };
}
