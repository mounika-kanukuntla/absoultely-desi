// example 1

function operation(a, b, op) {
    return op(a, b);
}
// Example operations like addition and multiplication
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}
var result1 = operation(5, 3, add);     
var result2 = operation(5, 3, multiply); 

console.log(result1); 
console.log(result2); 

//example 2

function radius(value, calculationMethod) {
    return calculationMethod(value);
}
var Diameter = (dia) => dia / 2;
var dia = 10;
var res = radius(dia, Diameter);
console.log(` Diameter of a circle: ${res}`);

// example 3
function x(value, calculationMethod) {
    return calculationMethod(value);
}
 var Circumference = (circumference) => circumference / (2 * Math.PI);
 var circumference = 31.4;
 var res = radius(circumference, Circumference);
 console.log(`Circumference of a circle: ${res}`); 

 //example 4
 function radius(value, calculationMethod) {
    return calculationMethod(value);
 }
 var Area = (area) => Math.sqrt(area / Math.PI);
 var area = 78.5;
 var res = radius(area, Area);
 console.log(` Area of a cirlce: ${res}`); 

 //example 5

var numbers=[1, 2, 3, 4, 5,6,7,8,9];
var squareNumbers=numbers.map((number) => number * number);
console.log(squareNumbers); 

//example 6
var numbers=[1, 2, 3, 4, 5];
var evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// example 7

function x(){
        console.log(" x called")
    }
     x((y)())  
    
    function y(){
        console.log("y called");
        
    }

// example 8

function x()
{
    console.log("x called");
    
}
x(( ()=> console.log("y called")
)()); 

// example 9 

function x(y){
    console.log(" x called")
    y()
}

x(function y(){
    console.log("y called");
    
}
)

// example 10
var numbers = [1, 2, 3, 4];
var sum = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);

console.log(sum);

// example 11
function x(){
    console.log("welcome to my world");
    
}
x((function y()
{
    console.log("amazing world!!!!!!")
})())

//example 12

function a(b){
    var x  = 10;
    var res = x* x
}
a(b)
function b()
{
    console.log(res); 
}

// example 13

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers); 


// example 14

var s = [1, 2, 3, 4, 5,15, 6,20,7, 8, 9,10];
var t = s.filter((number) => number % 5== 0);
console.log(t);

// example 15

function outer(inner){
    var x=20;
    var y=80
    var sum=x+y
    inner()
}
outer(function inner(a,b){
    var c=10;
    var d=20;
    var sum1=c+d
    console.log(sum1);
})

// example 16
function applyFunction(fn, value) {
    return fn(value);
}

function square(x) {
    return x * x;
}

console.log(applyFunction(square, 5));

// example 18
function higher() {
    return function regular() {
      console.log('Hello world!')
    }
  }
  
  var a = higher() // won't print anything
  a() // Hello world!

  //example 19
function hof(callback) {
    callback();
}
function cbf() {
    console.log("Callback function is executed.");
}
hof(cbf);

   // example 20
var callback = (n) => {
    return n ** 2
}
function cube(callback, n) {
    return callback(n) * n
}
  console.log(cube(callback, 3))




  // currying examples

  function currying(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
}

// Usage
const result = currying(1)(2)(3);
console.log(result); // Output: 6




