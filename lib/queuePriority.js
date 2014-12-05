'use strict';

var PriorityQueue = require('./priorityQueue.js');
var Patient = require('./newPatient.js');

function queuePriority() {
  // console.log('hello');
  var ed = new PriorityQueue();

  var p = new Patient('Smith',5);
  ed.enqueue(p);

  p = new Patient('Jones', 4);
  ed.enqueue(p);

  p = new Patient('Fehrenbach', 6);
  ed.enqueue(p);

  p = new Patient('Brown', 1);
  ed.enqueue(p);

  p = new Patient('Ingram', 1);
  ed.enqueue(p);

// console.log('hello2');
  // first round
  var seen = ed.dequeue();
  // console.log("Patient being treated: " + seen[0].name);
  // console.log("Patients waiting to be seen: ");
  // console.log(ed.toString());

  // second round
  seen = ed.dequeue();
  // console.log("Patient being treated: " + seen[0].name);
  // console.log("Patients waiting to be seen: ");
  // console.log(ed.toString());

  // third round
  seen = ed.dequeue();
  // console.log("Patient being treated: " + seen[0].name);
  // console.log("Patients waiting to be seen: ");
  // console.log(ed.toString());

  // fourth
  seen = ed.dequeue();
  // console.log("Patient being treated: " + seen[0].name);
  // console.log("Patients waiting to be seen: ");
  // console.log(ed.toString());

  // console.log('Patients waiting ' + ed.dataStore);
};

module.exports = queuePriority;
