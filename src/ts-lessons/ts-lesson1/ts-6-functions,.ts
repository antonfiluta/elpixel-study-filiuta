enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getDayOfWeek(day?: number, month?: number, year?: number): string {
  const now = new Date();

  const d = day ?? now.getDate();
  const m = month ?? now.getMonth() + 1;
  const y = year ?? now.getFullYear();

  const date = new Date(y, m - 1, d);

  return Weekday[date.getDay()];
}

const power = (base: number, exponent: number = 2): number => {
  return base ** exponent;
};

const sum = (...numbers: number[]): number => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

const func: (text: string) => void = function (text: string): void {
  alert(text);
};

type Func = (x: number, y: number, z: number) => number;
const sum1: Func = (x, y, z) => x + y + z;

type MyFunc = (num: number, arr: number[]) => number[];
const func1: MyFunc = (num, arr) => arr.map((item) => item + num);

let func2 = (num1: number, num2: number): number => num1 + num2;

let arr: number[] = [1, 2, 3];
let res: number[] = arr.map((num: number) => num ** 2);
console.log(res);
