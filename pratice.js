for(let a = 1 ; a <= 15; a++){
 
    if((a % 3)== 0) 
    console.log(a , "fizz");

    if((a % 5) == 0){
        console.log(a,"buzz");

    }

     if(((a % 3) ==0) && ((a % 5) == 0)) 
     {
        console.log(a,"fizzbuzz");
     }

    else
    { console.log(a);
    }
}