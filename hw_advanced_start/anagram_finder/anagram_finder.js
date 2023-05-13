const AnagramFinder = function (word) {
    this.word = word

}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

    const anagrams = []
    
    const formatWord = function (word) {
        const wordAsArray = word.split('')
        const wordAsArrayLowerCase = wordAsArray.map((letter) => {
            return letter.toLowerCase()
        })
        const arraySortedAlphabetically = wordAsArrayLowerCase.sort()

        return arraySortedAlphabetically
    }


    const attributeWord = formatWord(this.word)

    for (const testWord of otherWords) {

        if (testWord !== this.word) {

            const wordToCompare = formatWord(testWord)

            const wordIsCorrectLength = wordToCompare.length === attributeWord.length

            const wordHasCorrectLetters = wordToCompare.every((letter) => {
                const index = wordToCompare.indexOf(letter)
                return attributeWord[index] === letter
            })


            if (wordIsCorrectLength && wordHasCorrectLetters) {
                anagrams.push(testWord)
            }
        }
    }

    return anagrams

}



const anagramFinder = new AnagramFinder('potato')

console.log(anagramFinder.findAnagrams(['tomato', 'blue', 'optato']))

module.exports = AnagramFinder;