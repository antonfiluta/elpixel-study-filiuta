// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

const isNegative = (n) => {
  if (typeof n !== 'number') throw new Error('Не число');
  return n < 0;
};

// Дана строка. Выведите в консоль длину этой строки.

const strLength = (s) => {
  if (typeof s !== 'string') throw new Error('Не строка');
  return s.length;
};

// Дана строка. Выведите в консоль последний символ строки.

const lastSymbol = (s) => {
  if (typeof s !== 'string' || s.length === 0)
    throw new Error('Не строка или пустая');
  return s.at(-1);
};

// Дано число. Проверьте, четное оно или нет.

const isEven = (n) => {
  if (typeof n !== 'number') throw new Error('Не число');
  return n % 2 === 0;
};

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

const isFirstLatterEqual = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string')
    throw new Error('Обе переменные должны быть строками');
  return str1[0] === str2[0];
};
