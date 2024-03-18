//ques1 - 
const arr=["ab","bc","cd","de","ef"];
let f = "";
const sum = arr=> {
for(let i = 0 ; i < arr.length;i++){
   
    f = f +arr[i]
    

}
console.log(f)  
   console.log(arr.pop())
   console.log(arr.shift())
}


sum(arr)


//ques2
const product = {
type:"mobile",
cost:100000,
instock:false
}
let str = ""


const fun1 = product =>{
  let isAvailable = product.instock ? "available":"not available";
  str += `type:${product.type}\n cost:${product.cost}\n instock:${isAvailable}`
  return str
}

console.log(fun1(product))

//ques3
//ques5   convert to es6 function with minimum characters
// function startsWithA(str) {
//     if (str.charAt(0) === 'A') {
//     return true
//     } else {
//     return false
//     }
//     }
//     console.log(startsWithA('Akshita'))
//     // true
//     console.log(startsWithA('Jeena'))
//     // false


    //es6- 
    const fun2 = str =>str.charAt(0) === 'A'?"true":"false";
    console.log(fun2("Raghav"))
    console.log(fun2("Akaash"))


    //ques6
  const arr1 =  [1, 2, 3, 5, 8]
  const fun3 = arr1 => arr1.shift();
  console.log(fun3(arr1))
  console.log(arr1)


  //ques 
  //2 number sum 

  const fun4 = (a,b=4) => a+b;
  console.log(fun4(2,3))

  //ques
  


  //ques7
//   const arr3 = [0, 1, 1, 2, 3, 5, 8];
//   let result  = arr3.splice(2);
//   console.log(result)
// let result = []
// const fun6 = arr3 => {
//     arr3.forEach(ans => {
//         result.push(ans)
//     })
//     return result.slice(-5)
// }

// console.log(fun6(arr3))


// //ques8 
// const arr4 =[1, "raghav", 3, 5, 8]
// const fun9 = arr4 => {
   
//     res = arr4.slice(1,2)
// return "hello " + res;
// }
// console.log(fun9(arr4))



//ques15 

const pro = {
    name: 'Apple MacBook Air 2020',
    specification: {
      capacity: '256GB',
      size: '13.3 Inch'
},
}

// const c = pro => {
// return pro.name + " which is of "+ pro.specification.size
// }
// console.log(c(pro))


//2nd way of doing this is destructuring

          //yaha us object ki destructuring kardi taaki easily access kr paye uske ander ki individual properties ko
          //(basiclly ye hai 1 {} single object hi bus isko destructure krdia taaki variable ke form me ajaye aur hum easily use kr sakte ise(without using .dot operator to acess vaalue from keys))
          //template literal ka use kia too use variable ye sb best pratice hai to write es6 optimized code
                    //nested vale variable ko aise access krte h destructuring m
const d =({name,specification:{size}}) => {
    return `${name}`+ "which is of"+`${size}`
}
console.log(d(pro))  //yaha object pass kia //isiliye humko pta h kis object ko destrcture karvana hai



//ques 14

const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
   }
   

   const e =({name,country}) => 
     `${name}` + " lives in "+`${country}`
   

   console.log(e(userData1)) 

   //ques13
   const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
   }  
                                  //jb bhi object return karvana hota hai to (parenthesis lagana padhta h)  verna sirf {} ye banaenge to function usko function ki body ssmj leta h vo 
   const z =({postalCode,city})=>({postalCode,city})
   console.log(z(userData))



   //ques4 
   const w = ["orange","tomato"]

   const t = ([fruit,vegetable]) => ({fru:fruit,veg:vegetable})

   console.log(t(w))

   //ques3 
   const u =  [
    { name: 'Amay', age: 25 },
    { name: 'Akhil', age: 25 },
    ]

    const i = (u,n)=>{
        return (u[0][0]==n) ? u  :"null";  // ye wrong ans dega //yaha find method se kro easily hojaega
    }

    console.log(i(u,"Aman"))