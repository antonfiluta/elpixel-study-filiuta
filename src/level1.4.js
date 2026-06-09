const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

// 1. Выведите в консоль все целые числа от 1 до 100.
const printNumbers1to100 = () => range(1, 100).forEach((n) => console.log(n));

// 2. Выведите в консоль все целые числа от -100 до 0.
const printNumbersMinus100to0 = () =>
  range(-100, 0).forEach((n) => console.log(n));

// 3. Выведите в консоль все целые числа от 100 до 1.
const printNumbers100to1 = () =>
  range(1, 100)
    .reverse()
    .forEach((n) => console.log(n));

// 4. Выведите в консоль все четные числа из промежутка от 1 до 100.
const printEvenNumbers1to100 = () =>
  range(1, 100)
    .filter((n) => n % 2 === 0)
    .forEach((n) => console.log(n));

// 5. Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
const printMultiplesOfThree = () =>
  range(1, 100)
    .filter((n) => n % 3 === 0)
    .forEach((n) => console.log(n));
