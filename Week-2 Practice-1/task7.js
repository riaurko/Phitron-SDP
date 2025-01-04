const nums = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const frequency = {};

nums.forEach((num) => {
    if (frequency[num] == undefined)
        frequency[num] = 1;
    else
        frequency[num]++;
});

const uniques = nums.filter((num) => frequency[num] === 1);

console.log(...uniques);