
/* -------------------------------------------- Check for Isogram (No repeating characters) ------------------------------------- */

let str = "machine"

function isIsogram(str) {
    let newStr = str.toLowerCase()

    let charSet = new Set()  // it does not contain repitive characters

    for (let char of newStr) {
        if (charSet.has(char)) {
            return false
        }
        charSet.add(char)
    }

    return true
}

console.log(isIsogram(str));

