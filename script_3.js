let floors = prompt('Welcome to the super pyramid! How many floors do you want?');
let space = " ";
let symbol = "#";

if (floors > 25){
  console.log(`Sorry, the pyramid cannot be higher than 25 floors`);
  }
else {
  for (var i = 0; i <= floors; i++){
    console.log(space.repeat(floors-i) + symbol.repeat(i));
  }
}
