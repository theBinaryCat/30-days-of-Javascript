/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.
*/

//Solution 1

var map = function(arr, fn) {
    let arr2 = []
    for(let step=0; step <arr.length;step++){
        arr2[step]=fn(arr[step],step)
    }
    return arr2
    
};

// Solution 2
var map = function(arr, fn) {
    return arr.map(fn)
};


// Solutions 3

var map = function(arr, fn) {
    const arr2 = []
    arr.forEach((element, index)=>{
        arr2[i] = fn(element, index) 
    })
}

// Solution 4

var map = function(arr, fn) {
    return arr.reduce((arr2, element, index)=>{
        arr2[index]=fn(element, index)
        return arr2
    },[])
 };
