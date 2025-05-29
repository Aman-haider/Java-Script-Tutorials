///////////////Array 2/////////////////

const warbalHeroes = [ "thor", "ironman", "spiderman", "avenger"]

const pakHeroes = [ "imran khan", "ali muhammad", "murad sayed", "ali amin"]

console.log(warbalHeroes.push(pakHeroes));

console.log(warbalHeroes);

 const allHeros = warbalHeroes.concat(pakHeroes);

console.log(allHeros);

const realAllHeroes = [...warbalHeroes, ...pakHeroes]


console.log(realAllHeroes);

const anotherarr = [ 1,3,4,[5,6,7,],[8,9,10,[11,13,14,14]]]

console.log(anotherarr.flat(Infinity));


console.log(Array.isArray(["aman"]));

console.log(Array.from("aman"));

console.log(Array.from( {name : "aman"}));

let score1 = 100;

let score2 = 200;

let score3 = 300;

console.log(Array.of(score1,score2,score3));











