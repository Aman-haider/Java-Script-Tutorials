///////scope //////////////
// let a = 30 ;
//     const b = 40;
//     var c = 45; var is not support in scope function
 let a = 300
//  var c = 390  var is not support in scope function
 
 if (true) {
   let a = 30 ;
    const b = 40;
    var c = 45;
    // console.log("INNER:" , `${a},${b},${c}`);
    
 }


//   console.log(a);
// //   console.log(b);
//   console.log(c);

  function one(){
    const username = "aman"
    function two(){
      // console.log(username);
     const  website = "tiktok"
      
    }
    // console.log(website);
    
    two()
  }
  one()

  if (true) {
    const username = "hayder"

    if (username === "hayder") {
      const website = "    youtube"


      // console.log(username + website);
  
    }
//  console.log(website);
// console.log(username);

  
  }
  // console.log(username);

  /////++++++++++++++++Interesting++++++++++++++++++++

  console.log( addOne(7));
  
  function addOne(num){
    return num + 1
  }
 
  // console.log(addTwo(8));
  /////// when function storein  variable and we  call the variable before initialization cannot acccess the variable/////
  
  const addTwo = function(num){
    return num +2
  }
  console.log(addTwo(9));
  
  
  
  
  