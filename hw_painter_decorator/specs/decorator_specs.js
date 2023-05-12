const assert = require('assert')
const Decorator = require('../models/decorator')
const PaintCan = require('../models/paintCan')
const Room = require('../models/room')


describe('Decorator', function() {

    let paintCan1
    let paintCan2
    let paintCan3
    let paints
    let decorator1
    let room1
    
    beforeEach(function() {
        paintCan1 = new PaintCan(5)
        paintCan2 = new PaintCan(10)
        paintCan3 = new PaintCan(15)
        paints = [paintCan1, paintCan2, paintCan3]
        decorator1 = new Decorator()
        room1 = new Room(20)
        room2 = new Room(50)

    })

    it('should start with an empty paint stock', function() {
        const actual = decorator1.paintStock
        assert.deepStrictEqual(actual, [])
    })

    it('should be able to add a can of paint to stock', function() {
        decorator1.addPaintCanToStock(paintCan1)
        const actual = decorator1.paintStock
        assert.deepStrictEqual(actual, [paintCan1])
    })

    it('should be able to calculate total litres paint it has in stock', function() {
        decorator1.paintStock = paints
        const actual = decorator1.calculateTotalLitresOfPaint()
        assert.strictEqual(actual, 30)
    })

    it('should be able to calculate whether is has enough paint to paint a room - true', function() {
        decorator1.paintStock = paints
        const actual = decorator1.confirmSufficientPaintForRoom(room1)
        assert.strictEqual(actual, true)
    })

    it('should be able to calculate whether is has enough paint to paint a room - false', function() {
        decorator1.paintStock = paints
        const actual = decorator1.confirmSufficientPaintForRoom(room2)
        assert.strictEqual(actual, false)
    })

    it('should be able to paint room if has enough paint in stock - has enough', function() {
        decorator1.paintStock = paints
        decorator1.paintRoom(room1)
        const actual = room1.painted
        assert.strictEqual(actual, true)
    })

    it('should be able to paint room if has enough paint in stock - does not have enough', function() {
        decorator1.paintStock = paints
        decorator1.paintRoom(room2)
        const actual = room1.painted
        assert.strictEqual(actual, false)
    })

    it('should be able to remove empty paint cans from stock', function() {
        decorator1.paintStock = paints
        paintCan1.empty()
        decorator1.removeEmptyCans()
        const actual = decorator1.paintStock
        assert.deepStrictEqual(actual, [paintCan2, paintCan3])
    })

    it('should be able to decrease amount of paint in stock when painting a room', function() {
        decorator1.paintStock = paints
        decorator1.paintRoom(room1)
        const actual1 = decorator1.calculateTotalLitresOfPaint()
        const actual2 = decorator1.paintStock
        assert.strictEqual(actual1, 10)
        assert.deepStrictEqual(actual2, [paintCan3])
    })
})