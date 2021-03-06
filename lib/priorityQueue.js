'use strict';

function PriorityQueue() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.pop = pop;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function enqueue(element) {
  this.dataStore.push(element);
  this.top++;
}

function dequeue() {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i].code > this.dataStore[entry].code) {
      entry = i;
    }
  }
  return this.dataStore.splice(entry,1);
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length-1];
}

function toString() {
  var retStr = '';
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n';
  }
  return retStr;
}

function empty() {
  if (this.dataStore.length === 0) {
    return true;
   }
  else {
    return false;
  }
}

function pop() {
  return this.dataStore.pop();
}

module.exports = PriorityQueue;
