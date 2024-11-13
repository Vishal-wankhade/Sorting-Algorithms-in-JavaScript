// Merge function to merge two sorted halves of the array
function merge(arr, low, mid, high) {
    let temp = []; // Temporary array to store the merged result
    let left = low; // Starting index for the left subarray
    let right = mid + 1; // Starting index for the right subarray

    // Compare elements from both subarrays and push the smaller one to temp
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]); // If left element is smaller, add it to temp
            left++; // Move left pointer to the next element
        } else {
            temp.push(arr[right]); // If right element is smaller, add it to temp
            right++; // Move right pointer to the next element
        }
    }

    // Copy any remaining elements from the left subarray (if any)
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    // Copy any remaining elements from the right subarray (if any)
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // Copy the sorted elements back to the original array from temp
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low]; // i - low ensures correct index in temp array
    }
}

// Divide function to recursively split the array into halves
function divide(arr, low, high) {
    // Base case: If the subarray has only one element, return (already sorted)
    if (low >= high) {
        return;
    }

    // Calculate the middle index to split the array
    let mid = Math.floor((low + high) / 2);

    // Recursively divide the left half
    divide(arr, low, mid);

    // Recursively divide the right half
    divide(arr, mid + 1, high);

    // Merge the two sorted halves
    merge(arr, low, mid, high);
}

// Main function to perform merge sort on the input array
function mergeSort(arr) {
    let n = arr.length; // Get the length of the array
    divide(arr, 0, n - 1); // Start the divide process on the full array
    return arr; // Return the sorted array
}

// Example usage of mergeSort
console.log(mergeSort([4, 3, 2, 1])); // Output: [1, 2, 3, 4]
