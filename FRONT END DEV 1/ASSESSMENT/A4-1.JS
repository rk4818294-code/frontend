// Merge 2 sorted array into 1 array

let arr1= [32,28,3,50,49,39,20];
arr1.sort((a,b)=>a-b);

let arr2=[12,8,40,2,19,4,27,45];
arr2.sort((a,b)=>a-b);

let arr3= arr1.concat(arr2);
arr3.sort((a,b)=>a-b);

console.log(arr3);