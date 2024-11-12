function bubbleSort(arr){
    let n = arr.length;
    
    for(let i = n-1; i >= 1; i--){
         let swapped = false;
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr;
        
}

console.log(bubbleSort([2,6,4,8,11,4,55,4,7]));
// output : [2, 4, 4, 4, 6, 7, 8, 11, 55]
