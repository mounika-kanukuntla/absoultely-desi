// funtional programming -- higher order function and callback function
// function x(y){
//     console.log(" x called")
//     y()
// }

// x(function y(){
//     console.log("y called");
    
// }
// )

// by  using the arrow function and self invoking function
// function x()
// {
//     console.log("x called");
    
// }
// x(( ()=> console.log("y called")
// )()); 


// another way of creating the functional programming 
// function x(){
//         console.log(" x called")
//     }
//      x((y)())  // calling a function in another function by using the self invoking function
    
//     function y(){
//         console.log("y called");
        
    //}
    
    // destruturing 

    // var arrName =  [1,[2,3,4],5,6,7]
    // var [,[odd1],, ,odd5] = arrName
    // console.log(odd1,odd5);

    // finding even numbers
    // var x = [[2,3,4],[[[4,5,6]]]];
    // var [[e1] , [[[e3,,e4]]]] = x;
    // var res = [e1,e3,e4];
    // console.log(res);
    
    // assigning with the default value

//     var x = [1,2]
//     var [a,b ,c=6] = x;
//     console.log(a,b,c);
    
//     // swapping 2 arrays

//     var x= [1,2,3]
//     var y = [4,5,6]
//     var [x1, x2, x3 ] = y
//     var [y1,y2,y3] = x
//     var res1 =[x1, x2, x3 ]
//     var res2 = [y1,y2,y3] 
//     console.log(res1);
//     console.log(res2);


//     // destruturing in functions

//     function demo(){
//         return [1,2,3,4,5,6]
//     }
//     var [, x,,,,y] =demo()
//     console.log(x,y);
    
//     //example 1

//     var apiResponse = [ 200, "OK", {userId:1, name:"John Doe"}];
//     var [statuscode, statusmessage, userdata] = apiResponse;
//     console.log(statuscode, statusmessage, userdata);

//     //example2

//     const csvData = "John, Doe, 30, Male";
//     console.log(csvData.split(","))
//     console.log(csvData)
//     var [names,surname,age,gender] = csvData.split(",");
//     console.log(names);
//     console.log(surname);
//     console.log(age);
//     console.log(gender);

//     //example 3

//     var date =new Date(2024, 7, 26, 14, 30, 0);
//     //console.log(date.split(","));
    
//     console.log(date);
//   /// example 4
//     var [ a,b, [c,d,[e,f]]] = [1,2,3,4,5,6];
//     console.log(a,b,c,d,e,f);
    
    
// object destructuring 

var obj = {
    names: "LUCKY",
    age: 24,
    salary : "35K",
    des : "SE"
}
var {age, des,names} = obj;
console.log(names);
console.log(age);
console.log(des);

// exmaple 2

// var obj = {
//     names: "ditha",
//     age : 22,
//     salary : "25k",
//     des: {
//         a:10,
//         b:20,
//         c:30
//     }
// }
// var {age ,des:{c}} = obj;
// console.log(age);
// console.log(c);

// example -3
// var obj = {
//     names: "ditha",
//     age : 22,
//     salary : "25k",
//     x: {
//        data:{
//         a:10,
//         b:20,
//         c:30
//        }
//     }
// }
// var {names ,x:{data:{c}}} = obj;
// console.log(names);
// console.log(c);


//exmaple 4

// var obj ={
//     names: "ditha",
//         age : 22,
//         salary : "25k",
//         skills :{
//             web : ["html", "css", "js"],
//             programming :{
//                 java : 8.9,
//                 python: 2.5,
//             }

//         }
// }
// var {salary, skills:{web:[,,pl]},programming:{python} } = obj;
// console.log(salary);
// console.log(pl);
// console.log(python);


var obj = {
    flowers: ["lilly", "rose"],
    fruits: ["banana","apple"],
    colors: ["red", "yellow"]
}
var { flowers:[item1], fruits:[, item2]} = obj
console.log(item1);
console.log(item2);


function add(a) {
    return function(b) {
        return a + b;
    };
}

// Usage
const addFive = add(5); // Partially applied function
//console.log(addFive(3)); // Output: 8

// Or directly
console.log(add(2)(3)); // Output: 5




    
    
    
    
    





    
    
    
    
    


