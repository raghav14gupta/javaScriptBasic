//write a function to combine multiple arrays into single

const arr = [[1,2,3,1,2,3],[2,3]];
const arr2 =[1,2];
const arr3 = [3,4]

// const fun = (accumulator,currentValue) => accumulator + currentValue;

 const fun = (accumulator,currentvalue) => accumulator + currentvalue

 const sum = arr2.reduce(fun);
 console.log(sum)