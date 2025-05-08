//concatenation means adding two string value with each other and we can write in many ways

// first one is 
const name = "Ravidotcom"
const addName =  22

              //first method to print two string together
//console.log(name + addName +'value'); 
              //this is truely  a method but not a proper way to print string values

              //correct way to print
console.log(`my name is  ${name}  and my age is ${addName}`);
console.log(name [2]);
console.log(name.length)

const gameName = new String ("Javascriptutorial")

              //suppose here we have to use the keys assign for strinng 
console.log(gameName [1]);
console.log(gameName.__proto__) // showing that it is a object and used to convert it into many other function like uppercase,etc.

console.log(`lenght of gameName is ${gameName.length}`);
console.log(`change the gameName to UPPERCASE : ${gameName.toUpperCase()}`);

//BASICALLY WE USE charAt AT THAT PLACE WHERE WE HAVE TO FIND THE ASSIGN KEY VALUE OF STRING 
/*
console.log(`in javascriptutorial assigning value at 0 place is ${gameName.charAt(0)}`) // this shoow thatassign the key value to string 
console.log(`in javascriptutorial assigning value at 1 place is ${gameName.charAt(1)}`)
console.log(`in javascriptutorial assigning value at 2 place is ${gameName.charAt(2)}`)
console.log(`in javascriptutorial assigning value at 3 place is ${gameName.charAt(3)}`)
console.log(`in javascriptutorial assigning value at 4 place is ${gameName.charAt(4)}`)
console.log(`in javascriptutorial assigning value at 5 place is ${gameName.charAt(5)}`)
console.log(`in javascriptutorial assigning value at 6 place is ${gameName.charAt(6)}`)
console.log(`in javascriptutorial assigning value at 7 place is ${gameName.charAt(7)}`)
console.log(`in javascriptutorial assigning value at 8 place is ${gameName.charAt(8)}`)
console.log(`in javascriptutorial assigning value at 9 place is ${gameName.charAt(9)}`)
console.log(`in javascriptutorial assigning value at 10 place is ${gameName.charAt(10)}`)
console.log(`in javascriptutorial assigning value at 11 place is ${gameName.charAt(11)}`)
console.log(`in javascriptutorial assigning value at 12 place is ${gameName.charAt(12)}`)
console.log(`in javascriptutorial assigning value at 13 place is ${gameName.charAt(13)}`)
console.log(`in javascriptutorial assigning value at 14 place is ${gameName.charAt(14)}`)
console.log(`in javascriptutorial assigning value at 15 place is ${gameName.charAt(15)}`)
console.log(`in javascriptutorial assigning value at 16 place is ${gameName.charAt(16)}`)
console.log(`in javascriptutorial assigning value at 17 place is ${gameName.charAt(17)}`)
*/

//BASICALLY WE USE indexOf AT THAT PLACE WHERE WE HAVE TO FIND THE KEY VALUE BY ENTERING THE STRING VALUE
console.log(`Value of 'p' in javascriptutorial  is ${gameName.indexOf('p')}`);

// using substring for slice and substring from o to desired key value 
 
const newValueToSubString =  gameName.substring(0 , 9)
console.log(newValueToSubString);

const newValueToSlice = gameName.slice(-8 , 8)  // slice basically use negative value to give ooutput  
console.log(newValueToSlice);

// USe of TRIM
 const newStringToTrim = "       gczhjgdss       " //as we se trhere are many spaces back and front of it 
 console.log(newStringToTrim);
 console.log(newStringToTrim.trim());
 
 
// USE OF REPLACE
 const url = "https/:www.google.com/%2introduction"
console.log(url.replace('%2','my')); //this basically used for replacing something already typed in by customizing 

console.log(url.includes('com')); // this check that "com " is present in this url or not 



// use of split to maake array 
const newValuesToArray = 'asdfg-wert-zxcvb-xcv'
console.log(`New Arrays Are ${newValuesToArray.split('-')}`);



