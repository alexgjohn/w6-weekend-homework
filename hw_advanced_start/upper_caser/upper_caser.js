const UpperCaser = function (words) {
    this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
    const wordsInUpper = this.words.map((word) => {
        return word.toUpperCase()
    })
    return wordsInUpper
}

// Traveller.prototype.calculateTotalDistanceTravelled = function () {

//     const listOfDistances = this.journeys.map((journey) => {
//       return journey.distance
//     })
  

module.exports = UpperCaser;

const upper = new UpperCaser(['hello'])

console.log(upper.toUpperCase())


