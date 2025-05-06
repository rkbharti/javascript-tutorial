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

/* let someNumber = 100

console.log(someNumber);
console.log(typeof someNumber);

//conversion number to string

let someNumberToString =  String(someNumber)

console.log(someNumberToString);
console.log(typeof someNumberToString);
*/

 //*******************************OPERATIONS************************** */
   
 // positive to negative
  /* let value = 3
 let negValueNew = -value
 console.log(negValueNew);
 */

 /*   INCREMENT AND DECREMENT FOR POSTFIX AND PREFIX */
/*
let sampleNumber = "23"; 
const digitNumbber = Number(sampleNumber) // change from string to number
console.log(typeof digitNumbber);
const postfix1 = sampleNumber++;
console.log('*****************************postfix for Increment and Decremnt*******************************');

console.log('postfix for this number in increment');
console.log(`sampleNumber:${sampleNumber}, postfix1:${postfix1}`);
console.log(sampleNumber)
const postfix = sampleNumber--; //24 aftre updation
console.log('postfix for this number in decrement ');
console.log(`sampleNumber:${sampleNumber}, postfix:${postfix}`);
console.log(sampleNumber);





let sampleNumberforprefix = 50;

const prefix2 = ++sampleNumberforprefix
console.log('*************************PREFIX for increment and decrement***************************************');

console.log('prefix2 for this number is increment');
console.log(`sampleNumberforprefix:${sampleNumberforprefix}, prefix2:${prefix2}`)
console.log(sampleNumberforprefix) //51 after updation 

console.log('prefix ffor this number is decrement');
const prefix = --sampleNumberforprefix
console.log(`sampleNumberforprefix:${sampleNumberforprefix}, prefix:${prefix}`)
console.log(sampleNumberforprefix);

*/
console.log(1+ 2+"3");
