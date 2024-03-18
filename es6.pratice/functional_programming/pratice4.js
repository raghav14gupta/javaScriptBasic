/**
 * ! reduce method se solve karna hai
 */

// 1. Given an array, write an ES6 function that returns the total length of all the strings in an array.


 const string1 = ['apple', 'banana', 'cherry', 'date', 'blueberry'];

 const fun1 = (accumulator,currentvalue) => {
    console.log(accumulator,currentvalue)
    return (accumulator + currentvalue.length)
 }
 const ans1 = string1.reduce(fun1,0);//yaha numerical digit se intialize kia accumulator //note - agar string me "" lengthnumbr add karvate to vo"123"aise ate convert hoke as a string me
 console.log(ans1)


//  4. Write an ES6 function that takes an array of strings as input and concatenates them into a single
//  string

const string2 = ["raghav","gupta","is"];
const fun4  = (accumulator,currentvalue) => accumulator + currentvalue;
const ans4 = string2.reduce(fun4);
console.log(ans4)


// 6. Write an ES6 function that takes an array of strings and returns the longest string.

const string6 = ['neogcamp', 'Haule Haule', 'code', 'Batman', 'Awesome'];

 const fun6 = (accumulator,currentvalue) =>accumulator.length>currentvalue.length?accumulator:currentvalue;

 const ans6 = string6.reduce(fun6,"")
 console.log(ans6);


//  10. Write an ES6 function that takes an array of strings and returns an object with the count of each
//  string.

 const fruits = [
 'apple',
 'banana',
 'banana',

 'cherry',
 'apple',
 'apple',
 'banana'
 ]

 const fun10 =(accumulator,currentvalue) =>{
    accumulator[currentvalue] = (accumulator[currentvalue] ?? 0)+1;
    return accumulator
 }
 const ans10 = fruits.reduce(fun10,{});
    console.log(ans10)