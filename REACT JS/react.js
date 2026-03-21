//                                                                     React JS

// why we have to use react 

// because :
// It provides Component-Based Architecture.
// It provides virtual dom .
// It provides great support of different libraries .
// Example -  Facebook , Instagram ,Netflix




//                        Component-based architecture

// It is piece of code that will br used again & again
// Types :
// 1. class based structure
// 2. functional component



// virtual dom                                                                                                   ( important : what is virtual dom)
// it is light weight copy of actual dom
// with help of virtual dom reformation will be decreased




// React Component :
//                React component are just like a basic structure for every element that you are creating and you want to use it again and again

// class based component :
//  class based component  are E56 classes used to create components in react js 
// they were the older way (before react hooks )
// Example : 
// import react {component}from "react";
class Mypage extends component{
    render(){
        return(
            <h2>This is first class-based- component </h2>
        )
    }
}
export default Mypage;


// function components :
//                      function components are simple javascript function that return JSX( javascript XML).
//                      Mordern react uses function components and hooks .

// Example :
import React from "react";
function MyFirstPage(){
    return(
        <div>
            <h2>This is first functional component</h2>
        </div>
    )
}
// export default  MyFirstPage ;

// Difference in class based v/s functional based 
// feature                         components                                      functional component 

// syntax                           Es6 class                                        simple function 
// state                            this.state                                       useState()
// code length                      more verbose                                     short & clear
// performance                      slightly heavier                                 faster(mordern)
// readability                      Complex                                          Easy
// hooks support                    NO                                               yes