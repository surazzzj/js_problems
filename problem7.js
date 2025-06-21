
/* -------------------------------------------- First Non-Repeating Character ---------------------------------------------- */

let str = "aabbcdde"

function findFIrstNRChar(str) {
   for(let char of str){
    if(str.indexOf(char) === str.lastIndexOf(char)){
        return char
    }
   }
   return null
}

console.log(findFIrstNRChar(str));
