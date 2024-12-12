// answer 01
let name = "John";
console.log(`Hello, ${name}!`);

//answer 02
let a, b
a = 5
b = 10
console.log(a+b);

//answer 03
let age = 25
console.log(`My age is ${age} `);

//answer 04
let math, english, physics
math = 70;
english = 65;
physics = 80;
let total = math+english+physics;
console.log(total);

//average 
console.log(total/3);

//answer 05-- camel-case
let userName = "saidahamed";
let userEmail = "saidahamed7246@gmail.com";
console.log(userName);
console.log(userEmail);

//snak case 
let uesr_address = " gaibandha sadar, gaibandha";
let user_phone_number = "0130-7215253";
console.log(uesr_address);
console.log(user_phone_number);

//String Methods answer 01
let massage = "Hello, how are you?";

if(massage.search("Hello") !== -1){
    console.log("this is a currat sentance");
}else{
    console.log("this is a worng sentence");
}


// answer 02

let user_name = prompt("Please enter your name:");
userName = user_name.trim();
let greetingMessage = "Hello, " + user_name;

console.log(greetingMessage);


//answer 03
let girlName = "Sara";
let programingLanguage = "python";
let year = 2018;
console.log(`${girlName} you have been coding in ${programingLanguage} since ${year}`);

 // answer 04
 

 //answer 05
 let whether = 30;

 if (whether % 10 === 0) { console.log(whether + " is divisible by 10.");

  } else { console.log(whether + " is not divisible by 10."); }

  //answer 06
  let number = 7;
  if (number % 2 === 0) { console.log(number + " is even."); }
   else { console.log(number + " is odd."); } 


   //answer 07

   let variable1 = "Hello";
    let variable2 = 123

   if (typeof variable === "string") { console.log("The variable is a string."); } 
   else if (typeof variable === "number") { console.log("The variable is a number."); }
    else { console.log("The variable is neither a string nor a number."); }