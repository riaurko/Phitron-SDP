divisible35 = []
for (let num = 1; num <= 50; num++) {
    if (num % 3 == 0 || num % 5 == 0)
        divisible35.push(num)
}
console.log(...divisible35);