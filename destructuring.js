const obj = {
    name:"raghav",
    adress:{
           permanent:{city:"lucknow"},
           temporary:{city:"delhi"}
    }
}

// const{adress :{permanent:{city}}} = obj
// console.log(city)

const{city} = obj.adress.temporary
console.log(city)