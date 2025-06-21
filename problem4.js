/* ------------------------------------------------- Convert String to Title Case ----------------------------------------------- */

let str = "hello world"
let newStr = ""

function transformStr(str) {
    newStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    console.log(newStr);
}

transformStr(str)