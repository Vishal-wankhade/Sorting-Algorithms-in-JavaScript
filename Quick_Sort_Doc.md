# QUICK SORT
# Definition:
Quick Sort is a popular, efficient, and comparison-based sorting algorithm that follows the divide-and-conquer approach. It selects a "pivot" element from the array and partitions the other elements into two subarrays, according to whether they are less than or greater than the pivot. The process is then recursively applied to the subarrays, resulting in a sorted array.

# Approach
Choose a Pivot: Typically, the pivot is chosen as the last element of the array, but other choices like the first element, random element, or middle element can also be used.
Partitioning: Rearrange the elements around the pivot so that all elements less than the pivot come before it, and all elements greater come after it. After this step, the pivot is in its correct sorted position.
Recursive Sorting: Recursively apply the quicksort algorithm to the subarrays on either side of the pivot.

# Time Complexity
# Best Case: O(N log N) 
— Occurs when the pivot divides the array into two nearly equal halves at every step.

# Average Case: O(N log N)
— On average, the pivot will split the list fairly evenly, resulting in log N levels of recursion.

# Worst Case: O(N²)
— Occurs when the smallest or largest element is always chosen as the pivot, causing unbalanced partitions (e.g., when the array is already sorted).
Space Complexity

# Space Complexity: O(log N)
due to recursive calls in the call stack for the best and average cases. In the worst case, it can go up to O(N).
