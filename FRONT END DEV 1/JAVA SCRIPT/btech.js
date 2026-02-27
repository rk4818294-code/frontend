let a= document.getElementById('hi')
console.log(a);
a.style.color="blue";
a.style.backgroundColor="yellow";
a.style.padding="2rem";
a.remove()

let b=document.querySelector('p')
console.log(b)
b.style.color="blue"

let c=document.querySelectorAll('p')[2]
console.log(c[2])
c.style.color = "red"
c.style.fontSize = "4rem"

let d= document.createElement('img')
d.src="https://tse4.mm.bing.net/th/id/OIP.H0X7vvdLlAn_Wfi2qXO0kAHaEv?pid=Api&P=0&h=180"
document.body.appendChild(d);







// 10 marks imp
//  array method
//  Map,filter,Reduce
//  let a=[1,2,3,4,5,6]
//  let b=a.map((each=>each*2));
//  console.log(b)