/*
Write a function argumentsLength that returns the count of arguments passed to it.
 

Example 1:

Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
*/

//solution 1

var argumentsLength = function(...args) {
    var length = 0
    for (var i in args ){
        length += 1
    }
    return length
	
};

console.log(argumentsLength(1, 6, 3, 5))

// solution 2 ~~simple
var argumentsLength = function(...args) {
    return args.length
	
};
