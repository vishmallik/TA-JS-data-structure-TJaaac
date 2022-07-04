// 1. Create an array named numbers and store 5 number values in it
let numbers = [10, 54, 47, 24, 11];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
sum = 0;
let count = 0;
for (let number of numbers) {
  count++;
  sum += number;
}
console.log(sum / count);
// 4. Find the highest number in the array and print it to the console using console.log()
let max = 0;
for (let number of numbers) {
  if (number > max) {
    max = number;
  }
}
console.log(max);
// 5. Find the lowest number in the array and print it to the console using console.log()
let min = Infinity;
for (let number of numbers) {
  if (number < min) {
    min = number;
  }
}
console.log(min);
// 6. Find the even numbers in the array and print them to the console using console.log()
for (let number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()
for (let number of numbers) {
  if (number % 2 !== 0) {
    console.log(number);
  }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for (let number of numbers) {
  if (number % 5 === 0) {
    console.log(number);
  }
}

// 9. Log all the element of the array one by one
for (let number of numbers) {
  console.log(number);
}
// 10. Find all the number in the array that is divisible by 3
let add = 0;
for (let number of numbers) {
  remainder = number % 10;
  quotient = Math.floor(number / 10);
  add = remainder + quotient;
  if (add % 3 === 0) {
    console.log(number);
  }
}
