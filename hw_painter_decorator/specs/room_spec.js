const assert = require('assert')
const Room = require('../models/room')


describe('Room', function () {

    let room1

    beforeEach(function() {
        room1 = new Room(30)
    })

    it('should have an area in square meters', function() {
        const actual = room1.areaInSquareMeters
        assert.strictEqual(actual, 30)
    })

    it('should start not painted', function() {
        const actual = room1.painted
        assert.strictEqual(actual, false)
    })

    it('should be able to be painted', function() {
        room1.paint()
        const actual = room1.painted
        assert.strictEqual(actual, true)
    })
})