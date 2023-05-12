const assert = require('assert')
const PaintCan = require('../models/paintCan')


describe('PaintCan', function () {

    let paintCan1

    beforeEach(function() {
        paintCan1 = new PaintCan(5)

    })

    it('should have a number of litres of paint', function(){
        const actual = paintCan1.volumeInLitres
        assert.strictEqual(actual, 5)
    })

    it('should be able to check if it is empty - false', function(){
        const actual = paintCan1.checkIfEmpty()
        assert.strictEqual(actual, false)
    })

    it('should be able to check if it is empty - true', function(){
        paintCan1.volumeInLitres = 0
        const actual = paintCan1.checkIfEmpty()
        assert.strictEqual(actual, true)
    })

    it('should be able to empty itself of paint', function() {
        paintCan1.empty()
        const actual = paintCan1.checkIfEmpty()
        assert.strictEqual(actual, true)
    })
})