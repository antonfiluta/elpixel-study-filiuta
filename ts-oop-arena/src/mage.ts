import { Hero } from './hero.js';

export class Mage extends Hero {
  private _mana: number;
  public readonly maxMana: number;

  constructor(name: string, maxMana: number = 100) {
    super(name);
    this.maxMana = maxMana;
    this._mana = maxMana;
  }

  get mana(): number {
    return this._mana;
  }
  set mana(value: number) {
    if (value > this.maxMana) this._mana = this.maxMana;
    else if (value < 0) this._mana = 0;
    else this._mana = value;
  }

  public castSpell(cost: number, spellName: string): void {
    if (this.mana < cost) {
      console.log(
        `Недостаточно маны для заклинания "${spellName}". Текущая мана: ${this.mana}, требуется: ${cost}`
      );
      return;
    }
    this.mana -= cost;
    console.log(
      `${this.name} произносит заклинание "${spellName}"! Осталось маны: ${this.mana}`
    );
  }

  public override levelUp(): void {
    super.levelUp();
    this.mana = this.maxMana;
    console.log(`${this.name} восстановил ману до максимума!`);
  }
}
