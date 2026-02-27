let a = 5;
let b = 6;
let c = 7;
(a%5==0) ? console.log(true) : console.log(false);

(a%2==0) ? console.log("Even") : console.log("Odd");

(a>=0) ? console.log("Positive") : console.log("Negative");

if (a>= b && a>=c){
    console.log("a")
}else{
    if(b>=c && b>=a){
        console.log("b")
    }else{
        console.log("c")
    }
}