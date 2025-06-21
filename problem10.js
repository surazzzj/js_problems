
/* ------------------------------------------ Count Occurrences of a Character ------------------------------------------- */

let str = "hello", char = 'l'

function findCountOcc(str, char) {
    let count = ''

    for (let val of str) {
        if (val === char) {
            count++
        }
    }
    return count;
}

console.log(findCountOcc(str, char));
