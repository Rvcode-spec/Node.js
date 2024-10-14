/*

given an array, the task is to cyclically rotate the array clockwise by one time.
Examples:
Input: arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}
Input: arr[] = {2, 3, 4, 5, 1}
Output: {1, 2, 3, 4, 5}

*/

function rotateNo(arr) {
    if (arr.length === 0) return arr;    
    let lastElement = arr.pop(); 
    arr.unshift(lastElement); 
    return arr;
}

let arr1 = [1, 2, 3, 4, 5];
console.log(rotateNo(arr1)); 

let arr2 = [2, 3, 4, 5, 1];
console.log(rotateNo(arr2)); 

