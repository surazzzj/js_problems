/* ------------------------------------------------------ Remove Duplicates ------------------------------------------------------ */

let str = "aabbccdd"

function removeDuplicates(str) {
    let newStr = ""
    for (let char of str) {
        if (!newStr.includes(char)) {
            newStr += char
        }
    }
    console.log(newStr)
}

removeDuplicates(str)