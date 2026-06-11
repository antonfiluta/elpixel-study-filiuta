// Дан массив со словами. Получите из этого массива случайное слово, начинающееся на заданную букву.
function getRandomWordStartingWith(words, letter) {
  const filtered = words.filter(
    (word) => word[0].toLowerCase() === letter.toLowerCase()
  );
  if (filtered.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

// Пусть у нас есть дата 22.02.2017. В этой дате 4 двойки. Найдите все даты с 4-мя двойками в текущем столетии.
function findDatesWithFourTwos() {
  const result = [];
  for (let year = 2000; year <= 2099; year++) {
    for (let month = 1; month <= 12; month++) {
      const daysInMonth = new Date(year, month, 0).getDate();
      for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
        const countTwos = (dateStr.match(/2/g) || []).length;
        if (countTwos === 4) {
          result.push(dateStr);
        }
      }
    }
  }
  return result;
}

// Дан массив с точками:
// [
// 	[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]
// ]
// Отрисуйте эти точки на графике.
function drawTextGraph(points) {
  const maxX = Math.max(...points.map((p) => p[0]));
  const maxY = Math.max(...points.map((p) => p[1]));
  const height = maxY + 2;
  const width = maxX + 2;
  const grid = Array(height)
    .fill()
    .map(() => Array(width).fill('.'));

  points.forEach(([x, y]) => {
    grid[height - 1 - y][x] = '*';
  });

  for (let row of grid) {
    console.log(row.join(''));
  }
}

drawTextGraph([
  [1, 2],
  [2, 4],
  [3, 8],
  [4, 16],
  [5, 32],
]);
