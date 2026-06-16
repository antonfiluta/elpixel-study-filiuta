import { Hero } from './hero.js';

export class Warrior extends Hero {
  public armor: number;

  constructor(name: string, armor: number = 10) {
    super(name);
    this.armor = armor;
  }

  public override takeDamage(amount: number): void {
    const reduced = Math.max(0, amount - this.armor);
    const absorbed = amount - reduced;
    if (absorbed > 0) {
      console.log(`Броня героя ${this.name} поглотила ${absorbed} урона!`);
    }
    console.log(`${this.name} получил ${reduced} чистого урона.`);
    super.takeDamage(reduced);
  }
}
