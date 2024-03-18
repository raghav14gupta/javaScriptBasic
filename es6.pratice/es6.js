
/**
 * 
 * //always use const variable unless u want to  change a value;
 * /always use const variable unless u want to  change a value;
//use let when you want to reassign a value 
//never use var 
//always define variable at top of the scope 
//never use same variable name for 2 variables while declaration

//
let

/
//q1-
let a = 10;  // ye scope ke bahar declare the globally variable a
{
    let a  = 10;   // isiliye hum yaha dubara re declare kr sakte hai 
                  // within block 2 baar declare nahi kr sakte same variable ko 
                    //outside its block scope usko dubara declare kr sakte hai
    console.log(a);
}
///////////////////////////////////////////////////////////////
//
//q2-
let a = 10;  // no error bcz global declare h
{
    let a  = 10;  // no error bcz apne block me first time declre hai a
   // let a   = 20;  // error bcz dubara a variable ko redeclare kia
    a = 30;  // no error bcz yaha reassign kr re h it is possible
    let c  = 20;  // no error bcz its a different variable(c)
}

//let a  = 10;  // error bcz global me ekbar declare ho chukaa h var 
              // ye kisi block scope me ni tha to as global treat hoga 
               //isiliye re declare ni kr sakte

//q3 
{
    console.log(a)   //error bcz let me block scoping hoti hai 
                     //hum variable ko use ni kr sakte without declaration 
                     //temporal dead zone problem ajatti  hai
    let a  = 10;
}

 */


/** 
 * ! const
 */
//const a  = 10; //no error(varibale declaration with value initialization)


//const a;
//a =10;     //ye error dega const me declaration ke time hi value deni compulsory hoti hai 
  //ase alg se baad me assign ni krsakte declaration ke time hi  value deni hoti hai 

  //reassign value bhi allowed ni 
  // const b = 20;
 // b = 40;  // reassignment of value not allowed in const


 /**
  * ! objects
  */

  //const obj = {num1 :1 , num2 :2};
     //obj.num1 = 3;  // bhale hi ye const obj tha but value change hojaegi bcz object same hai hum
                    //hum sirf same object me uski value change kr re h isiliye ye error ni dega
    //console.log(obj)


    // const obj2 = {num1 : 1, num2:2}
    // obj2 ={};  // ye error dedega bcz const tha hum pura new object({}) reassin kr re h const variable me 
                //ye possible ni karna ,hum same object ke ander ki value ko update kr sakte hai 
                //usme naya object ni reassign kr sakte
     //console.log(obj2)  


     //point3 
    //  obj3 ={num1:1,num2:2};
    //  obj4 ={num1:1,num2:2};

     //yaha dono objects type k data hai dono ke ander ki values bhi same hai 
     //agar hum obj3 === obj4 kare to kya aaega 

    //  console.log(obj3===obj4);
    // false dega
    //  bcz bhale hi dono vatiable same datatype ke hai aur value bhi same hai 
    //  per ye dono alag memory adress pe bane hai heap me due to non primitive datatype 
    //  isiliye false aya


    /**
     * ! arrays
     */

    // let arr1 = [1,2,3]
    // let arr2 = [1,2,3]
    // console.log(arr1 === arr2)   //false(bcz dono alag memory adress pe bane hai heap me bhale hi value same hai)
    
    
    /**
     * ! arrow funnction 
     */
    //basically ye es5 ka function declaration tha
//     function add22thenReturn(num) {
//         let sum = 0 ;
//         sum = num + 22;
//         return sum;
//     }

    //ab isko es6 arrow funtion code me convert karenge 

    //version1(function keyword removed) -

//     const version1 = (num) =>{
//         let sum = 0 ;
//         sum = num + 22;
//         return sum;
//     }

//    console.log(version1(1)); 


   //verssion2(single argument pass tha toh (bracket removed)) 
//    const version2 = num => {
//     let sum = 0 ;
//         sum = num + 22;
//         return sum;
//    }

//    console.log(version2(1));

   //version3 (sum variable me store karvaane ki need ni thi directly return karva dia (neeche print karva lenge))
  // const version3 = num => {
    //return num + 22;
  // }

  // console.log(version3(1));

   //version4 (bcz single line statement thi function body me   isliye {curly bracket}and return statement ki needd ni usko hata dia)

   //const version4 = num => num + 22;
   //console.log(version4(1));


   /**
    * !default parameters
    */

   //const defaultExample  = (a,b) => a+b;   

//console.log(defaultExample(2)); // NAN dega
//bcz humne sirf 1 argument pass kia jbki hamara function 2 parameter demand kar ra tha 
//so 2 + undefined(b) = NaN output dediya
//bymistake user output dena bhul sakta hai to taaki hum is problem me na fase hum default value pass karva dete hai 
//agar user koe argument pass ni karega toh vo default value use me ajati hai 
//agar user argument pass karega jitte ki need hai to vo default value automatically override hojati h passed value se 


//const defaultExample2  = (a,b=3) => a+b;  //paramter of function(b me default value put kri)  

//console.log(defaultExample2(2));  //ans = 5


//note -
//const defaultExample3  = (a,b=3,c) => a+b+c; 
//console.log(defaultExample3(2, ,3));//ye error dega 
//bcz 1- default parameter value right side of parameter se dena start krte hai hamesha ase beech me ni daalsakte jbtk right side m na ho vo
//2- aise(2, ,-ye allowed ni aise commaa pass karna value na dene ki jaga error dega)
//solution(2,undefined,3) //undefined value pass krdo vo ek value ki trah kaam krta h


/**
 * ! destructuring of arrays and objects
 */

const obj1 = {
    num : 1,
    name: "raghav"
}

//console.log(obj1.num); 

//maanlo humko (.dot use ni krna to print value)
//easily hum destructuring use kr sakte hai

//{yaha variables ke naam likh diye ander },same hona chaiyey  variable ka naam as object keys}
const{num,name} = obj1;
console.log(num);
console.log(name);

//hum key ke naam ko bhi  change karva sakte hai 
const{num:number} = obj1; // is se key ka naam change hojaega num :(yaha jo value daloge new key vo banjaegi)
console.log(obj1);

//destructuring bhot jyada use aati hai jb object nested ho complex 

//------------------------------------------------------------------------------

//destructuring array 

const arr = ["first","second","third"];
console.log(arr[0]);  
// console.log(arr[1]);
// console.log(arr[2]);  // humko ase print karvana padega jb jb value print krni padegi 


// now use destructuring  
//yaha variable ke name [kuch bhi likh sakte hai as array me index hote hai so jo seqeunce me variable lenge us array[index] se value miljati hai variable ko]
const[one,two,three] = arr;
console.log(one);
console.log(two);
console.log(three);

// ------------------------------------------------------------------------
/**
 * !spread operator
 */
//most important spread operator (...)

//basically maanlo ek array hai usme kuch values hai humko vo value apni new array me use krni hai 

//without spread operator

const arr1 = [ 1,2,3,4,5];
const newarr = [6,5,arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]]
//aise ek ek value ko aise type krke likhna padhta hardcode krke 

//after spread operator 
const newarr1 = [6,5,...arr1];
console.log(newarr1);  //easily hamara kaam hogya 

//behind the scene ...spread operator  jo hamari arr1 array thi 
//1single array thi vo spread operator kya krta hai us array me se ek ek element ko nikal deta hai fir jaha usko put karvna ho vaha put krdeta h 
//basically ye single array(with multiple eleement in it) isko individusl element me break(split krdeta hai)

function sum(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
const result = sum(...nums); // yaha single array ke element ko individual elements me spread(break krdiya)
console.log("Result of sum:", result); // 6 (result variable me = 1,2,3) aagya tha isliye sum = 6 bana

/**
 * !rest operator 
 * 
 */
//ye basically pack kardeta hai elements ko array me 

//before rest 
//maanlo humko array ka first element print karvana hai baaki elements ko as it is array me hi rakhna hai 

const arr3 = [1,2,3,4,5];
let ans  = arr3[0];
//baaki faltu me slice operator use krna padhta tha to put remaining element in array 
let remaining = arr3.splice(1); //ye 1st index se sare element ,array me daake dedega
console.log(ans);
console.log(remaining);

//after rest operator 
const arr4 = [1,2,3,4,5,6,7]

const[first,second,...rest] = arr4;  //destructuring krdi array ki

console.log(first)
console.log(rest)  //rest array return krta hai single //jiske ander remaining rest elements rhte hai

//ye basically sare rest element ko pack krdeta hai  single array me 
//spread tmhara single array ko individual element me split krdeta hai

 //example 2 for rest operator use - 

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

//ab yaha hum kitte bhi parameter pass karva sakte hai apni need ke according 
//humko phele se hardfix ni btana ki kitte argument use aenge 
//jaise requirement aaegi utti arguments dedo //
console.log("Sum:", sum(1, 2, 3, 4, 5)); // Sum: 15
console.log("Sum:", sum(10, 20)); // Sum: 30


//-----------------------------------------------------------------------
//----------------------------------------------------------------------------

/**
 * ! object literals /shorthand property value 
 * 
 */

//maaanlo ek object banana hai vaha variables ki value use krni hai

let name1 = "raghav";
let age1 = 23;          // ye variables they

//ab object create karenge 

let person1 = {
    name1:name1,  //(key same as variable name(variable behave as key (to left side of :colon))   : variableName (jis se stored value mil sake is varible ki))
    age1:age1                                  //after :(colon) variable now behave as value to the key
}

console.log(person1)//


//shorthand way todo this 
//sirf variable name ek baar likhkr uski values print karva di 2-2baar ni likhna pada
const person2 = {name1,age1}
console.log(person2);


//----------------------------------------------------------------------------

/**
 * ! template literal   -ye bhi ek way hai string print karvane ka
 */
//iski help se hum string me variable ko bhi add karva sakte hai 
//multi line me bhi sentence ko  break karva sakte hai 
//like - this is boy 
 `this 
    is 
    boy `
    //
const hi = "hello" ;
//ek variable ko apni string me add karva dia using template literal 
const str = "namaste " + `${hi}`; ///ye hai tl
console.log(str)


//ques2 
//maanlo ek function banaya
const func = () => "raghav"
//ab jo return value hai isko bhi apni string me use karva sakte hai 

const str2 = " hi " +`${func}`  // ye run ni karega shi se bcz humne function call ni karvaya
console.log(str2)

//new code 
const str3 = "hi" + `${func()}`;
console.log(str3)//ab run hoga

//--------------------------------------------------

/**
 * ! nullish coalescing operator 
 * ye bhot useful hai object ke cases me baki jaga bhi use ata h jb humko pta karna ho ki object me undefined ya null value to ni h jiski vaja se ans galat ara hai
 */

//before nullish coalescing 

const user = {
    name:"",
    age:null
}

console.log(user.name || 'raghav');// or operator use kia like agar user.name me koe value ni mili to "raghav print krdena"
//error ye output wrong hai bcz name:""(empty string present thi ye print honi chaiyey thi )or vali condition ni run honi chaiyeye thi 

console.log(user.age || 23)  //ye bhi galat ans derha hai 
//yaha humne null value assign ki thi vo print hona chaiyeye tha (isne OR vali condition run krdi)


//yehi sare issues hatane ke liye nullish coalescing operator(??) use me ata h
/**
 * ! ye bta deta hai value null ya undefined to ni thi jiski vaja se galat ans ara tha
 * 
 */

console.log(user.age ?? 23) //user.age present thi to vo run hui agar na hoti present toh ?? iske baad likhi conditon run hoti h
//null ans aega

//example 2 -yaha name variable declare kia per usme koe value ni di 

let naam;  // ye undefined tha bcz koe value ni assign kri
console.log(naam ?? "default value pass krdenge jo mann ho agar name variable undefined mila to ye run hogi");
