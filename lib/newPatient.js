'use strict';

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

Patient.prototype.toString = function() {
  return '{Patient: ' + this.name + ', ' + this.code + '}';
};

module.exports = Patient;
