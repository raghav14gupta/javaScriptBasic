// //promise ya to reject hoga ya resolve ek hi condition chlti hai 
// //hum state ko bhi  change ni karva sakte like promise fullfill hogyaa to uski  state ko change krke reject ni kr sakte 


// function createPromiseWithtimer(){
//     return new Promise(function executor(resolve,reject){
//         setTimeout(function(){
//             let num = getRandomNum(10);
//             if(num % 2 === 0 ){
                
//                 resolve(num);
//                 console.log("promise fullfilled")  
//             }

//             else {
                
//                 reject(num);
//                 console.log("promise rejected")
//             }
//         },10000)

//     });
// }

// let x  = createPromiseWithtimer();
// console.log(x);


// //function to generate random  number
// function getRandomNum(max){
//     return Math.floor(Math.random() * max);
// }