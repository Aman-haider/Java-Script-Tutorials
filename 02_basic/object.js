//////////////////Object///////////////////

///singleton Object//////////////


////////////////////Literials Object//////


const mysym = Symbol("key1")

const jsUsers = {
   name : "Aman",
   [mysym] : "mykey1",
  "full name" : "aman",
   age : 20 ,
   location : "Rawalpindi",
   email : "amankachogoogle.com",
   isLoggedIn : false,
   lastDayLoggedIn : ["monday", "sunday"],
};

console.log(jsUsers.email);
console.log(jsUsers[mysym]);
console.log(jsUsers["full name"]);

jsUsers.email = "aman1010ghatgpt.com"

console.log(jsUsers);

jsUsers.greeting = function() {

   console.log("hello Js User!");
   
}
jsUsers.greetingTwo = function() {

   console.log(`hello Js User!, ${this.name}` );
   
}
console.log(jsUsers.greetingTwo());


console.log(jsUsers.greeting());




