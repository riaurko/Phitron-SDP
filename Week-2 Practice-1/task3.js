let nums_manual = [2, 12, 6, 9, 15, 7, 14, 8, 5, 18, 20, 4, 13, 16, 1, 17, 3, 19, 11, 10]
let nums_method = [2, 12, 6, 9, 15, 7, 14, 8, 5, 18, 20, 4, 13, 16, 1, 17, 3, 19, 11, 10]

//* There are 2 orders of Sorting: Ascending & Descending. We'll Sort by Ascending now.
//* We can do that in 2 ways: Manually (Pure Code) & Functionally (Method)

//* Manually (Inefficient, Bcz it does Selection Sort which is O(N * N))
for (let i = 0; i < 19; i++) {
    for (let j = i + 1; j < 20; j++) {
        if (nums_manual[i] > nums_manual[j]) {
            let temp = nums_manual[j]
            nums_manual[j] = nums_manual[i]
            nums_manual[i] = temp
        }
    }
}
console.log(...nums_manual);  // Test it

//* Functionally (Efficient, Bcz it uses TimSort which is O(N logN))
nums_method.sort((x, y) => x - y)
console.log(...nums_method);