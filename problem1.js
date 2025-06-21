/* ----------------------------------- Reverse a String ------------------------------------------ */

let input = "suraj"
let revString = ""

for (let i = input.length - 1; i >= 0; i--) {
    revString = revString + input[i]; // or
    revString += input[i]

}

console.log(revString);


/*_________ Using Array Method _________ */
let newString = input.split('').reverse().join('')
console.log(newString);

/*_________ Using Spread Operator ________*/
let new2String = [...input].reverse().join('')
console.log(new2String);




