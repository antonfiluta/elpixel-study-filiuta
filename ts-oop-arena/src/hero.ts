import { ICharacter } from './ICharacter';

export abstract class Hero implements ICharacter {
  private _name: string;
  private _health: number;
  public level: number;

  constructor(name: string) {
    this._name = name;
    this._health = 100;
    this.level = 1;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    const trimmed = value.trim();

    if (!trimmed) {
      throw new Error('Имя не может быть пустым');
    }
    if ([...trimmed].filter((char) => Number(char)).length) {
      throw new Error('Имя не может содержать цифры');
    }

    this._name = trimmed;
  }

  get health(): number {
    return this._health;
  }

  set health(value: number) {
    if (value < 0) value = 0;
    else if (value > 100) value = 100;
    this._health = value;
  }

  public takeDamage(amount: number) {
    this.health -= amount;
    if (this.health <= 0) {
      console.log(`${this.name} погиб и отправляется в таверну отдыхать.`);
    } else {
      console.log(
        `${this.name} получил ${amount} урона. Текущее здоровье: ${this.health}`
      );
    }
  }
  public heal(amount: number) {
    const oldHealth = this.health;
    this.health += amount;
    const healed = this.health - oldHealth;
    if (this.health === 100) {
      console.log(`Здоровье полностью восстановлено (можно рашить).`);
    } else {
      console.log(
        `${this.name} исцелился на ${healed}. Текущее здоровье: ${this.health}`
      );
    }
  }
  public levelUp() {
    this.level++;
    this.health = 100;
    console.log(
      `${this.name} поднялся до ${this.level} уровня! Здоровье полностью восстановлено.`
    );
  }
}
