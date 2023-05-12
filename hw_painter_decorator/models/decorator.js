const Decorator = function(paintStock = []) {
    this.paintStock = paintStock
}

Decorator.prototype.addPaintCanToStock = function (paintCan) {
    this.paintStock.push(paintCan)
}



Decorator.prototype.calculateTotalLitresOfPaint = function () {
    return this.paintStock.reduce((total, paintCan) => {
        return total += paintCan.volumeInLitres
    }, 0)
}

Decorator.prototype.confirmSufficientPaintForRoom = function (room) {
    const totalLitresOfPaint = this.calculateTotalLitresOfPaint()
    return totalLitresOfPaint >= room.areaInSquareMeters
}


Decorator.prototype.paintRoom = function (room) {
    const sufficientPaintForRoom = this.confirmSufficientPaintForRoom(room)
    if (sufficientPaintForRoom) {
        room.painted = true
    }
}

module.exports = Decorator