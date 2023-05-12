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


Decorator.prototype.removeEmptyCans = function () {

    const cansToKeep = this.paintStock.filter((paintCan) => {
        return paintCan.volumeInLitres > 0
    }) 

    this.paintStock = cansToKeep
}

Decorator.prototype.paintRoom = function (room) {
    const sufficientPaintForRoom = this.confirmSufficientPaintForRoom(room)
    if (sufficientPaintForRoom) {
        let paintStillNeededForRoom = room.areaInSquareMeters

        for (let paintCan of this.paintStock) {

            this.removeEmptyCans()
            // if (paintCan.volumeInLitres <= 0) {
            //     this.removeEmptyCans()
            //     continue
            // }

            if (paintStillNeededForRoom <= paintCan.volumeInLitres) {
                paintCan.volumeInLitres -= paintStillNeededForRoom
                paintStillNeededForRoom = 0
                break
            }
            else {
                paintStillNeededForRoom -= paintCan.volumeInLitres
                paintCan.volumeInLitres = 0
            }

            this.removeEmptyCans()
            
            
        room.painted = true
            
            
        }
        
        
        
        
    }
}


// Decorator.prototype.paintRoom = function (room) {
//     const sufficientPaintForRoom = this.confirmSufficientPaintForRoom(room);
  
//     if (sufficientPaintForRoom) {
//       let paintStillNeededForRoom = room.areaInSquareMeters;
  
//       for (let i = 0; i < this.paintStock.length; i++) {
//         const paintCan = this.paintStock[i];
  
//         if (paintCan.volumeInLitres <= 0) {
//           this.paintStock.splice(i, 1);
//           i--;
//           continue;
//         }
  
//         if (paintStillNeededForRoom <= paintCan.volumeInLitres) {
//           paintCan.volumeInLitres -= paintStillNeededForRoom;
//           paintStillNeededForRoom = 0;
//           break;
//         } else {
//           paintStillNeededForRoom -= paintCan.volumeInLitres;
//           paintCan.volumeInLitres = 0;
//         }
//       }
  
//       this.removeEmptyCans();
  
//       if (paintStillNeededForRoom === 0) {
//         room.isPainted = true;
//       }
//     }
//   };
  

module.exports = Decorator