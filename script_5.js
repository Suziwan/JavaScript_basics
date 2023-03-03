let books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Question 1
console.log("------- Has every book been borrowed ?")

let answer = true;
for (var i = 0; i < books.length; i++) {
  if (books[i].rented == 0) {
    answer = false;
    break;
  }
}

console.log(answer)

// Question 2
console.log("------- Which book is the most borrowed ?")

books.sort((a, b) => a.rented - b.rented);

console.log(books[books.length-1])

// Question 3
console.log("------- Which one is the less borrowed ?")

console.log(books[0])

// Question 4
console.log("------- Find book with ID: 873495")

function first_idCheck(book) {
  return book.id == 873495;
}

console.log(books.find(first_idCheck))

// Question 5
console.log("------- Delete book with ID: 133712")

function second_idCheck(book) {
  return book.id == 133712;
}

console.log(books.find(second_idCheck))
let index = books.findIndex(second_idCheck);
delete books[index];
console.log(books);

// Question 6
console.log("------- Sort books by alphabetic order (without ID 133712)")

console.log(books.sort((a, b) => a.title.localeCompare(b.title)))