// Program to count each element and its occurance

let arr=['apple','banana','apple','orange','banana','apple','GRAPES'];
let arr_len=arr.length;

let count={};

for(let i=0;i<arr_len;i++){
    if(count[arr[i]]){
        count[arr[i]]++
    }
    else{
        count[arr[i]]=1;
    }
}
console.log(count);
