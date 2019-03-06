// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }


  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb)  //higher order function - giveaway cd or callback  as a parameter //

  // getLength passes the length of the array into the callback.



function last(arr, cb) {  // higher order function 
 return cb(arr);

}
const lastone = function (arr){  //This is the callback function 
  console.log(items.length-1);
}

console.log(last(items, lastone)); // This is the invocation - this is actually calling the function 






// function sumNums(x, y, cb) {
//   return cb(x,y)
// }
// const add = function (x,y) {
//   return x+y;
// }
//  console.log  SumNums(1,1 add));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
