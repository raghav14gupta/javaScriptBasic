//  1. Write an ES6 function that takes an array of objects representing cars with properties make,
//  model, and year. Return the first car object that is a Toyota and the year is after 2010

const arr1 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const fun1 = (value) => value.make === "Toyota" && value.year == 2010;

const ans1 = arr1.find(fun1); //humne yaha find use kia bcz sbse first value return krni thi jo sbse phele condition meet kare
//find value return krta hai jo receive hoti hai bcz humko value return karvani thi //filter use krte to vo array ke ander value daalke deta ..ye humko chaiyey ni tha
console.log(ans1);

// 2. Write an ES6 function that takes an array of objects containing car information (make, model,
//     year) and returns an array with only the cars that were made after the year 2012

const arr2 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const fun2 = (value) => value.year > 2012;

const ans2 = arr2.filter(fun2); // yaha humne filter lagaya bcz object me ek se jyada bhi car ho sakti h jo 2010 ke baad ki h  ..aur sbko array ke form me return karvana tha iiliye filter lia
console.log(ans2);

//         6. Write an ES6 function that takes an array of objects representing books with properties title,
//  author and pageCount. Return the first book object that has more than 500 pages.

const arr6 = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pageCount: 1178,
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pageCount: 662,
  },
];

const fun6 = (value) => value.pageCount > 500;
const ans6 = arr6.find(fun6); //yaha find use kia bcz first book return ktni thi pure object m jiske page 500 se jyada they //humko direct value return krni thi //not array ke ander value //isliye baaki method use ni kiye
console.log(ans6);

//  10. Write an ES6 function that takes an array of objects representing books with properties title,
//  author and pageCount. Return the all book titles that have more than 700 pages.

const arr10 = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pageCount: 1178,
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pageCount: 662,
  },
];

const fun10 = (value) => value.pageCount > 700;

const ans10 = arr10.filter(fun10); //yaha filter use kia bcz question me clearly mention hai(All the books so yaha find to use hoga hi ni(agar only first likha hota tb find lagta))
console.log(ans10); //worng ans dega
/**
      * [
  {
    title: 'The Lord of the Rings',  // humko sirf title print karvana tha filter ne puri value return me dedi jisne uski condition fullfill ki 
    author: 'J.R.R. Tolkien',
    pageCount: 1178
  }
]
      */

/**
 * ! we will use map to iterate filter array results and map ki help se book ke title return karva denge
 *
 */
const title = ans10.map((value) => value.title);
console.log(title); //[ 'The Lord of the Rings' ]   right answer

// 11. Write an ES6 function that takes an array of numbers and returns the sum of all the
//  numbers in the array using the reduce function.

/**
 * !reduce method ke logics
 */

const arr11 = [12, 23, 4, 2, 11, 21];
const fun11 = (accumulator, currentvalue) => {
  console.log(accumulator, currentvalue); //ye line just check karne ke liye likhi ki kaise work krta h reduce kaise kaise value jaati hai dono parameter me
  return accumulator + currentvalue;
};

const ans11 = arr11.reduce(fun11); //callback function call kia jisme 2 arguments they //sath me accumulator ki value set ki = 0 ,

//jab reduce run hoga array me to currentvalue me index=1 ki value ajati hai baaki kaam hota jaega aage khud one by one.

console.log(ans11);

/**
 * ! most important !!!!!!!!!!!!!!
 * !jb hum accumulator ko defult value khud se dete hai like yaha 0 set ki ,tb hamara currentvalue 0th index se value lega not with 1st index
 * !working-
 * 0(accu set ki =0) 12(curr (oth index value))
12(jo dono ka sum aya vo accumulator me agya) 23 (currentvalue ne next array index ki value leli)
35 4
39 2            (same process repeat)
41 11
52 21
73
 */

/**
 * ! most importaant baat agar hum khud se value  na set krte accumulator ki like -const ans11 = arr11.reduce(fun11)//yaha value pass ni ki accu ki
 * ! is case me accumulator array ke 0th index ki value leta hai 
 * !currentvalue array ke 1st index ki value leta hai //ye cheez bhot important hai yaad raakhni
 * 
 * const arr11 = [12, 23, 4, 2, 11, 21]
 * 
 * 12(accumultor me oth index ki value aai) 23(current me 1st index ki value)
35 4
39 2
41 11
52 21
73
 */

/**
 * ! ==================================================================================================
 *
 */
// 12. Write an ES6 function that takes an array of numbers and returns the sum of all the even
// numbers in the array using the reduce function.

const arr12 = [12, 23, 4, 2, 11, 21];
const fun12 = (accumulator, current) =>
  current % 2 == 0 ? accumulator + current : accumulator; //currentvalue ki help se check krte hai conditions ko

const ans12 = arr12.reduce(fun12, 0);
console.log(ans12); //18 (12+4+2)
/**
 * !important reduce array ke form me vaalue return ni krta hai //ye direct value deta hai final result ki
 */

// 13. Write an ES6 function that takes an array of objects representing students with properties name
//  and score, and returns the average score of all the students using the reduce function.

//  const arr13 = [
//  { name: 'John', score: 80 },
//  { name: 'Jane', score: 90 },
//  { name: 'Bob', score: 75 },
//  { name: 'Alice', score: 85 },
//  ]

//  const fun13 = (acc,curr) =>{
//   return acc + curr.score;
//  }

//  const ans13 =arr13.reduce(fun13,0);
//  console.log(ans13)

/**
 * ? question ----------
 * !important question --agar koe humse bolde reduce ki help se array ke ander data return karna hai
 * !humko pta hai reduce sirf value return krta hai not array
 * !yaha hum logical way me karenge kaam
 */
//humko arrray of objects se model key ki sari value return karvani hai array ke form me

const arr14 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const fun14 = (accumulator, currentvalue) => {
  // console.log(accumulator,currentvalue)//ye step by step show krdega kaise data accu,current me store hota hai har iteration me

  return [...accumulator, currentvalue.model]; //yaha har iteration me ek new array create hoti hai,spread operator ki help se hum purani accumulator ki value ko copy karvate jaate hai new array me aur jo data print karvana h isko add karva dete h sath,at the end new arry me sara data ajaega jo chaiyey
};
const ans14 = arr14.reduce(fun14, []); //basically ek empty array pass ki accumulator m,taaki ab isme aage values add karva sake
console.log(ans14);

/**
 * ! hum destructuring bhi use kr sakte hai like agar 2-3properties add karvani ho to bar bar currentvalue.make,currentvalue.model pura aisa likhna padta
 * easy way - const fun14 = (accumulator,currentvalue) =>{ //current value me jo one by one object pass ho rha tha usko destrcture krdenge
 * const fun14 = (accumulator,{make,model,year}) =>{//destructure kardiya
 *  return[...accumulator,make,model,year];//sirf itta likhna padega
 */

/**
 * ! important ques2 based on prev ques
 */
//maanlo array return karvani hai reduce se uske ander model ki value honi chaiyey
//note model :[corolla] ,model key ke ander jo value hai vo bhi array ke form me hai
//agar hum same uper vala method use krte to array return to hota but ander jo values aati vo bhi arraytype me store hoti -[[corolla],[civic]]//but humko isko extract krke sirf dingle array me laana hai[corolla,civic]
const arr15 = [
  { make: "Toyota", model: ["Corolla"], year: 2010 },
  { make: "Honda", model: ["Civic"], year: 2012 },
  { make: "Toyota", model: ["Camry"], year: 2015 },
  { make: "Ford", model: ["Mustang"], year: 2018 },
];

const fun15 = (accumulator, { model }) => [...accumulator, ...model]; //ye accumulator se data copy karega and usme model me jo value store thi usko copy karega(spread use kia h isiliye array individual element me toot gye jo model variable me array[type ki value store thi] )last me ek single array me return hojaegi
//same cheez har iteration pe hogi //ek new array create hogi data copy hoga then return array

const ans15 = arr15.reduce(fun15, []);
console.log(ans15);

//-----------------------------------------------------------------------------------------------
/**
 * ! important question to return object using reduce (imp question - yaha hum count kr re hai konsi string kitti baar repeat hui)
 * ! proper understanding of nullish coalescing operator.
 */
const arr16 = ["raghav", "ram", "rajat", "raghav", "ram"];

const fun16 = (accumulator, currentvalue) => {
  console.log(accumulator, currentvalue);
  accumulator[currentvalue] = (accumulator[currentvalue] ?? 0) + 1; //yaha nullish operator ka use kia
  //yaha basically accumulator me object store hai
  //hum check kr re hai obj[key] present hai ya ni - accumulator["raghav"] - accumulator object me raghav naam ki key phele se store hai ya ni agar ni thi to accumulator object me ram naam ki key dynamically create hojati hai is syntax se
  //(accumulator[currentvalue] ?? 0) + 1  //nullish coaleacing operator ki help se check kr re hai agar key present ni thi object me ya null ya undefined thi
  //(accumulator[currentvalue] ?? 0) + 1 //agar null ya undefined(key thi ni object me ) ka case tha to phele us key ko object me dalenge bcz vo first time occur hui,then usko 0 value se update kia taaki null ya undefine + any number koe error na dede isliye phele zero dia baad me 1 se update kia same value ko taaki pta lag sake vo key 1 bar object m store hogyi h
  //agar key phele se present thi to sirf 1 se increment hoga bcz nullish operator sirf ye check krta hai value null ya undefiend to ni
  /**
     *   easy explanation --
     * In the expression (accumulator[currentValue] ?? 0) + 1, it's checking the value associated with the key in the object accumulator. Let's break down this expression:

     accumulator[currentValue]: This accesses the value associated with the key currentValue in the accumulator object. If the key exists, it returns the value; otherwise, it returns undefined.
     ?? 0: This is the nullish coalescing operator. It checks if the value obtained from accumulator[currentValue] is either null or undefined. If it is, it returns 0; otherwise, it returns the value obtained from accumulator[currentValue].
     + 1: This increments the value obtained from the nullish coalescing operator by 1.
     * 
     * 
     * accumulator[currentValue] = (accumulator[currentValue] ?? 0) + 1;
This line uses the nullish coalescing operator (??) to ensure that if accumulator[currentValue] is null or undefined, it defaults to 0. (ye isliye kia by anychance key to thi present per vo null ya undefined value store kr ri thi //agar null ya undefined me +1 increment dete to NAN error aega //isliye nullish operator ki help se phele check krlia vo key present hai ya ni )
Then it increments this value by 1(kyoki ab vo object me store hogya isliye 1 se increment krke ) and assigns it back to accumulator[currentValue]. This effectively counts occurrences of each name.
     * 
     * 
     * 
     */

  return accumulator;
};
const ans16 = arr16.reduce(fun16, {});
console.log(ans16);

//. In JavaScript, if you use bracket notation ([]) to access or set a property on an object, and if that property doesn't exist, JavaScript will dynamically create it for you.

// So, in the expression accumulator[currentValue], if the key currentValue doesn't exist in the accumulator object, JavaScript will dynamically create it and assign the value accordingly.

// For example:

// javascript
// Copy code
// const accumulator = {};
// const currentValue = "ram";

// accumulator[currentValue] = (accumulator[currentValue] ?? 0) + 1;

// console.log(accumulator); // Output: { "ram": 1 }
// In this example, since "ram" doesn't exist as a key in the accumulator object initially, JavaScript dynamically creates it and assigns the value 1.

// ChatGPT
// In the expression (accumulator[currentValue] ?? 0) + 1, the default value of 0 is initialized first before adding 1

// In JavaScript objects, when you assign a new property to an object using bracket notation (obj[key] = value), it does not remove any existing properties. It simply adds the new property or updates the value of an existing property.

//output  working example 

// Iteration 1: {}, "raghav"

// accumulator: {} (empty object)
// currentValue: "raghav"
// { "raghav": 1 } (updated accumulator after this iteration)
// Iteration 2: { "raghav": 1 }, "ram"

// In this example, during the  iteration, "raghav" still exists in the accumulator object because objects in JavaScript retain their properties unless explicitly removed. When "ram" is encountered, it's simply added as a new property with a count of 1.
// The previous value of "raghav" remains unchanged.

// accumulator: { "raghav": 1 }
// currentValue: "ram"
// { "raghav": 1, "ram": 1 } (updated accumulator after this iteration)
// Iteration 3: { "raghav": 1, "ram": 1 }, "rajat"

// accumulator: { "raghav": 1, "ram": 1 }
// currentValue: "rajat"
// { "raghav": 1, "ram": 1, "rajat": 1 } (updated accumulator after this iteration)
// Iteration 4: { "raghav": 1, "ram": 1, "rajat": 1 }, "raghav"

// accumulator: { "raghav": 1, "ram": 1, "rajat": 1 }
// currentValue: "raghav"
// { "raghav": 2, "ram": 1, "rajat": 1 } (updated accumulator after this iteration)
// Iteration 5: { "raghav": 2, "ram": 1, "rajat": 1 }, "ram"

// accumulator: { "raghav": 2, "ram": 1, "rajat": 1 }
// currentValue: "ram"
// { "raghav": 2, "ram": 2, "rajat": 1 } (updated accumulator after this iteration)


//---------------------------------end