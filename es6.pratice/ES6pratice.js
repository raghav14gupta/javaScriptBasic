const isEligibleToVote  = function (age){
    if(age >= 18) return "eligible to vote"
    else return "not eligible to vote"
}

console.log(isEligibleToVote(17))
console.log(isEligibleToVote(21))


//now es6 arrow function 

const ans  = agee=> agee>=18?"eligible":"not eligible";
ans(18);
console.log(ans())

//-----------------------------------------------------------------------------

//ques2- 
const ans2 = function isGreater(a,b){
    if(a>b) return "a is greater";
    else return "b is greater"
}

console.log(ans2(3,3));

 //arow func 
const ans3 = (a,b)=>a>b?" a is greater":"b is greater";
console.log(ans3(5,7))
console.log(ans3(8,4))

//-------------------------------------------------------------------

//ques3 
const ans4  = function ispositive(num){
    if(num >= 0) return "number is positive";
    else return "number is negative";

   
}
console.log(ans4(-1))

//arrow function 
const ans5 = num=>num>=0 ?"number is positive":"number is negative";
console.log(ans5(5))

//---------------------------------------------------------------------

//ques4-

const ans6 = function isEvenOrOdd(num){
    if(num %2 == 0)return "number is even";
    else return " number is odd"

   
}
console.log(ans6(100))

//arrow function 

const ans7 = num=>(num%2 == 0)?"even":"odd";
console.log(ans7(4));

//----------------------------------------------------------------------

//ques5 - 
const ans8 = function containA(word){
    for(let i = 0 ; i < word.length;i++){
       let ch = word.charAt(i);
       if(ch == 'a' || ch == 'A') return "contains A or a";
       
}
 return "not contains";

}
console.log(ans8("rghv"));

//arrow function 
const ans9 = name => {
    for(let i = 0 ; i < name.length;i++){
        if(name.charAt(i) == 'A' || name.charAt(i) == 'a') return "contains a"
    }
    return "does not contain a";
}

console.log(ans9("raghv"));

//----------------------------------------------------------

//ques6- 
let answ = "";
const ans10 =  abc =>{
    for(let i = 0 ; i < abc.length; i++){
     answ += abc.charAt(i);
    }
    if(answ.length>5) return " length is greater then 5";
    else return " not greater then 5"
}

console.log(ans10("raghv"));

//ques9 

const ans12 = value => 10*value;
console.log(ans12(10));

//ques10 
const ans13 = value => value%3 == 0?"yes multiple of 3":"no";
console.log(ans13(35))

//----------------------------------------

//ques11 - 
const product = {
    title:"book",
    price:200,
    description:"story of poor boy"
}

const {title,price,description} = product;
console.log(title)
console.log(price)
console.log(description)


//ques12 -
const book = {
    title:"the book",
    author:"raghav",
    pages:1009,
}








//destructuring ki help se

const{pages} = book;
const details = (book) =>pages>100?"true":"false"
console.log(details(book)) 



//ques13-
const person = {
    name:"raghav",
    occupation:"product manager"
}

const changeOccupation = (person,str)=>{
    occupation:str;
    return person;
}
console.log(person);
console.log(changeOccupation(person,"software_developer"))


//question14 

const arr = [1,2,3,4,"raghav"];
const[num1,num2,num3,name] = arr;

console.log(num1)
console.log(num2)
console.log(num3)
console.log(name)


//ques15-
function defaultpara(a,b,c){
    if(c ===undefined){
        c=4
    }
    return a*b*c
}
console.log(defaultpara(3,1))


//change into es6 code with short syntax 

const ans16 = (a,b,c=5) => a*b*c;
console.log(ans16(4,1,7))//4*1*7
console.log(ans16(4,1))//4*1*5

//--------------------------------------------------------------------------------------