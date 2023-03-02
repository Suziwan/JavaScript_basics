function factorial(num) {     
  if (num < 0){
    console.log(`The result is: -1`); 
    return -1; 
  } 
  else if(num == 0){
    console.log(`The result is: 1`);
    return 1; 
  } 
  else { 
    let result = 1; 
    for(var i = num; i > 1; i--){ 
      result *= i; 
    }; 
    console.log(`The result is: ${result}`);
    return result; 
  }
}; 
num = prompt('Which number you want to calculate the factorial of?'); 
factorial(num);
