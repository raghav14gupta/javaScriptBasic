let obj1 ={
    name:"raghav",
    age:23,

    hobbies :{
     movie:["avengers", "aven" ,"avengers"],
     songs:["hindi" ,"english"],
     isfav : true,
    },

    sayhi:function(){
        console.log("functions")
    }
};

// console.log(obj1);
// console.log(obj1.name)
// console.log(obj1.hobbies)
// console.log(obj1.hobbies.movie[1]);
// obj1.sayhi();

// obj1.hobbies.skills = ["java","javascript"];
// obj1.age = 24;
obj1.hobbies.movie.pop("you");
delete obj1.age
delete obj1.hobbies
obj1.food = "burger"

for(let key in obj1){
    console.log(key," " , obj1[key])
}




let arr = [1,2,3,4,5]
let ans = arr.slice(2,4);
console.log(ans);


let person = {
    name: "raghav",
    age: 23,
}

person.age = 25;
console.log(person.age);


const personn = {
    name:"aman",
    age:23,
    raghav:{
        name:"rajat",
        age:25
    },

    skill:"javascript",
    fun:function abc(){console.log("raghav function")}
}

personn.fun();
personn.age = 25;
delete personn.age;
personn.value  = "true";

console.log(personn);