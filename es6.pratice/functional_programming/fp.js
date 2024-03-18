//sectioon 1 

//immutability -   jo change na ho (hum kabhi ni  chaate ki hmara original data chaange ho)
const obj1 = {
    name:"raghav",
    age:23
}

const obj2 = obj1;
console.log(obj2)   //same object aagya obj2 me bhi bcz reference pass hojata h non primitve ka

//ab maanlo humne obj2 me kuch  changes kiye 
obj2.age = 26;
console.log(obj2) //26 //isme change kia tha 
console.log(obj1) //26 change yaha bhi aagya jbki isko change ni kia tha 

//hum nahi  chate hamara original object chnge hojaye 
//is problem ko hta sakte hai by making copy of original object 
//using spread operator

//ques1 -make array of 5 color now make new array add 2 more color to new array with containing 5 collors in it

const arr1 = ["red","green","yellow","orange"]
const arr2 =[...arr1,"blue","violet"]

console.log(arr1)  //benefit of using spread operator ..is array me change ni aenge 

console.log(arr2)//is array me prev array se 5 color liye aur 2 new color extra add kiye


/**
 * ! pure functions -
 */
//pure function vo hote hai jinko jo input dia usi form me output denge 

const a  = (name)=> "my name is" + `${name}`
console.log(a("raghav")) //my name is raghav 

//yaha ek string argument dia usne output me bhi string form me ans dia 
//some rules for pure function -
/**
 * 1- koe value ya function return karega
 * 2- 1 argument hamesha hona chaiye
 * 3- jo argument pass hai vo mutate ni hone chaaiyey like array ya object as argument pass hua h to 
 *    vo change ni hona chaiyey//new copy banake change karva sakte hai actual argument me change ni hona chaiyey
 * 
 */

//ques -
const b ={
    name:"raghav",
    age:23
}
const q = b => b.name + (b.age +1);
console.log(q(b))
console.log(b)


//----------------------------
/**
 * !map function -kaafi short and concise syntax hai for loop se bhi 
 * ! .map(function leta hai jo puri array ke element ko one by one traaverse krte haai)
 * ! objects pe ni lagta map bcz usme index ni hote //hum array of objects banasakte h tb kaam hojaega
 * 
 */

//ques - take a array and return the square of array element in new array
const square = element => element*element;
const y = [2,3,4,5];
const v = y.map(square);
console.log(v)

//agar koe bolde argument se array pass karvani hai like khud se declare ni karvani 
const anss  = elementReceiver =>elementReceiver.map(square)
console.log(anss(["hi","hello","ddddddd"]))

//ques2 -length find karni hai jitte element present hai array me
const str = ["hi","hello","namaste"];

const len = name => name.length;

const l = str.map(len);
console.log(l)

//wnd way to do without function name declaration 
//map function ek callback function leta hai argument m vo call hota hai jb map function run hota h ..one by one callback fun me element pass hote hai 
//callback function run hota hai with that element as argument aur answer lake return krta hai map function ko
const str2 = ["hi","hello","namaste"];
const o = str2.map((element) => element.length)
 //yaha direct function m value leli aur jo return karvana hai vo dediya(yaha declaration ni kia bus jaise uper code me kia tha const len = krke)
console.log(o)


//bettwer way first vala method hai code readibility inc krta h bcz of name with function .

/**
 * !ques - map on array of object
 */

let Aobj = [{name:"raghav"},{age:23},{place:"lucknow"}]
const ob = obj =>Object.values(obj);  //ye property bhot kaam ki h(Object.value(obj)  //ye function jo argument me object pass hota hai uske ander ki saari values laake dedeta hai //
//map ki help se array ke index ke according one by one object pass hote gye //unki value nikl ke return karva di 
console.log(Aobj.map(ob)); 


//-------------------------------------

/**
 * ! filter method-unhi values ko return krta hai jo callback function true deta hai (jo condition satisfy ho rhi ho)

const arr5 = [1,2,3,4,5,6];
const num = value => (value % 3 === 0)
    
    
const oddArray = arr5.map(num);
console.log(oddArray)//[false,false,true,false,false,true] //strict equality operator true/false me answer return karta hai

/**
 * !now doing same question with filter
 */
const arr5 = [1,2,3,4,5,6];
const num = value => (value % 3 === 0)
const filterr = arr5.filter(num);
console.log(filterr)  //[3,6]  //filter sirf usi element ko array me daalke return krta hai jo uski condition ko satisfy krte hai


///
/**
 * !yehi major dikkt thi map use krne m ye sare element pe work karega array ke aur jo value return ho rhi hogi vo print karega(like hamare case me har element ke liye t/f me answer dia)
 * !filter - use krne ka yehi faida hota hai vo sirf return array me unhi element ko rakhta hai jo uski condition ko satisfy kr re h //map ki trah sare element return ni krta 
 * !--most imp - filter hamesha element return karta hai jo uski condition satisfy krta hai like humko [3,6] result mila tha //map ki ye dikkt hai yaha true/false hi return hojata hai ye element ko return ni krta
 */
//filter() includes elements where the callback function returns true.
//map() constructs a new array by applying the callback function to each element and including the return values in the resulting array. If the callback function returns a boolean value, map() will include those boolean values in the resulting array.

//------------------------------------

/**
 * ! find method 
 * !- ye ekdm filter ki trah kaam krta hai bus ye single value deta hai jo pheli condition satisfy kri vo value return karega
 * !--ye array return ni karta -like map and filter do 
 * !- ye direct value return krdeta hai
 */
const arr6 = [1,2,3,4,5,6];

const t = arr6.find(num)
console.log(t); //3 sirf 3(value return ki) jo pheli condition true mili vo return krdi


//-------------

/**
 * ! reduce method 
  //- ye basicaally cheezo ko reduce krne k kam ata hai like 
 *   ![1,2,3,4] like 4 elements they array me inka sum karna hai 
 * ! reduce use kia[10]//data(sum) barabar hai bus chota(reduce hogya) to single
 */

//.reduce(accumulator,currentValue) // ye 2 parameter(variables hai) hote haai(callback fun hai basicaaly pass reduce me us callback function me 2 parameter hai) reduce mai
/**
 * ! basically syntax ka logic ye hai uper codesyntax ka
 * !const callback = (accumulator,currentvalue) => {kuch return karega ans}
 * !arr.reduce(callback);  aisa hai kuch ye code syntax
 * ! isko hi short me aisa likha jata hai - .reduce(accumulator,currentvalue)
 */

/**
 * accumulator(ye prev code run se jo value return aati hai vo store krta jata hai )//bydefault 0th index of array ki value store rhti hai .hum apni bhi de skte h 
 * currentValue - ye basically array ka element hota hai jo process ho rha hota h code running time pee//bydefault arr[1] index pe hota hai ye fir one by one index badte jaate hai jo ans ata hai accumulator me store hota jaega
Updating Accumulator: After each iteration, the reduce() method updates the accumulator with the return value of the callback function.
//now yehi(Updating Accumulator) value again pass hoti hai next iteration of callback function mai in accumulator parameter,currentValue increase hojati hai internally to next index of array(by reduce method)
same process repeat hota jaega until array get finished

//ques - sum of element of an array

const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);// 0 default value dedi accumulator ki na dete ye to arr[0] index vali value leta hai bydefault

console.log(sum); // Output: 15

//working of reduce method with callback function 

//const sum = array.reduce((accumulator, currentValue) => 
//{: Here, we're using the reduce() method on the array. The reduce() method takes a callback function as its first argument. 
//This callback function takes two parameters: accumulator and currentValue.

//return accumulator + currentValue;://jo operation lagaoge vo hoga(like substract,add,/,%)

// Inside the callback function, we're simply returning the sum of the accumulator and currentValue. This value will be used as the accumulator(accumulator ki value + currentvalue ki value store hojati hai accumulator m jb return hota hai function) for the next iteration.//currentvalue[next index ki value ajaegi next iteration me]


//---------------------------------------------------------------

/**
 * !major difference between map and reduce 
 * !-map hamara array ke element pe operation krta hai like isme length of array same hogi hamesha
 * !example - arr1=[1,2,3] . length = 3 hai array ki 
 * !agar map lagaya aur square kia arry element ko [1,4,9] bangye //length same hai arry ki bus element pe operation prfrom hue 
 * 
 * !--agar reduce use krte -
 * like  sum krna hai array ka
 * arr2=[1,2,3]
 * reduce lagaya //output aya 6 (value deta hai return k time only ) //map array return krta hai with ans in it 
 * reduce me length kam hogyi to 1 arry ki ..map me same rhti
 */
