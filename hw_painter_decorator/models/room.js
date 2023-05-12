const Room = function(areaInSquareMeters, painted = false) {
    this.areaInSquareMeters = areaInSquareMeters
    this.painted = painted
}

Room.prototype.paint = function() {
    this.painted = true
}


module.exports = Room