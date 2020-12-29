const os = require('os');
const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Jacek', 'Marek', 'Mateusz', 'Michał'];
const femaleNames = ['Natalia', 'Kamila', 'Martyna', 'Wiesia'];
const lastNames = ['Abakanowicz', 'Abramczyk', 'Cękalski', 'Gajda', 'Cichowski', 'Ciechanowski', 'Damboń', 'Dancewicz'];

const people = [];

const randChoice = (arr) => {
  let item = arr[Math.floor(Math.random() * arr.length)];
  return item;
};

const PreparingObject = () => {
  for (let i = 0; i <= 19; i++) {
    let something = [
      {
        gender: randChoice(genders),
        maleNames: randChoice(maleNames),
        femaleNames: randChoice(femaleNames),
        lastNames: randChoice(lastNames),
        age: Math.floor(Math.random() * 100),
      },
    ];
    people.push(something);
  }
};

PreparingObject();
const data = JSON.stringify(people);
console.log(people);

fs.writeFile('outputfile.txt', data, (err) => {
  if (err) throw err;
  console.log('This file has been saved!');
});
