let mergeSort=arr=>{
    if(arr.length===1){return arr}
    let left=arr.slice(0,Math.floor(arr.length/2))//注意拼写啊亲！是slice，不是splice！
    /*slice(start,end)：方法可从已有数组中返回选定的元素，返回一个新数组，包含从start到end（不包含该元素）的数组元素,end为可选参数，该方法不会改变原数组；
    splice()：该方法向或者从数组中添加或者删除项目，返回被删除的项目。（该方法会改变原数组），splice（index,howmany,item1,...itemX），item为可选参数，是向数组添加的新项目。*/
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
