"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var username = 'Ngoc Duc';
var age = 20;
console.log({ username: username, age: age });
var buildName = function (name, age) {
    return name + " " + age;
};
console.log(buildName(username, age));
