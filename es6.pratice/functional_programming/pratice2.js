// 1. Given an array of objects representing people, write an ES6 function to return a new array
// containing only the names of the people

const arr1 = [
    { name: 'Raj', age: 28 },
    { name: 'Swapnil', age: 42 },
    { name: 'Anushka', age: 35 }
    ]

   const fun1 = value =>value.name;  //ye named function hote hai 
   
   /**!
    * !important
    */
   //hum 2nd way se bhi function de sakte hai map m with anonymous function syntax
   //const ans1 = arr1.map(value => value.name)//function name hata diya(declaration)  //paramter(value)variable likha aur kya return karega function vo likha with arrow func

    const ans1 = arr1.map(fun1);  //using map i have done
    console.log(ans1)


    // 2. Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

    const arr2 = [1,2,3,4,5]

    const fun2 = value =>value*5;

    const ans2 = arr2.map(fun2);
    console.log(ans2)//[ 5, 10, 15, 20, 25 ]

   
//     4. Write an ES6 function that takes an array of objects representing books and returns an array
//  with only the titles and also authors of each book

/**
 * !important concept
 */
const arr4  =[ { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
{ title: 'To Kill a Mockingbird', author: 'Harper Lee' },
{ title: '1984', author: 'George Orwell' },
{ title: 'Pride and Prejudice', author: 'Jane Austen' }];

const fun4 = value =>(value.title)&&(value.author) ;

const ans4 = arr4.map(fun4);
//console.log(ans4)//[ 'F. Scott Fitzgerald', 'Harper Lee', 'George Orwell', 'Jane Austen' ]
/**
 * !hamara ans wrong ara hai yaha bcz jb hum return krte hai to atlast ek single value hi return karva sakte hai 
 * !but hum yaha return((value.title)&&(value.author)) 2 value return karva re thry ....aise case me sirf last vali value return hoti(value.author) hai not both values
 */

/**
 * ? solution to change this ya destructuring use krlo ya ek object return karva do with both properties
 * ? solution1
 */
        //yaha function parameter me  basically(jo object pass hua tha usko extract krdiya to use properties)
//const fun5 = ({title,author}) =>({title,author});  // ye return krdega ekobject with this properties{key and value ka naam same tha yaha so ek baar likhna pada }
//const ans5 = arr4.map(fun5); //yaha se basically one by one array ke ander ke object pass honge callback me
//console.log(ans5)

/**
 * ! wnd way hai explicitly object return karva do
 * const fun4 = value =>              //yaha ek object pass hua
 * ({ title: value.title, author: value.author });//ye object return karega jo object pass hua h us se value extract krke.

 */

// 5.Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.


const arr5 = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"];

const fun5 = value => value.charAt(0) ==='A';

const ans5 = arr5.filter(fun5);
console.log(ans5);//[ 'Anjali', 'Arpit', 'Ankit' ]


// 6. Write an ES6 function which filters out the products which have a price greater than 40
const arr6= [
    {prodName: "Dairy Milk", price: 10},
    {prodName: "Dairy Milk Silk", price: 70},
    {prodName: "Five Star", price: 20},
    {prodName: "Mars", price: 50}
    ]

    const fun6 = value =>value.price>40;

    const ans6 = arr6.filter(fun6);
    console.log(ans6)


    // 7. Write an ES6 function that takes an array of numbers and returns the first number that is
    // divisible by 7

    const arr7 = [1, 2, 3, 21, 14, 7];

    const fun7 = value =>value%7 == 0;

    const ans7 = arr7.find(fun7);//find vo number return karega jo sequence me sbse phele 7 se divisible ho rha hoga
    console.log(ans7)//21


//     8. Write an ES6 function that takes an array of strings and returns the first string that is longer than
//  8 characters.

const arr8 = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan"];

const fun8 = value =>value.length>8;

const ans8 = arr8.find(fun8);
console.log(ans8)


// 9. Write an ES6 function that takes an array of objects representing students with properties name
// and grade. Return the first student object that has a grade of "A"

const arr9 = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
    ]

    const fun9 = value => value.grade ==="A";

    const ans9 = arr9.find(fun9)
    console.log(ans9)


    // 12. Write an ES6 function that takes an array of objects containing Bollywood movie information
    // (title, director, year, rating) and returns an array with only the movie titles that were made before
    // 1990 and has a rating above 8.0. 

    const arr12 = [
        { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
        { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
        { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
        { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
        { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
        { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
        { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
        ]


        const fun12 = value =>(value.year<1990)&&(value.rating>8.0)?value.title:null;
       
        const filteredArray = arr12.filter(fun12);  
        //console.log(ans12)//
        /**
         * ! ye code error dega bcz jo hamara filter method hota hai vo us puri value ko return kardeta hai jo condition satisfy hoke true result de ri hai 
         * ! yaha humko sirf movie.title name chaiyey output me per hamara filter method puri value object ko return kar de rha hai jo uski condition ko satisfy kr re they
         * [
         {
      title: 'Sholay',
       director: 'Ramesh Sippy',
      year: 1975,
      rating: 8.2
     },

     //humko sirf movie ka title chaieye   
         */

     /**
      * !solution ya to jo filter method result de usko ek array me store krlo aur us array me loop lagao aur jis jis index pe movie.title hai usko ek empty array me push karvate jao aur last me return karva do bcz hamare pass filter hoke data to aahi gya filter method se ab sirf us se title extract krna h 
      * ! ya map method use krlo(ye bhi loop ki trah work kartaa h one by one iterate karega array ke har element ko) jo filter hoke array milegi original array se .uspe sirf vahi element honge jo condition satisfy kr re they so map ki help se array ko traverse karenge aur return karvadenge movie.title ko using function
      */

     //remaining code 
//      For each movie object in the filteredMovies array, the map() function extracts the title property of the movie and returns it.
//   The returned values (movie titles) are collected into a new array.
//   As a result, the final array returned by map() contains only the titles of the filtered movies.

     const movieTitle = filteredArray.map(movie =>movie.title);//callback fun passed(anonymous fun hai )
     console.log(movieTitle) // ['Sholay', 'Parinda']