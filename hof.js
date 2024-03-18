//higher order function 
//map 

// const arr = [ 1,2,3,6,7,8];
// let ans = arr.map(cube);
// console.log(ans)


// function cube(x){
//    return x*x*x;
// }



/*sort*/

// const arr = [100,12,1,1000,99]
// let ans = arr.sort((a,b)=>a-b);
// console.log(ans)

/*filter*/

// const arr = [10,18,200,40,9,60]
// let ans = arr.filter(above18);


// function above18(x){
//     if(x > 18) return x;
// }

// console.log(ans)


/*reduce*/

const arr = [1,2,3,4,5,6]
let ans = arr.reduce(multiply);

function multiply(prev,current){
    return prev*current;
}

console.log(ans);