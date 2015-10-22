var React = require('react');
var Engine = require('../engine');
var Exercise = require('./Exercise');

var App = React.createClass({

  getInitialState : function() {
    return {
      workout : {
        minutes: 10,
        roundsCount: 0,
        exercises: []
      }
    };
  },

  generateWorkout : function() {
    var workout = Engine.generateWorkout();
    this.setState({
      workout : workout
    });
  },

  renderWorkout : function() {
    var exercises = this.state.workout.exercises.map(function(exercise){
      return <Exercise key={exercise.id} exercise={exercise} />;
    });

    return (
      <div>
        {this.state.workout.roundsCount > 0 ? <p>{this.state.workout.roundsCount} rounds of: </p> : null}
        {exercises.length > 0 ? exercises : null}
      </div>);
  },

  render : function() {
    return (
      <div>
        <button onClick={this.generateWorkout}>Generate</button>
        <div className="workout">
          {this.renderWorkout()}
        </div>
      </div>
    );
  }
});

module.exports = App;
