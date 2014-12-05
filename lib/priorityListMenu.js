'use strict';

var PriorityQueue = require('./priorityQueue.js');
var Patient = require('./newPatient.js');

var EDMenu = function() {
  this.q = new PriorityQueue();
};

EDMenu.prototype.enterED = function(name, code) {
  var p = new Patient(name, code);
  this.q.enqueue(p);
};

EDMenu.prototype.seenByDoc = function() {
  this.q.dequeue();
};

EDMenu.prototype.patientsWaiting = function() {
  return ('Patients waiting to be seen:' + this.q.dataStore);
};

module.exports = EDMenu;
