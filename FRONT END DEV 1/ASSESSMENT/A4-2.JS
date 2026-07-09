// Program to find two largest number

let arr=[16,42,36,37,11,18];
let arr_len=arr.length;

let first= -Infinity;
let second= -Infinity;

for(let i=0; i<arr_len;i++){
    if(first<arr[i]){
        second=first;
        first=arr[i];
    }
    else if ( second<arr[i]&& first>=arr[i]){
        second=arr[i];
    }
}
 console.log("first:%d\nsecond:%d",first,second);