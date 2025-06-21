/* ---------------------------------------- Count Vowels & Consonants ---------------------------------------------*/

let vowels = 'aeiouAEIOU';

function countVowelsAndConsonants(str) {
    let vowelCount = 0, consonantCount = 0;

    for (let x of str) {
        if (vowels.includes(x)) {  // Check if the character is a vowel
            vowelCount++;
        } else if (x >= 'a' && x <= 'z' || x >= 'A' && x <= 'Z') {  // Check if it's a letter (not punctuation/space)
            consonantCount++;
        }
    }

    console.log("Vowels:", vowelCount);
    console.log("Consonants:", consonantCount);
}

countVowelsAndConsonants(vowels);  // Pass a string to test