
const  foodpanda = new Object()

foodpanda.id = "123abc"
foodpanda.email = "some@gmail.com"

console.log(foodpanda);

const netFlim = {
    email : "anb123@gmail.com",

    fullName : {
               userFullName :{
                firstName : "aman",
                lastName : "Kacho"
               }
    }
}

console.log(netFlim.fullName.userFullName.firstName);

const obj1 = { 1 :"a", 2 : "b", 3 :"c"};

const obj2 = { 4 :"a", 5 : "b", 6 :"c"};


const obj3 = {...obj1,...obj2}


 console.log(obj3);

 const users = [
    {
        id : 123,
        email : " andgmail.com",
    },

    {
        id : 123,
        email : " andgmail.com",
    },

    {
       
        id : 123,
        email : " andgmail.com"
    }
 ]
 
 console.log(users[1].email);

 console.log(foodpanda);
 console.log(Object.keys(foodpanda));
 console.log(Object.values(foodpanda));
 console.log(Object.entries(foodpanda));
 console.log(foodpanda.hasOwnProperty('fullName'));
 
 console.log(foodpanda.toLocaleString());

 console.log(Object.getPrototypeOf([]));

 const course = {
             courseInstructor : "Asad Rao",
            courseName : "Js In Urdu",
            coursePrices : 999,
            courseStart : "1st June",
            courseEnd : "july",

 };

 const {courseName : name} = course
//  console.log(courseName);
 console.log(name);
 
 

 console.log(course.courseInstructor);

 ////JSON are give in object and array ??????????
 
//  {
//    " name" : "aman",
//    " rollNo ": "13",

//  }
 
//  [
//     {},
//     {},
//     {},
//  ]
 
 
 
 
 
 

    