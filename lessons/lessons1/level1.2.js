// Дано число. Выведите в консоль первую цифру этого числа.

const firstNumber = (n) => {
  if (typeof n !== 'number') throw new Error('Не число');
  return +Math.abs(n).toString().at(0);
};

// Дано число. Выведите в консоль последнюю цифру этого числа.

const lastNumber = (n) => {
  if (typeof n !== 'number') throw new Error('Не число');
  return +n.toString().at(-1); //если числа целые то удобнее n % 10
};

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

const sumOfFirstAndLast = (n) => {
  if (typeof n !== 'number') throw new Error('Не число');
  return +firstNumber(n) + +lastNumber(n);
};

// Дано число. Выведите количество цифр в этом числе.

const countDigits = (n) => {
  if (typeof n !== 'number') throw new Error('Не число');
  return Math.abs(n).toString().replace('.', '').length;
};

// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

const isFirstDigitEqual = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number')
    throw new Error('Не число');
  return Math.abs(n1).toString()[0] === Math.abs(n2).toString()[0];
};
