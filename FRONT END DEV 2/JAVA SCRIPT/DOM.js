//                           Document Object Model ( DOM)
//                   Html -->  Browser --> Object tree --> to control all  task
//                                      document
//                                          |
//                                      Root element (html)
//                                        |                            |
//                                        Head tag                     body tag
//                                        |            |
//                                      Title tag      Mega tag

const { startTransition} = require("react");




// Why dom tree is important ?

// with the help of js dom you can -
// 1. change html elements 
// 2. change css
// 3. add new elements
// 4. Delete items as well
// 5. handls events as well  



// To select dom elements 
 document.getElementById('');
 document.getElementsByClassName("text")
 document.querySelector('');
 document.querySelectorAll('');
 document.getElementByTagName('');
 document.createElement("li")



// Remove Element Method : when we want to remove any element from dom tree .
// element.remove();



// Event listener in Java script ()- 
//                                 when there is any event happenimg like i.e button clicking ,mouse clicking ,hovering
//                                 so after this type of events if we want to perform some task then we have to use event listeners 
// tasklist.addEventListener("click",.....the task you want to be)


//  Synchronous vs Asynchronous

console.log("1")
console.log("2")
console.log("3")

//   -In synchronous PROGRAMMING each line will be executed after its previous line.
//    there are some task that can take some time :
//   * Api call 
//   * Database   




// code of asynchronous programming -:

console.log("start");
setTimeout ( ()=>{
    console.log("Inside TimeOut");
},2000);
console.log("End");

// o/p-> (output)

// start
// End
// Inside TimeOut

//    Note :Asynchronous programming is known as not blocking programming as well


// callback function ()- so when we are passing a function as an argument to another function that called callback function.

function ReadResult(res1,res2){
    const val=res1+res2;
    console.log(val);
}
function sayHi(){
    console.log("HI")
}

ReadResult();

//  Difference Table :-
// | Feature    | Synchronous | Asynchronous   |
// | ---------- | ----------- | -------------- |
// | Execution  | One by one  | Multiple tasks |
// | Waiting    | Yes         | No             |
// | Speed      | Slower      | Faster         |
// | Complexity | Simple      | Complex        |
// | Example    | Phone Call  | Email          |


// Synchronous: Tasks execute one after another and wait for completion.
// Asynchronous: Tasks execute independently without waiting for completion.

