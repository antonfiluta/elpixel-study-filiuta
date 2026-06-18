interface IMath {
  num1: number;
  num2: number;
  getSum(): number;
}

const calc: IMath = {
  num1: 10,
  num2: 5,
  getSum(): number {
    return this.num1 + this.num2;
  },
};

interface IUser {
  name: string;
  age: number;
  readonly salary: number;
  checkAge(): string;
}

const user: IUser = {
  name: 'John',
  salary: 333,
  age: 17,
  checkAge(): string {
    if (this.age < 18) {
      return 'Доступ запрещен';
    } else {
      return 'Доступ разрешен';
    }
  },
};

interface IDate {
  year?: number;
  month?: number;
  day?: number;
}

interface IConcat {
  (str1: string, str2: string): string;
}

interface IDivisors {
  (num: number): number[];
}

interface IWords {
  (str: string): string[];
}

interface INumberArray {
  [index: number]: number;
}

interface IObj {
  [index: number]: string;
}

interface IMath2 {
  num1: number;
  num2: number;
  getDiv(): number;
}

class Math2 implements IMath2 {
  num1: number;
  num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  getDiv(): number {
    if (this.num2 === 0) {
      throw new Error('Деление на ноль невозможно');
    }
    return this.num1 / this.num2;
  }
}

interface IUser2 {
  name: string;
  birthday: string; // или Date
}

interface IProgrammer2 extends IUser2 {
  salary: number;
  language: string;
}

class Employee2 implements IProgrammer2 {
  name: string;
  birthday: string;
  salary: number;
  language: string;

  constructor(
    name: string,
    birthday: string,
    salary: number,
    language: string
  ) {
    this.name = name;
    this.birthday = birthday;
    this.salary = salary;
    this.language = language;
  }
}
