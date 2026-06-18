class Employee {}

const employee1 = new Employee();
const employee2 = new Employee();

class Student {
  private name: string | null = null;
  private age: number | null = null;
  public static specialty: string = 'math';

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age: number) {
    this.age = age;
  }
}

class Danser extends Student {
  public style: string = 'brake';
}

class User {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

class User1 {
  protected _name: string;
  protected _surn: string;
  public readonly age = 4;

  constructor(name: string, surn: string) {
    this._name = name;
    this._surn = surn;
  }
}

class Employee1 extends User1 {
  protected _salary: number;

  constructor(name: string, surn: string, salary: number) {
    super(name, surn);
    this._salary = salary;
  }

  get name(): string {
    return this._name;
  }

  get surn(): string {
    return this._surn;
  }

  get salary(): number {
    return this._salary;
  }
}

class Calc {
  public static getSum(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
  }

  public static getSumSquares(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val ** 2, 0);
  }

  public static getSumCubes(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val ** 3, 0);
  }
}

abstract class Figure {
  abstract getPerimeter(): number;
  abstract getArea(): number;
}

class Square extends Figure {
  private side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  getPerimeter(): number {
    return 4 * this.side;
  }

  getArea(): number {
    return this.side * this.side;
  }
}

class Rectangle extends Figure {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

  getArea(): number {
    return this.width * this.height;
  }
}
