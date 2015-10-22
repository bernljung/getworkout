/*jslint node: true, browser: true*/
'use strict';

var db = {
  exercises: [{
    id: 1,
    name: "Burpees",
    countString: "",
    averageSeconds: {
      notFit: 6,
      average: 4,
      fit: 3
    }
  }, {
    id: 2,
    name: "Situps",
    countString: "",
    averageSeconds: {
      notFit: 4,
      average: 2,
      fit: 1.5
    }
  }, {
    id: 3,
    name: "Run",
    countString: "m",
    averageSeconds: {
      notFit: 0.2,
      average: 0.15,
      fit: 0.10
    }
  }, {
    id: 4,
    name: "Run",
    countString: "m",
    averageSeconds: {
      notFit: 0.3,
      average: 0.2,
      fit: 0.15
    }
  }, {
    id: 5,
    name: "Run",
    countString: "m",
    averageSeconds: {
      notFit: 0.32,
      average: 0.21,
      fit: 0.16
    }
  }, {
    id: 6,
    name: "Run",
    countString: "m",
    averageSeconds: {
      notFit: 0.35,
      average: 0.22,
      fit: 0.17
    }
  }, {
    id: 7,
    name: "Pushups",
    countString: "",
    averageSeconds: {
      notFit: 5,
      average: 3,
      fit: 2
    }
  }]
};

var generateWorkout = function () {
  return {
    minutes: 15,
    roundsCount: 4,
    exercises: [{
      id: 1,
      name: "Burpees",
      count: 25,
      countString: "25"
    }, {
      id: 2,
      name: "Situps",
      count: 50,
      countString: "50",
    }, {
      id: 3,
      name: "Run",
      count: 400,
      countString: "400m"
    }]
  };
};

module.exports = {
  generateWorkout: generateWorkout
};
