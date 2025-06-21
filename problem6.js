/* -------------------------------------------------------- Anagram Check ------------------------------------------------------------- */

let str1 = "listen"
let str2 = "silent"

function checkAnagram(str1, str2) {

    let newStr1 = str1.split('').sort().join('')
    let newStr2 = str2.split('').sort().join('')

    console.log(newStr1 === newStr2);
}

checkAnagram(str1, str2)