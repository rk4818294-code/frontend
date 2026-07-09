//PROGRAM TO FIND 2ND LARGEST NUMBER IN ARRAY (JS)
let arr = [10, 25, 8, 45, 30];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] != largest) {
    secondLargest = arr[i];
  }
}

console.log("Second Largest:", secondLargest);