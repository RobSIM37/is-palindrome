function isPalindrome(word, strict, ignore) {

    if (strict === undefined) {
        strict = true;
    }

    if (ignore === undefined) {
        ignore = [];
    }

    let charcters = word.trim().split(''); // trim and split the words into characters. This ensures that you are starting with valid symbols and makes it easier to loop
    let startingIndex = -1; // start before the beginning of the word
    let endingIndex = charcters.length; // start after the end of the word
    let valid = true; // assume that the word is a palindrome until the first counter example is found

    while (valid && startingIndex < endingIndex) { // while it is still valid and there is a gap between the two indicies, loop. If they are equal, it is the same letter and will be valid

        do {
            startingIndex++; // incriment the index
        } while (ignore.includes(charcters[startingIndex]) && !strict) // keep incrimenting the index until you hit a character that isn't a space (if not in strict mode)

        do {
            endingIndex--; // do the same for the other index, but subract rather than add
        } while (ignore.includes(charcters[endingIndex]) && !strict)
        
        let testLetter1 = charcters[startingIndex]; // assign the first letter to be compared
        let testLetter2 = charcters[endingIndex]; // assign the other letter to be compared

        if (!strict) {
            testLetter1 = testLetter1.toUpperCase(); // if you are not in strict mode, turn both letters to capitals so you can ignore case
            testLetter2 = testLetter2.toUpperCase();
        }

        valid = (testLetter1 === testLetter2); //compare the letters at each position

    }

    return valid; // return the validity of the palindromic word

} 

// simple function to make it easier to log the results
function logWord(word, strict, ignore) {

    let notInsertion = '';
    let strictInsertion = '';
    let ignoreInsertion = '';

    if (!isPalindrome(word, strict, ignore)) {

        notInsertion = ' not';

    }

    if (strict != undefined){
        if (!strict) {

            strictInsertion = ' when the strict rules of capitalization are ignored'
    
        }
    }

    if (ignore != undefined) {
        if (ignore.length != 0) {

            ignoreInsertion = ` and these: ${ignore.join(' ')} are ignored`
    
        }
    }
    
    console.log(`'${word}' is${notInsertion} palindromic${strictInsertion}${ignoreInsertion}.`);

}

logWord('goose');
logWord('Racecar');
logWord('Racecar', false);

logWord('Are we not drawn onward, we few, drawn onward to new era', false, [' ']);
logWord('Ed, I saw Harpo Marx ram Oprah W. aside.', false, [',', '.', ' '])