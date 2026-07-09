//PROGRAM TO COUNT EACH ELEMENT & OCCURRENCE (JS)
let arr = [1, 2, 2, 3, 3, 3];
let count = {};

for (let i = 0; i < arr.length; i++) {
  count[arr[i]] = (count[arr[i]] || 0) + 1;
}

console.log(count);