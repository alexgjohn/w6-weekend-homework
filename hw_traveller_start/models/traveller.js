const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {

  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation
  })

  return startLocations
};


Traveller.prototype.getJourneyEndLocations = function () {

  const endLocations = this.journeys.map((journey) => {
    return journey.endLocation
  })

  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {

  const journeysByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport
  })

  return journeysByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

  const journeysOverMinDistance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  })

  return journeysOverMinDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

  const listOfDistances = this.journeys.map((journey) => {
    return journey.distance
  })

  const totalDistanceTravelled = listOfDistances.reduce((total, distance) => {
    return total += distance
  })

  return totalDistanceTravelled
};

Traveller.prototype.getUniqueModesOfTransport = function () {

  const allTransports = this.journeys.map((journey) => {
    return journey.transport
  })

  const uniqueModesofTransport = allTransports.filter((transport, index, list) => {
    return index === list.indexOf(transport)
  })

  return uniqueModesofTransport

};


module.exports = Traveller;
