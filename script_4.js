const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Question 1
console.log("------- Filter entrepreneurs born in the 70s:")

function born70s(array) {
  return array.year > 1969 && array.year < 1980
}

console.log(entrepreneurs.filter(born70s))

// Question 2
console.log("------- Give an array containing the first and last name:")

let names = [];
for (var i = 0; i <= entrepreneurs.length-1; i++) {
  names.push(entrepreneurs[i].first + " " + entrepreneurs[i].last)
};

console.log(names)

// Question 3
console.log("------- Current age of each entrepreneur:")

const date = new Date();
let current_year = date.getFullYear();

for (var i = 0; i <= entrepreneurs.length-1; i++) {
  console.log(`${names[i]} is/would be ${current_year - entrepreneurs[i].year} years old`)
}

// Question 4
console.log("------- Sort them in alphabetic order of their last name:")

console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)))
