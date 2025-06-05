/////////////Function And Parameters/////////////////////////


function myName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
    
}
// myName()

// function addNumber(num1 , num2){

//    console.log(num1 + num2);


// }
function addNumber(num1 , num2){

   let result =num1 + num2
   return result


}
  const result = addNumber(12,4)
  console.log("result: ", result );

  function logginmsg(username = "aman"){
    if(!username){
        console.log("please enter your username" );
        return 
        
    }

  return`${username} just logged in`

  }
//  console.log( logginmsg());

   function cartprices( valu1,value2 ,...num1){
    return num1

   }
    //  console.log(cartprices(100 ,1001,200 , 5000));


    const newObject = {
        username :"aman",
        prices : 1999,

    }

    function newcart (anyObject){

        console.log(`"Username is "${anyObject.username} "And Prices" ${anyObject.prices}`);
        

    }
    // newcart(newObject)

    newcart({
         username :"aman",
        prices : 1999,
    })

    const myArray = [101 , 100 , 1002 , 400,]

    function handleArray(anyArray){
        console.log(`${anyArray[3]} , ${anyArray[2]}`);
        

    }
     handleArray(myArray)

     console.log(handleArray([200,900 ,222,]));
     

        

    

     
     
 
  

  