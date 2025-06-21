/* ------------------------------------ Check for Pallindrome -----------------------------------*/

let str = "suraj";
let revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i]
}

if (revStr === str) {
    console.log('Yes, string is pallindrome');
} else {
    console.log('No, string is not pallindrome');
}


/* ________________ Using Method ________________ */

let str1 = "suraj";
let revStr1 = str.split('').reverse().join('');
if (revStr1 === str1) {
    console.log('Yes, string is pallindrome');
} else {
    console.log('No, string is not pallindrome');
}
