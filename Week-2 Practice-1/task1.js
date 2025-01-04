// Negative or 0 = F
// 1 - 20 = E
// 21 - 40 = D
// 41 - 60 = C
// 61 - 75 = B
// 76 - 90 = A
// 91 - 100 = A+
// 100+ = Invalid (Magician)

// marks = -21   
// marks = 0
marks = 49
// marks = 111
//* Try diff marks

if (marks <= 0)
    console.log("F, Fail.");
else if (marks > 0 && marks <= 20)
    console.log("E, Bad.");
else if (marks > 20 && marks <= 40)
    console.log("D, Poor.");
else if (marks > 40 && marks <= 60)
    console.log("C, Inferior.");
else if (marks > 60 && marks <= 75)
    console.log("B, Good.");
else if (marks > 75 && marks <= 90)
    console.log("A, Great.");
else if (marks > 90 && marks <= 100)
    console.log("A+, Incredible.");
else
    console.log("Probably, You're marks is miscalculated or you've studied in Hogwarts.");