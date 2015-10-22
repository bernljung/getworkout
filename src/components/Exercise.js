/*jslint node: true, browser: true*/
'use strict';

var React = require('react');

var Exercise = React.createClass({
  getInitialState : function() {
    return {
      name: "",
      count: 0,
      countString: "0"
    };
  },

  render : function() {
    var exercise = this.props.exercise;

    return (
      <li><span>{exercise.countString}</span>   <span>{exercise.name}</span></li>
    );
  }
});

module.exports = Exercise;
