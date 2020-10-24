let min=(numbers)=>{
    if(numbers.length<2){return min(numbers[0],min(numbers,slice(1)))}
    else{return Math.min.apply(null,numbers)}
}