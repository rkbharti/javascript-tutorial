// JAVASCRIPT IS DYNAMICALLY CODE LANGUAGE BECAUSE IT VARIES THE VARIABLE AT THE 
// EXECUTION TIME NOT AT THE COMPILATION TIME AND ACCORDING TO THIS VALUES STORED 
// IN THIS MAKE THE DATATYPES AS NUMBER ,STRING, NULL,ETC

/* DATAYPES ARE OF TWO TYPES  */
//PRIMITIVE TYPE - 7 TYPES ARE (String, Number,Boolean,null,undefined,Symbool,bigInt)
    const score = 100
    console.log('100 is a '+ (typeof score));
    
    const scoreValue = 100.3
    console.log("100.3 is a "  + (typeof scoreValue));

    const isLoggedIn = false
    console.log('false is a ' +  (typeof isLoggedIn));
    

    const outsideTemp = null
    console.log('null is a ' +  (typeof outsideTemp));
    
    let userEmail; // thiss can be written as like this and (`userEmail = undefined)
    console.log('userEmail is a ' +  (typeof userEmail));
    
    //using symbol for making unique number as id 

    const id = Symbol('123')
    const anotherId = Symbol('123')
    //here we will check that th tajen both var varies same number or same id 
     console.log(id === anotherId);

     const bigNumber = 78451248459741224n // affter weriting this big number we have to we use 'n'  for making this bigInt
     console.log('bigNumber is a ' + (typeof bigNumber));
     
     
// NON-PRIMITIVE -  3 TYPES ARE (Array,Objects(this are the main topic in js),Functions)

 /***********************************Array**********/

 //  storing data in array 
  const heroes = ["shaktiman" , "ironman" , "Hulk"]
  console.log('name of heroes are ' + (heroes));
  
// storing data in object and objects are those which start from curly braces'{'
// and ending with '}' and under this data can be anything like 
// number , string , etc
  
  let myObj = {
    name : "Ravi" ,
    age : 22,
  }
  console.log(myObj);
  myObj.city = "Patna"
  console.log(myObj);
  
  

// for function
 function greet(){   //  this is first method to reprsent function 
     console.log("Hello World");
    }
  greet();

 const myFunction = function(){
    console.log("hello world by making function as treating as variable  ");
    }
   myFunction();     