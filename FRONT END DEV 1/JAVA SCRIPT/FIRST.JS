//                                                            "Java script"
                                                                       
//          "A programming language used to interpret the html & CSS and provide dynamicity to your webpage."   
//                                                             or
//            "A language of web which can manipulate validate & calculation the data.""

// -------------------------------------------------------------------------------------------------------------
  
//     VARIABLES :-
//   . Let
//   . var
//   .const( constant value i.e value cannot be changed  )

//   -----------------------------------------------------------

//   if-else
//     if(true){
//   console.log('true');
//   }
//   else{
//     console.log('false')
//   }




//    if(condition){
//   console.log('true')
// }
//    else if(condition 2){
//      console.log('    ')
// }
//      else{
//        console.log('    ')
//       }
// ------------------------------------------------------       
                     
//    ==                                      === IT IS CALLED STRICTLY EQUALITY OPERATOR
// .   it compares only value                  It compares VALUE + DATATYPE
//   EXAMPLE( 5=="5"-> TRUE  )                   EXAMPLE(5==="5"-> FALSE)
// ---------------------------------------------------------

     
//                               " DATA TYPES" 

//                           +----------------------+
//                            |   JavaScript Data    |
//                            |        Types         |
//                             +----------+-----------+
//                             |
//                             -------------------
//                             |                 |
//                          Primitive        Non-Primitive
//                            |                 |
//                           Number            Object
//                           String            Array
//                           Boolean           Function
//                           Undefined
//                           Null
//                           BigInt
//                           Symbol

  

// PRIMITIVE = Primitive data types store single values and are immutable.     
                                                                                     
// 1)NUMBERS     =   Used to store numeric values (integer or decimal).
let a = 10;
let b = 3.5;

// 2)STRING      = Used to store text.   
let name = "Rohit";
           
// 3)BOOLEAN     = Stores true or false.
 let isActive = true;
              
// 4)BigInt      = Used for very large integers.
let bigNum = 12345678901234567890n;

// 5)Null        = Represents empty or no value (intentional absence).
let y = null;

// 6)SYMBOL      = Used to create unique values.
let id = Symbol("id");

// 7)Undefined   = Declared variable but no value assigned. 
let x;




// | NON-PRIMITIVE   =    These can store multiple values and are mutable.
// 1) OBJECT     = Stores data in key-value pairs.
let student = {
  name: "Rohit",
  marks: 90
};

// 2) ARRAY      = Stores multiple values in a single variable.
let colors = ["red", "green", "blue"];

// 3) FUNCTIONS  = A block of reusable code.
function add(a, b) {
  return a + b;
}


// ---------------------------------------------------------------------------------------                             

// .                                         VARIABLES
// .      let          |              var                      |                   const
//  let a=5            |            var a=5                    |                  const a=5
//a='btech'            |            a='btech'                  |                 a='btech'          
//let a=7              |            var a=7                    |                  const a=7

// ----------------------------------------------------------------------------------------------------


//                                       "STRING METHOD IN JS"
// 1)
// - LENGTH
//    let a=hello
//    console.log(a.length)
   
// 2)
// - to uppercase()
// console.log (a.to UpperCase()

// 3)
// - to Lowercase()
// console.log (a.to LowerCase()

// 4)
// - charAt()                                                               let a='hello'
//  console.log(a.charAt(1))                                                       01234
//  console.log(a.charAt(3))

//  5)
// .    slice - to take a substring out
// .     a.slice(start Index, end Index)
// .                              |
// .                            (not included)
// console.log(a.slice(0,3))
// console.log(a.slice(1,4))     

// 5)
//  includes() = to search for a substring in a string

//  console.log(a.include('el'))
// console.log(a.include('le'))

// -----------------------------------------------------------------



//                                                     " ARRAY in js "
// 1)
// LENGHTH

// let a=[1,2,3,true,'hello',7.2]
// console.log(a.length)
// console.log(a[0])
// console.log(a[3])
// console.log(a[5]) 

// -----------------------------------------------------------


// let a=[1,2,3,true,'btech']
// for(let i=0;i<a.length;i++){
//  console.log(a[i]); 
              
// -------------------------------------------------------------------
 
// pop     =  it is used to remove last element.
// push    = it is used to add an element from start .
// shift   = remove the first element from start .
// unshift = add an element from the start.

// --------------------------------------------------------------

// Example=
// let a=[1,2,3,4,true,'hello']
// console.log(a.length)
// a.pop()
// console.log(a)
// a.push('ai/ml')
// console.log(a)
// a,shift()
// console.log(a)
// a.unshift(9.906)
//  console.log(a)

// -------------------------------------------------------------

// slice =  it is used to take a sub-Array out from an array.
// splice = it dosen't modify the original array.
// .         console.log(a.slice(3,5)
//  splice (start Index,deletecount,newElement)


//   a.splice(1,2,'hey','nsd',90);
//   console.log(a)


//                                                       "FUNCTION"
// .                                                       ---------                                          
//  function Hello() {
//   console.log('Hello');
//   }
//   Hello() - function cell
//   -------------------------------------
// .          or

// ----------------------------------------
//  function Hello(name) {
//  return 'Hello'+name;
//   }
//   let result=Hello(' geeta')
//   console.log(result);

// ---------------------------------------------

//  Default parameter

//   function Hello(name='btech') {
//   console.log('Hello'+name);
//   }
//   Hello() 
//   Hello('geeta')

// -----------------------------------------------------------------------


//   "Function Declaration"          |                 Function Expression                         
//    --------------------           |                ------------------
//  function Hello(){                |               let Hello=function(){
//  console.log('hi')                |                console.log('hi')
// }                                 |              }
//  Hello()                          |                  Hello()
                                  
// --------------------------------------------------------------------------------


// .                                                                " ARRAY FUNCTION "

// ------------------------
//  const Hello =() => {
//   console.log ( hi ) ;
//   }
//   Hello();

// ------------------------
//  * pass 2 numbers as parameter and print resultant using all 3 fn *

//  const add =() => {        |          function add ()  { 
//   console.log (a+b) ;      |           console.log (a+b) ;
// }                          |         }
//   add(5,3);                |          add(5,3);



//   to acces a pearticular 
//   key value
//   ----------------------
//   console.log(a.name)
//   console.



/*

 D O M (Document Object Model)
`1)  A tree like structure that represent your webpage
 2) using DOM you can modify ,access  delete Html elements
 
  DOCUMENT OBJECT MODEL( D O M)
  
A TREE LIKE STRUCTURE THAT REPRESENT YOUR WEBPAGE

USING DOM YOU CAN MODIFY, ACCESS, DELETE HTML ELEMENTS..................................................................................


document.getElementById('');


document.querySelector('');


document.querySelectorAll('');

*/



 