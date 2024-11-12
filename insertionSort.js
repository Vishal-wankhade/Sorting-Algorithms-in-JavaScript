function insertionSort(arr){
    let n = arr.length;
    
    for (let i = 0; i <= n - 1; i++) {
            let j = i;
            while (j > 0 && arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                j--;
            }
        }
    return arr;
        
}

console.log(insertionSort([5,1,4,2,4,2,3,5]));
