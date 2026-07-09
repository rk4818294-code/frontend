function sayHello() {
    console.log("hello");
}

sayHello();

function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
console.log("Hello ", "World");

function product(a, b) {
    return a * b;
}

let product1 = (a, b) => a * b;

console.log(product1(2, 6));
console.log(product1(12, 45));

function a(d) {
    d();
    console.log("inside a");
}
function b() {
    console.log("inside b");
}
a(b);

function outer(){
let count=0;
function inner(){
    count++ ;
    console.log(count);
}
return inner;
}


let res=outer();
res();
res();
res();
res();
res();
