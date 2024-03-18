//sync 
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");


console.log("********************************************")

//async
console.log("1");
console.log("2");

//settimeout hamara async js ka inbuilt func hai 
//yaha jitta time set kroge ye utte time baad execute hona start hoga baaki code chlte rhenge iske liye wait ni karenge
setTimeout(()=>{       
    console.log("3");
},5000)

console.log("4");
console.log("5");


console.log("**********************************")


//callback functions
//jb ek function ke ander dusre function ko pass karva de 

function one(){
    console.log("step 1 completed now run second function")

    two();
}

function two(){
    console.log("step2 completed by second function")
}

one();
