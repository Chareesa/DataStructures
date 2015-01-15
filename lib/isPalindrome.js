'use strict';

var deque = require('./deque.js');

var isPalindrome = function(word) {
  var test1 = new deque();
  var test2 = new deque();
  var word2 = '';
  var isPalindrome = false;
  for (var i = 0; i < word.length; i++) {
    test1.enqueue(word[i]);
  }

  for (var k = 0; k < word.length; k++) {
    word2 += test1.pop();
  }

  if (word === word2) {
    isPalindrome = true;
  }
  return isPalindrome;
};

isPalindrome('moom');

module.exports = isPalindrome;
