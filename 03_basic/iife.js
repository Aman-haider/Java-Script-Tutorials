/////Immediately Invoked Function Expressions (IIFE)/////

function chai (){
    console.log(`BD CONNECTED`);
    
} 
//  chai()  ;

 //////IIFE Method

( function chai (){
    console.log(`BD CONNECTED`);
    
} ) ();

(  (name)=>{
    console.log(`BD CONNECTED TWO ${name} `);
    
} ) ("Hayder")
