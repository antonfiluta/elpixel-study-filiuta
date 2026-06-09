// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

const overLast = (s) => {
  if (typeof s !== 'string' || s.length < 2)
    throw new Error('Не строка или короткая');
  return s.at(-2);
};

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

const isDivisible = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number')
    throw new Error('Не число');
  if (n2 === 0) throw new Error('Деление на ноль невозможно');
  return n1 % n2 === 0;
};
