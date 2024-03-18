//pratice 

//ques1
const person = {
    name:"raghav",
    age:30
}
person.age = 35;//
//or
let ans = 35;
console.log(person)
console.log(person);

//question2
const car1 = {
  model:"toyota",
  horsepower:300
}

const car2 = {
    model :"porche",
    horsepower:800
}


const car = (car1,car2)=>{
    if(car1.horsepower > 300) console.log("true")
    else{
        console.log("false")}

    if(car2.horsepower>300) console.log("true")
    else{
           console.log("false")
        }
}
car(car1,car2)
console.log("---------------------------------------------------------------")
//ques3 -

const person2 = {
    age:10
}
const{age} = person2

const ans19 = (person2,num) => age + num>21?"true" :"false";
console.log(ans19(person2,11))

//-------------------------------------------------------------
console.log("---------------------------------------------------------------")
//ques4 - 
const blog1 = {
    title:"new blog",
    views:1000
}
const blog2 = {
    title:"new blog",
    views:500
}

const blogAns = (blog) =>blog.views>=1000?"true":"false"
console.log(blogAns(blog1))
console.log(blogAns(blog2))

//------------
console.log("---------------------------------------------------------------")

//ques6-

function add(a=30,b=0){
    return a + b;
}

console.log(add(2,3))


//change to es6 function
const add2 = (a=30,b=0)=>a+b;
console.log(add2(2))

//------------------------------------------
console.log("--------------------------------------------------")

//ques7 

const one = {
    name:"raghav",
    age:21
}

const two = {
    name:"gupta",
    skill : "javascript"
}

const combine = {...one,...two};
console.log(combine)


//ques8 - 
const p = {
    name:"raghav",
    address:"lucknow"
}


//change to es6
const{name,address} = p;
const getData = () =>{console.log(name) ; 
    console.log(address);
}

getData(p);

//---------------------------------------------------------------------
//ques9 

let str1 = "raghav";
let str2 = " gupta";
let str3 = str1.concat(str2);
console.log(str3)


//ques10 
//function me array pass karvani hai aur last element return krna hai 

const arr =[1,2,3,4,5,7]
const last = arr => arr.pop();
console.log(last(arr));

//ques11
const arr3 =[1,2,3,4,5,7]
//const last3 = arr => arr.shift();
//console.log(last3(arr3));

//ques13

const firstN = (arr,n) =>arr.shift() + n;
console.log(firstN(arr3,1));

//ques14 

const sum = [1,2,3,4,5,6];

const anssum = () => sum.shift() + sum.pop();
console.log(anssum())


//ques 15 
let ansss = "gg"

const we = {
    name:"raghav",
    age:24,
    occupation:"developer"
}

const fun = (we) => {console.log(name + " name")
//error dega bcz variable value ko aise direct add ni karva sakte string me ..template literal ki help se hojaega
console.log(`${ansss}`)
}
fun(we);
console.log("--------------------------------------------------")