// Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
export function filterWords(str) {
  return str.split(' ').sort().join(' ');
}

// Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
export function commonElements(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

// Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
export function getRandomizer() {
  let memo = null;

  return function randomizer() {
    const randomNum = Math.random();
    if (memo === randomNum) {
      return randomizer();
    } else {
      memo = randomNum;
      return randomNum;
    }
  };
}

// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
// let arr = [1, 2, 3, 4, 5];

// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1
export function nextElement(arr, current) {
  const index = arr.indexOf(current);
  if (index === -1) return undefined;
  return arr[(index + 1) % arr.length];
}
