import { Hero } from './hero.js';

export class Archer extends Hero {
  private _arrowCount: number;

  constructor(name: string, initialArrows: number = 10) {
    super(name);
    this._arrowCount = initialArrows;
  }

  get arrowCount(): number {
    return this._arrowCount;
  }
  set arrowCount(value: number) {
    if (value < 0) this._arrowCount = 0;
    else this._arrowCount = value;
  }

  public shoot(): void {
    if (this.arrowCount <= 0) {
      console.log(`У ${this.name} стрел нет, нужна перезарядка.`);
      return;
    }
    this.arrowCount--;
    console.log(
      `${this.name} сделал выстрел, осталось стрел: ${this.arrowCount}`
    );
  }

  public restock(amount: number): void {
    this.arrowCount += amount;
    console.log(
      `${this.name} пополнил запас стрел на ${amount}. Теперь стрел: ${this.arrowCount}`
    );
  }
}
