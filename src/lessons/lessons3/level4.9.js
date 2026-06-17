// Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
function daysUntilNextFeb29() {
  const today = new Date();
  let year = today.getFullYear();

  let feb29 = new Date(year, 1, 29);
  if (feb29.getMonth() !== 1 || feb29.getDate() !== 29) {
    year++;
  } else if (feb29 < today) {
    year++;
  }

  while (true) {
    const candidate = new Date(year, 1, 29);
    if (candidate.getMonth() === 1 && candidate.getDate() === 29) {
      const diffMs = candidate - today;
      const daysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      return daysRemaining;
    }
    year++;
  }
}

// Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.
function getMaslenitsaDate(year = new Date().getFullYear()) {
  const lastDayFeb = new Date(year, 2, 0);
  let day = lastDayFeb.getDate();
  while (true) {
    const candidate = new Date(year, 1, day);
    if (candidate.getDay() === 0) {
      return candidate;
    }
    day--;
  }
}

// Сделайте функцию, которая будет возвращать случайный цвет.
function getRandomColor(format = 'hex') {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  if (format === 'rgb') {
    return `rgb(${r}, ${g}, ${b})`;
  }

  const toHex = (n) => n.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.
function commonDivisors(arr) {
  if (arr.length === 0) return [];
  const gcd = (a, b) => {
    if (b === 0) return Math.abs(a);
    return gcd(b, a % b);
  };
  let commonGcd = arr.reduce((acc, val) => gcd(acc, val), arr[0]);
  if (commonGcd === 0) return [];

  const result = [];
  for (let i = 1; i <= Math.sqrt(commonGcd); i++) {
    if (commonGcd % i === 0) {
      result.push(i);
      if (i !== commonGcd / i) result.push(commonGcd / i);
    }
  }
  return result.sort();
}

// Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
function maxInEachSubarray(matrix) {
  return matrix.map((subarr) => Math.max(...subarr));
}
