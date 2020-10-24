let min=(numbers)=>{
    if(numbers.length<2){return min(numbers[0],min(slice(1),numbers))}
    else{return Math.min.apply(null,numbers) }
}
let minIndex=(numbers)=> numbers.indexOf(min(numbers))
let sort=(numbers)=>{
    
    if(numbers.length>2){
        let index=minIndex(numbers)
        console.log(index)
        let min=numbers[index]
        console.log(min)
        numbers.splice(index,1)
        return [min].concat(sort(numbers))
    }else{
        return numbers[0]<numbers[1]?numbers:numbers.reverse()
    }
}