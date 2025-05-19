// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: 2 '));

//creating a multiplication table
for(let i = 2; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}