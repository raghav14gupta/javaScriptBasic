let name = 'raghav'; //single quotes
let myname ="raghav";//double quotes
let mynaam = `raghav ${name} ${myname} ` ; //backticks

console.log(name);
console.log(myname);
console.log(mynaam)

// <!--********************************!-->
//access character from string
let naame = "raghav";
console.log(naame[1]);  // one way
console.log(naame.charAt(1));


//strings are immuatable
naame[0] = 'R';
console.log(naame);
naame = "Raghav";
console.log(naame);

//javascript is case sensitive
let a = 'a';
let b = 'A';
if(a == b){
    console.log("true")
}

else{
    console.log("false");
}

//
const message1 =  'This is a long message \
that spans across multiple lines \
in the code.'

 console.log(message1);

 //string methods

 //concatitnation
 const str1 = "raghav";
 const str2 = "gupta";
 let str3 = str1.concat(" ",str2);
 console.log(str3);

 //toUpperCase
 console.log(str1.toUpperCase())
 console.log("------------------------------")

 //remove white space from string
 let name1 = "  raghav  gupta ";
 console.log(name1);
 console.log(name1.length)

 let anss = name1.trim();
 console.log(anss.length)

 //converting string to array
 //split method
 console.log(anss.split())

 //take some part of string
 console.log(anss.slice(1,5)) // last(end) value given se ek less print hoti hai yaani till 4th index print hoga 1st index se
console.log(anss)

let str = "Hello, World!";
console.log(str.slice(7)); // Output: "World!"
console.log(str.slice(7, 12)); // Output: "World"
console.log(str.slice(-1)) // slice me negative index bhi pass kr sakte hai //this is not possible on substring method

//
let name3 = 'raghavgupta'
console.log(name3.substring(1,5))  //end value se ek less
console.log(name3.substring(-1))  // substring me negative index ni chlte ye negative index ko 0th index maanke 0th 
                                   //0th index se lekr puri string print kardega
                                   
//
 

 //spread operator
 const arr1 =[1,2,3]  //actual arrays me koe changes nahi atte hai
 const arr2 =[...arr1];  // ye copy pass hoti hai
 arr2.push(4)
 arr2.unshift(0)
 console.log(arr2)

 let arr3  = [...arr1,...arr2]  // aapaas me merge krdiya 2 arrays ko new array me store karvalia
 console.log(arr3)

