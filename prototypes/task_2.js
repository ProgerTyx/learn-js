// Create an object with the same constructor

class Hero {
  hp = 100;

  hit() {
    console.log('hit');
  }

  jump() {
    console.log('jump')
  }
}

const heroObject = {
  hp: 250,
}

const hero = new Hero();
const hero1 = new hero.constructor();
const hero2 = new heroObject.constructor()

console.log(hero1)
console.log(hero2)