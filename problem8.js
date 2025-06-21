/* ------------------------------------------------ Longest Word in a Sentence --------------------------------------------- */

let str = "I am a JavaScript developer"

function findLongestWord(str) {
    let newStr = str.split(' ')
    let bigWord = ''

    for (let word of newStr) {
        if (word.length > bigWord.length) {
            bigWord = word
        }
    }
    return bigWord
}

console.log(findLongestWord(str));
