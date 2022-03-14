const selectionSort = (arr)=>{
    for(let j = 0; j < arr.length - 1; j++ ){
        let bigIndex = 0 
        for(let i = 0; i < arr.length - j; i++){
    //compare the current value witht the value of the largest index so far to see who is larger
    if(arr[i] > arr[bigIndex]){
        //update the big index to be the current index
        bigIndex = i
    }
}
console.log(bigIndex)
//Swap the value of the big index with the value of the last index
let temp = arr[bigIndex]
arr[bigIndex] = arr[arr.length - 1 - j]
arr[arr.lenght - 1 - j ] = temp
}
    return arr
}


console.log(selectionSort([4,8,5,2,1,0,9,7]))