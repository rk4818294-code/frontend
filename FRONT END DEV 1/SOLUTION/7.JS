//MERGE 2 SORTED ARRAYS INTO 1 SORTED ARRAY (JS)
let a = [1, 3, 5];
let b = [2, 4, 6];
let result = [];
let i = 0, j = 0;

while (i < a.length && j < b.length) {
  if (a[i] < b[j]) result.push(a[i++]);
  else result.push(b[j++]);
}

while (i < a.length) result.push(a[i++]);
while (j < b.length) result.push(b[j++]);

console.log(result);