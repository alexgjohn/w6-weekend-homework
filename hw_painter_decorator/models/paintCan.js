const PaintCan = function(volumeInLitres) {
    this.volumeInLitres = volumeInLitres
}


PaintCan.prototype.checkIfEmpty = function () {
    return this.volumeInLitres === 0
}

PaintCan.prototype.empty = function () {
    this.volumeInLitres = 0
}


module.exports = PaintCan