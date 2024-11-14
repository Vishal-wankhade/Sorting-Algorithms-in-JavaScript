function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        // Move `i` to the right as long as elements are less than or equal to pivot
        while (arr[i] <= pivot && i < high) {
            i++;
        }

        // Move `j` to the left as long as elements are greater than pivot
        while (arr[j] > pivot && j > low) {
            j--;
        }

        // Swap elements at i and j if i is less than j
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Place the pivot element in its correct sorted position
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j; // Return the pivot's final position
}

function quickSortRecursive(arr, low, high) {
    if (low < high) {
        // Find the partition index
        const pIndex = partition(arr, low, high);
        // Recursively sort elements on both sides of the pivot
        quickSortRecursive(arr, low, pIndex - 1);
        quickSortRecursive(arr, pIndex + 1, high);
    }
}

function quickSort(arr) {
    // Call the recursive quicksort function with initial low and high values
    quickSortRecursive(arr, 0, arr.length - 1);
    return arr; // Return the sorted array
}

// Testing the quickSort function
const arr = [4, 6, 2, 5, 7, 9, 1, 3];
console.log("Before Quick Sort:", arr);
quickSort(arr);
console.log("After Quick Sort:", arr);
