let mergeSort=arr=>{
    if(arr.length===1){return arr}
    let left=arr.slice(0,Math.floor(arr.length/2))//注意拼写啊亲！是slice，不是splice！
    let right=arr.slice(Math.floor(arr.length/2))
    return merge(mergeSort(left),mergeSort(right))

}
let merge=(a,b)=>{
    if(a.length===0){return b}
    if(b.length===0){return a}
    return a[0] < b[0] ?
    // [a[0]].concat(merge(b[0],a.slice(1))) :
    // [b[0]].concat(merge(a[0],b.slice(1)))；亲，长点心吧！参数是两个数组啊！
    [a[0]].concat(merge(b,a.slice(1))) :
    [b[0]].concat(merge(a,b.slice(1)))
}