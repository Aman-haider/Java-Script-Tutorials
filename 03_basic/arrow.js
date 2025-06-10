////////////////////////Arrow Function///////////////

const user = {
    username : "amam",
    prices :  999,
     wellcome :function() {
        console.log(`${this.username}, Wellcome To Website`);
        
        // console.log(this);
        
     } 
}
// user.wellcome()
// user.username = "ali"
// user.wellcome()
// console.log(this);

function one(){
    let username ="aman"
    console.log(this.username);
    
}
// one()

const chai = function(){
    username = " aman"
    console.log(this);
    
}
// chai()

const addtwo = () =>{
    let username = " aman"
    console.log(this);

}
// addtwo()
 ///arrow function method one
// const addnum = (num1 , num2)=>{
//     return num1 + num2 

// }

//////////////method two///
// const addnum = (num1 , num2)=>  num1 + num2 

///////////method three///
// const addnum = (num1 , num2)=> ( num1 + num2 )

///////////method four///
const addnum = (num1, num2) => ({username: "aman"})

console.log(addnum()); 


