"use strict";

var name = "João";
var age = function age(year) {
  return new Date().getFullYear() - year;
};
console.log("DEBUG: name = " + name + ", age " + age(1965));