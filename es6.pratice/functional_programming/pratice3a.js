// 13. Write an ES6 function that takes an array of objects representing products with properties name,
//  price, and quantity, and returns the total cost of all the products using the reduce function.


 const arr13 = [
 { name: 'Shirt', price: 20, quantity: 2 },
 { name: 'Pants', price: 30, quantity: 1 },
 { name: 'Shoes', price: 50, quantity: 1 },
 { name: 'Hat', price: 10, quantity: 3 },
 ]

 const fun13 = (accumulator,{price,quantity})  =>{
   console.log(accumulator,{price,quantity})
    return accumulator + price*quantity;
 }

 const ans13 = arr13.reduce(fun13,0);
 console.log(ans13)


//  14. Write an ES6 function that takes an array of strings and returns a single string that is the
//  concatenation of all the strings using the reduce function.

 const str = ['Hello', ' ', 'world', '!']

 const funstr =(accumulator,currentvalue) => {
   return accumulator + currentvalue;
 }

 const strans = str.reduce(funstr,"");
 console.log(strans)


//  15. Write an ES6 function that takes an array of numbers and returns the minimum number using
//  the reduce function.

 const arr15 = [10, 5, 8, 3, 6];

 const fun15 = (accumulator,currentvalue) =>{
   console.log(accumulator,currentvalue)
   return accumulator>currentvalue?currentvalue:accumulator;
 }

 const ans15 = arr15.reduce(fun15);
 console.log(ans15)//3