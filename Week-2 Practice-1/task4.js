year = prompt("Enter a year:")

if (year % 100 == 0 && year % 400 == 0)
    console.log(`${year} was a leap year!`);
else if (year % 4 == 0 && year % 100 == 0)
    console.log(`${year} wasn't a leap year!`);
else if (year % 4 == 0)
    console.log(`${year} was a leap year!`);
else
    console.log(`${year} wasn't a leap year!`);