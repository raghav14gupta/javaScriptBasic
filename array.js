//arrays 

//declaration
const arr1 = [];

//initializing with values (any datatype value we can store)
// store number , string,object function

const arr2 = [1,"raghav" , true , {name:"raghav"} , function abc(){
    console.log("gupta")
}];

console.log(arr2)
console.log("------------------------------------------------")

//multi dimensional array 


let multi = [["raghav" , 23],["rajat" , 24],["aman" , 16]]
console.log(multi)


//method we can apply to outer array as well as inner array

console.log(multi[0])  //ye outer array ke index pe output dega //op = ["raghav",23]


console.log(multi[0][0])  //raghav
//is se inner index pe access kr sakte hai (oth index pe jo array hai(outer) uska 0th index vala(inner) element print haa)

//push and pop
multi.push(["new",21])  //outer array me add hoga end me
console.log(multi)

/* for inner array */
multi[0][2] = "inner value added"; //yaha index ki help se new value add kari not with push(ye outer array me add karega)
console.log(multi)
