



// 



function abc(){
    let count=1;
    for(let i = 1 ; i <=10;i++){
        setTimeout(function a(){
            console.log(i);
            count= count + i*1000
         
        },count)
       
    }
}



abc(); 