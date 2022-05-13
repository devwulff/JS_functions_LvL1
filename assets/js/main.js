"use strict";

// LvL1_1
const intro = () => console.log("Hello World");
intro();

const hallo = () => console.log("Hallo");
hallo();

let summe = (x, y) => console.log(x + y);
summe(2, 3);

let multiply = (x, y) => alert(x * y);
multiply(2, 3);

// LvL1_2
let i = true;
let j = "hi";
let k = 1;
let l = { name: "John" };
let a = [0, 1];
let type = (x) => console.log(typeof x);
type(i); // boolean
type(j); // string
type(k); // number
type(l); // object
type(a); // object

// LvL1_4
const hero = (heroName, heroPower, heroEnemy) => {
  let name = `Mein Lieblingsheld aus Marvel ist: ${heroName}`;
  let power = `Er/Sie hat die Fähigkeit: ${heroPower}`;
  let enemy = `Sein/Ihr größter Gegner ist: ${heroEnemy}`;
  console.log(`${name} 
  ${power}
  ${enemy}`);
};

hero("Superman", "fliegen", "not Superman");

// LvL 1_6
let x = 1;

const returnOne = () => {
  return 1;
};
let y = returnOne();
if (x === y) {
  console.log("Wird das gedruckt?");
}

// LvL1_7

let doubleIt = (x) => {
  let sum = x * 2;
  return sum;
};

console.log(doubleIt(12));

// LvL 1_8
const age = (yearBorn) => {
  let years = 2022 - yearBorn;
  return years;
};

console.log(age(1987));

// LvL 1_8 Pt.2
const difference = (age1, age2) => {
  let ageDiff = age1 - age2;
  return ageDiff;
};

console.log(difference(49, 36));

// LvL 1.9

let vorstellung = (vorname, nachname, geburtsort, alter, wohnort) => {
  console.log(`Mein Name ist ${vorname} ${nachname}.
  Ich bin in ${geburtsort}.
  Ich lerne coden bei Supercode.
  Ich bin ${alter} Jahre alt.
  Ich wohne in ${wohnort}`);
};

vorstellung("Pascal", "Wulff", "Moers", 34, "Moers");
