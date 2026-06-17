import { Mage } from './src/mage.js';
import { Warrior } from './src/warrior.js';
import { Archer } from './src/archer.js';

const mage = new Mage('Гендальф', 50);
const warrior = new Warrior('Арагорн', 15);
const archer = new Archer('Леголас', 5);

console.log('=== Тестирование Мага ===');
mage.levelUp();
mage.castSpell(20, 'Огненный шар');
mage.castSpell(40, 'Ледяная стрела');
mage.heal(30);
mage.takeDamage(50);

console.log('\n=== Тестирование Воина ===');
warrior.takeDamage(30);
warrior.takeDamage(20);
warrior.heal(10);
warrior.levelUp();

console.log('\n=== Тестирование Лучника ===');
archer.shoot();
archer.shoot();
archer.shoot();
archer.shoot();
archer.shoot();
archer.restock(10);
archer.shoot();

console.log('\n=== Проверка смерти ===');
warrior.takeDamage(100);
