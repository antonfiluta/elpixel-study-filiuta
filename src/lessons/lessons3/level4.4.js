// Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
export function getDivisorsAmount(number) {
  let divisors = 0;

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisors++;
      if (i !== number / i) divisors++;
    }
  }
  return divisors;
}

// Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
export function getZodiac(dateStr) {
  const date = new Date(dateStr);

  const month = date.getMonth() + 1;
  const day = date.getDay();

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return 'Водолей';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Рыбы';
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Овен';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Телец';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21))
    return 'Близнецы';
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'Рак';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Лев';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Дева';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'Весы';
  if ((month === 10 && day >= 24) || (month === 11 && day <= 21))
    return 'Скорпион';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return 'Стрелец';
  return 'Козерог';
}

// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
export function getDivisors(number) {
  let divisors = [];

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) divisors.push(i);
  }

  return divisors;
}

// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
export function isSimple(number) {
  let divisors = 0;

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) divisors++;
  }

  return divisors < 3;
}

// Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
export function deleteEven(number) {
  return Number(
    [...String(number)].filter((item) => Number(item) % 2 !== 0).join('')
  );
}

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
export function randomArray(n, min, max) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(random);
  }
  return arr;
}
