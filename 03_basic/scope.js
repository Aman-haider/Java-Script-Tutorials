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
    console.log("INNER:" , `${a},${b},${c}`);
    
 }


  console.log(a);
//   console.log(b);
  console.log(c);
  
  
  