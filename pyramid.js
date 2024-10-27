let rows = prompt("Enter the number of rows");

let odd_numbers = [];

for (let j = 1; j <= rows; j++) {
  for (let i = 1; odd_numbers.length < rows; i += 2) {
    odd_numbers.push(i);
    console.log(odd_numbers.join(" "));
  }
}
