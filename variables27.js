// {
//     var x = 10;
//     console.log(x);
    
// }
// console.log(x);

// {
//   let x = 10;
//   console.log(x); 
// }
// console.log(x);

// {
//     const x = 10;
//     console.log(x); 
//   }
//   console.log(x);

// var a;
// var b;
//  a =10, b=20;
// console.log(a,b); // var and let allows us to initialise in two different lines


// const a = 10; // const doesnt aloows to initialise in another line both declaration and intialization should be done in same line


// var/ let a =10;
// console.log(a);
// a=20;  // re-initialization and updation is possible in var and let keywords 

// const a=10;
// console.log(a);
// a=20;  // re-initialization and updation is not possible in const keyword since it is immutable 


// var a = 10;
// var a =30;
// console.log(a); // it allows the duplicates so it is not recommendable


// let b; 
// let b ; // it does not allow duplicates and throws an error called syntax error

// const a;
// const a =19;  // it is same like let but const is more likely to  use for the data that is not used for re-intialization and the data that is same forever. 

// console.log(a);
// var a = 10;
// console.log(a);
// console.log(b);
// let b = 20;
// console.log(b);
// console.log(c);
// const c = 30;
// console.log(c);
// console.log(c);


// ... operator 
// using spread operator in arrays and objects
let arr1 = [1,2,3,4,5,6];
let arr2 = [true , false];
let arrcombined = [...arr1,...arr2];
console.log(arrcombined);
let obj1 = {
    a:10, 
    b:20
}
let obj2 = {
    x:10,
    y:20
}
let objcombined = {...obj1,...obj2}
console.log(objcombined);

//example 1
let fruits = ["banana", "apple", "pineapple"];
let vegees = ["tomato", "potato", "brinjal"];
let fruitss = [...fruits,...vegees];
console.log(fruitss);

//example 2

let obje = {
    Name : "Mounika",
    branch:"CSE",
    place:"Warangal",
};
let skills =[ "java","python","javascript"];
let mine = [...skills,{...obje}];
let minee = {...obje,...skills}
console.log(mine);
console.log(minee);

// example 3
let  brands=["puma", "adidas", "dior"];
let brandss=[];
let copy = [...brands];
console.log(copy);

//example 4
  let number = [2,3,4];
  let num = [ 0,1,...number,5];
  console.log(num);    

  //example 5

  let arr = [1,2,3,4,5,6];
  console.log(arr);
  arr[9]= "helloo";
  console.log(arr);
  let copyy = [...arr];
  console.log(copyy);
  

  //example 6
  let object = {
    Name : "pandu",
    batch: "cse",
    des: "warangal"
  }
  console.log(object);
  object1 = {Name: "Lithil Sagar Naik"};
  console.log(object);
  
  let coppy = {...object,...object1}
  console.log(coppy);

  //example 7
  function sum(a, b, c) {
    return a + b + c;
  }
  
  let numbers = [1, 2, 3];
  console.log(sum(...numbers)); 

  //example 8
  const objee = { a: 1,
                 b: 2 };
let objee1 = { c: 3,
                 d: 4 };

let combinedObj = { ...objee, ...objee1 };
console.log(combinedObj); 

//example 9
function sum(...num) {
  return num.reduce((ac, cur) => ac + cur);
}
console.log(sum(1, 2, 3, 4)); 

//example 10
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);   
console.log(b);   
console.log(rest); 

//example 11
let array =[2,3,4,5,0,9,9,3,494,293,8,3];
let [val1, , val2, , ...val3] = array;
console.log(val1);
console.log(val2);
console.log(val3);

// example 12
let array1 = [1, 2, 3];
let obj = { ...array1 }; 

//example 13
let dates = [2002, 1,20];
let d = new Date(...dates)

//example 14
let arr = [1, 2, 3];
let array2 = [...arr]; 
arr2.push(4);

//example 15
let arr3 = [0, 1, 2];
let arr4 = [3, 4, 5];
arr3 = arr3.concat(arr4);

//example 16
function greet(message, ...names) {
  console.log(message);
  console.log(names);
}
greet("Hello", "bye", "good", "mounika");

let  [first, ...rests] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rests);  // [2, 3, 4, 5]

//example 17
let array4 = [1, [2, 3, 4], 5];
let [one, [two, ...num1], three] = array4;
console.log(one);  // 1
console.log(two); // 2
console.log(num1);   // [3, 4]
console.log(three);  // 5

//example18
order({ a: 1, b: { c: 2, d: 3 }, e: 4 });
function order({ a, b: { c, ...restB }, ...rest1 }) {
  console.log(a);       
  console.log(c);     
  console.log(restB);  
  console.log(rest1);   
}

//example 20
let data = { user: { id: 1, name:"rohini" }, skills: "html" };
let { user: { id: userId, ...restUser }, ...rest2 } = data;
console.log(userId);       
console.log(restUser);   
console.log(rest2); 
let res={userId,restUser,rest2};
console.log(res);









  
  
  
  
  
  

  









