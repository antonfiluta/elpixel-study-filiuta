// Дана некоторая строка:
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
// 'A BC DEF ghij'
export function shortWordsToUpper(str) {
  return str
    .split(' ')
    .map((word) => (word.length <= 3 ? word.toUpperCase() : word))
    .join(' ');
}

// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
export function getCharCase(char) {
  if (char >= 'A' && char <= 'Z') return 'upper';
  if (char >= 'a' && char <= 'z') return 'lower';
  return 'not a letter';
}

// Дано некоторое число, например, такое:
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
// 28
export function removeOddDigits(num) {
  const evenDigits = String(num)
    .split('')
    .filter((digit) => parseInt(digit) % 2 === 0)
    .join('');
  return evenDigits ? Number(evenDigits) : 0;
}
