export interface ICharacter {
  name: string;
  health: number;
  level: number;
  takeDamage: (amount: number) => void;
  heal: (amount: number) => void;
  levelUp: () => void;
}
