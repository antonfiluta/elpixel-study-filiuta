// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
export function getRandomElement(arr) {
  if (!arr.length) return undefined;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
export function getRandomElements(arr, n) {
  if (!arr.length) return [];
  const result = [];
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
  }
  return result;
}

// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
export function getRandomNoRepeat(arr) {
  if (!arr.length) return undefined;
  let last = undefined;
  return function () {
    let current;
    do {
      const randomIndex = Math.floor(Math.random() * arr.length);
      current = arr[randomIndex];
    } while (current === last);
    last = current;
    return current;
  };
}

// Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
export function getSimple(min, max) {
  const simple = [];
  for (let num = Math.max(2, min); num <= max; num++) {
    let isSimple = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isSimple = false;
        break;
      }
    }
    if (isSimple) simple.push(num);
  }
  return simple;
}

// Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.
export function sumAll(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.
export function randomSpecificArray(n, min, max) {
  if (n <= 0) return [];
  const result = [];
  let last = null;
  for (let i = 0; i < n; i++) {
    let current;
    do {
      current = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (current === last);
    result.push(current);
    last = current;
  }
  return result;
}

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
export function randomArrayUnique(n, min, max) {
  const rangeSize = max - min + 1;
  if (n > rangeSize) n = rangeSize; // иначе невозможно без повторений
  const available = [];
  for (let i = min; i <= max; i++) available.push(i);
  // Перемешиваем (алгоритм Фишера-Йетса)
  for (let i = available.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [available[i], available[j]] = [available[j], available[i]];
  }
  return available.slice(0, n);
}
