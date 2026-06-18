// Сделайте функцию, которая параметром принимает или два числа, или две строки.
// Своим результатом функция должна возвращать сумму параметров.
// function sumGeneric<T extends string | number>(val1: T, val2: T): T {
//   return val1 + val2;
// }
// function sum<T extends string | number>(a: T, b: T): T extends string ? string : number {
//   return (a as any) + (b as any);
// }

function printArray<T>(arr: T[]): void {
  arr.forEach((item) => console.log(item));
}

function getLength1<T>(arr: T[]): number {
  return arr.length;
}
const getLength2 = <T>(arr: T[]): number => arr.length;
interface ILength {
  <T>(arr: T[]): number;
}
let func4G: ILength = getLength1;

function getLength3<T extends number[]>(arr: T): number {
  return arr.length;
}
