/*

Write a JavaScript function that takes a string as input and converts all the
lowercase letters to uppercase without using any 
inbuilt string methods such as toUpperCase() or toLowerCase(). 
You can assume the input will contain only alphabetical characters.
Example:
Input: "hello"
Output: "HELLO"
Hint:
You can use ASCII values to determine the difference between lowercase and uppercase letters. In the ASCII table:
Lowercase letters ('a' to 'z') range from 97 to 122.
Uppercase letters ('A' to 'Z') range from 65 to 90.
You can use this information to convert each lowercase letter to its corresponding uppercase counterpart.

*/


function UptoLoAlp(str) {
    let Ans = "";

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i); 
        if (charCode >= 97 && charCode <= 122) {
            Ans += String.fromCharCode(charCode - 32);
        } else {
            Ans += str[i];
        }
    }

    return Ans;
}

let input1 = "hello";
console.log(UptoLoAlp(input1));

