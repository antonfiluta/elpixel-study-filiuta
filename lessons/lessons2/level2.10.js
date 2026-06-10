// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
export function hasNoMoreThanThreeLetters(str) {
  const lettersCount = [...str].filter((ch) => /[a-zA-Z]/.test(ch)).length;
  return lettersCount <= 3;
}

// Дано число. Получите первую четную цифру с конца этого числа.
export function getFirstEvenFromEnd(num) {
  return (
    [...String(num)].map(Number).findLast((item) => item % 2 === 0) ?? null
  );
}

// Дана некоторая строка: 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'
export function replaceFirstCharWithExclamation(str) {
  return str
    .split(' ')
    .map((word) => '!' + word.slice(1))
    .join(' ');
}

// Дан массив с числами: [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
export function hasConsecutiveDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
}
