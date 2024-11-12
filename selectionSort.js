function selectionSort(arr){
    let n = arr.length;
    
    for(let i = 0; i < n - 1; i++){
        
        let min_idx = i;
        
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[min_idx]){
            min_idx = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp
    }
    return arr;
}

console.log(selectionSort([2,6,4,8,11,4,55,4,7]));

// Output : [ 2, 4,  4,  4, 6, 7, 8, 11, 55 ]
