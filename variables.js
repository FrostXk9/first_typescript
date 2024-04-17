"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var duplicates = [1, 2, 3, 4, 5, 5, 55, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 9, 10];
// funtion expects you to return an array of numbers
function duplcatesArr(arr) {
    var deleteduplicates = [];
    for (var i = 0; i <= arr.length; i++) {
        if (deleteduplicates.indexOf(arr[i]) === -1) {
            deleteduplicates.push(arr[i]);
        }
    }
    return deleteduplicates;
}
console.log(duplcatesArr(duplicates));
