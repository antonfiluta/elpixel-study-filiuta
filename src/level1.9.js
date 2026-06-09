// 1. Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
const httpStrings = (array) => array.filter((str) => str.startsWith('http://'));

// 2.Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
const htmlStrings = (array) => array.filter((str) => str.endsWith('.html'));

// 3. Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
const increased = (array) => array.map((num) => num * 1.1);
