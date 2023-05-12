const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
    const wordAsArray = this.word.split('')

    const wordWithoutDuplicates = wordAsArray.filter((letter, index, list) => {
        return index === list.indexOf(letter)
    })

    const isogram = wordWithoutDuplicates.length === wordAsArray.length

    return isogram
}

module.exports = IsogramFinder;
