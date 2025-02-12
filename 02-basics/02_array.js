const marvel_hero = ['thor', 'Ironman', 'spiderman']
const dc_hero = ['batman', 'superman']

marvel_hero.push('captain america')
// console.log(marvel_hero);

// marvel_hero.push(dc_hero) // push method to add an array to another array
// console.log(marvel_hero);

// const hero = marvel_hero.concat(dc_hero) // concat method to merge two arrays 
// console.log(hero);

// const all_hero = [...marvel_hero, ...dc_hero] // spread method to merge two arrays
// console.log(all_hero);

const food = ['pizza', 'burger', ['wings', 'fries', 'coke'], ['sushi', 'ramen', ['sake', 'soju']]];

let foodFinal = food.flat(Infinity); // flat method to flatten the array
console.log(foodFinal);

