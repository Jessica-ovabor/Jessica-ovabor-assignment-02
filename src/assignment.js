// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================



function sumOfNumbers(arrayOfNumbers) {
let sum = 0;

arrayOfNumbers.forEach(total =>{
  sum+=total
})

return sum
  
}


assignment.sumOfNumbers = sumOfNumbers;



function countEvenNumbers(arrayOfNumbers) {
   // return arrayOfNumbers.length;
   
  let countedEvenArray;
  countedEvenArray = arrayOfNumbers.filter(num => num % 2 == 0)
  return   countedEvenArray.length
} 

assignment.countEvenNumbers = countEvenNumbers;


function celsiusToFahrenheit(arrayOfNumbers) {
  let convertedArray = [];
 for( let num of arrayOfNumbers){
  num =   (num * 9/5) + 32

   convertedArray.push(Math.trunc(num))

 }
  arrayOfNumbers = convertedArray
 

return arrayOfNumbers
}

 assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

