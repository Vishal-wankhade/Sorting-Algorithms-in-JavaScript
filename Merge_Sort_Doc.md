# MERGE SORT

# Definition:
Merge Sort is a divide-and-conquer sorting algorithm that recursively splits an array into smaller subarrays, sorts each subarray, and merges them back together in sorted order. It’s particularly effective for sorting linked lists or large data sets and guarantees O(n log n) performance in the average and worst cases.

# Approach:

# Divide:
Recursively split the array into two halves until each subarray has one element (base case).

# Conquer: 
If a subarray has more than one element, continue dividing until reaching subarrays of single elements.

# Merge:
Once the subarrays are reduced to single elements, start merging them in sorted order. Each merge operation takes two sorted arrays and combines them into one sorted array.
The algorithm ensures that after each merge, the resulting subarray is sorted. This process continues recursively up the call stack until the entire array is merged into a single sorted array.

#  Time Complexity:

# Best Case: O(n log n) — Since the array is always divided in half and merged, it will always take this time regardless of the initial order.
# Average Case: O(n log n) — As each level of division takes O(log n) steps and merging at each level takes O(n), this gives O(n log n).
# Worst Case: O(n log n) — Similar to the average case, regardless of input order, n log n comparisons are needed.

# Space Complexity:
O(n) — Requires additional space proportional to the array size for temporary storage during merging. This makes it less space-efficient compared to in-place algorithms like Quick Sort.
Pros:

# Guarantees O(n log n) time complexity for all inputs.
# Stable sort: it preserves the relative order of elements with equal keys.
# Cons:
# Not an in-place sort: requires additional storage, which can be costly for large datasets.
# Merge Sort is generally used when stability is required, or when working with linked lists, where its non-in-place nature is less of an issue.
