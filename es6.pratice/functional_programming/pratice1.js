// 1. Write an ES6 function that takes an array of numbers and returns an array with each number
//incremented by 3 using the map method

const arr1 = [1,2,3,4,5,6];

const fun1 = value=> value +3;

const ans1 = arr1.map(fun1);
console.log(ans1)//[ 4, 5, 6, 7, 8, 9 ]

//2. Write an ES6 function that takes an array of strings and returns an array with all the strings
// capitalised using the map method.

const arr2 = ["raghav","raghu","hello"]; // array of strings 

const fun2 = value => value.toUpperCase();

const ans2 = arr2.map(fun2);
console.log(ans2)

// 3.Write an ES6 function that takes an array of objects representing people and returns an array of
// their ages using the map method

const arr3 = [{name: 'Ankit', age: 25 },{ name: 'Vinit', age: 24 },{ name: 'Shashi', age: 29}];

const fun3 = value =>value.age; //function value me ek object receive hoga us se age extract krli

const ans3 = arr3.map(fun3); // map function jo array ke index pe object hai unko function me bejega 
console.log(ans3)

// 5. Write an ES6 function that takes an array of objects representing cities and returns an array of
// their names using the map method

const arr5 = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 },
    ]

    const fun5 = value => value.name;
   
    const ans5 = arr5.map(fun5);
    console.log(ans5)


    //  6. Write an ES6 function that takes an array of strings and returns an array with only the strings
//  that have a length greater than 5

const arr6 =['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];

const fun6 = value =>value.length > 5 ;//condition > true /false me return hoti hai jo value true hongi vhi sirf array me jaengi with filter method

const ans6 = arr6.filter(fun6);
console.log(ans6)  //[ 'banana', 'cherry', 'watermelon', 'pineapple' ]

// 7. Write an ES6 function that takes an array of numbers and returns an array with only the
//  numbers that are divisible by 3 and also by 5

const arr7 = [1, 2, 30, 4, 15];

const fun7 = value =>(value % 3 ===0) &&(value % 5 ===0);  //ye AND operator bhi compare krke true/false me ans dega

const ans7 = arr7.filter(fun7);
console.log(ans7)//[ 30, 15 ]

// 8. Write an ES6 function that takes an array of objects with the properties name and age, and
// returns an array with only the objects that have an age greater than 30

const arr8 = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 },
    ]

    const fun8 = value  => value.age>30
       

    const ans8 = arr8.filter(fun8);
    console.log(ans8)

    // 10. Write an ES6 function that takes an array of objects with the properties name, age and city, and
    // returns an array with only the objects that have a city property of "Indore" and age greater than
    // 70. const people = [
 
    const arr10 =[{ name: 'Ridhima', age: 75, city: 'Indore' },
 { name: 'Akshay', age: 60, city: 'Delhi' },
 { name: 'Udit', age: 80, city: 'Indore' },
 { name: 'Venki', age: 80, city: 'Bangalore' },
 ]

 const fun10 = num => (num.age>70)&&(num.city === "Indore") ;

 const ans10 = arr10.filter(fun10)
 console.log(ans10) //[ { name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]
   
   
  

   
 
//  12. Write an ES6 function that takes an array of objects containing employee information (name,
//     age, salary) and returns an array with only the employees who earn a salary above 22000 and
//     age is above 25

const arr12 = [
    { name: 'Abhay', age: 25, salary: 20000 },
    { name: 'Joice', age: 30, salary: 35000 },
    { name: 'Reena', age: 35, salary: 15000 },
   
    { name: 'Jeena', age: 40, salary: 50000 }
]

const fun12 = value =>((value.age> 25)&&(value.salary>22000));

const ans12 = arr12.filter(fun12);
console.log(ans12) // Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary:50000