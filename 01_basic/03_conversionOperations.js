/* let score = "ravi"
console.log(typeof score)  // two ways of finding type of any variable first
//console.log(typeof (score)) //two ways of finding type of any variable second

//now we have to converse the score type to number type 
let valueInNumber = Number(score)

console.log(valueInNumber); // this will  show the conversion value
console.log(typeof valueInNumber) //this will show the type of after conversion state 

// first eg = "33" => 33
// second eg = "33abc" => NaN(Not a Number)
// third eg = true => 1 , false => 0
  this is conversion from a string data to number type
*/

// second is any number datatypess intoboolean 
/*let isLoggedin = ""

console.log(isLoggedin);
console.log(typeof isLoggedin);
 
//conversion start
let booleanIsLoggedIn =  Boolean(isLoggedin)

console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn);

// 1=> true ;  0=> false
// "" => false
// "ravi" => true
*/

//third conversion is number type to String 

let someNumber = 100

console.log(someNumber);
console.log(typeof someNumber);

//conversion number to string

let someNumberToString =  String(someNumber)

console.log(someNumberToString);
console.log(typeof someNumberToString);
