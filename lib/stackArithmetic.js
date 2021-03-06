'use strict';

var Stack = require('./stack.js');

var arithmetic = function(math) {
  var operators = new Stack();
  var operands = new Stack();
  var postfix = '';

  for (var i = 0; i < math.length; i++) {
    if (isNaN(math[i]) && math[i] !== ' ') {
      operators.push(math[i]);
    }
    else if (!isNaN(math[i]) && math[i] !== ' ') {
      operands.push(math[i]);
    }
  }

  while (operands.top > 0) {
    postfix += operands.pop();
  }
  while (operators.top > 0) {
    postfix += operators.pop();
  }

  return postfix;
};

module.exports = arithmetic;
