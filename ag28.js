//  // instead of using for loop we make use of for (in) to retrieve the index values and for(of ) for values of the array 
// //  let arr = [10,20,30,40,50]
// // for( let i=0;i<=arr.length;i++)
// // {
// //     console.log(arr[i]);
// // }
// // for( x in arr){
// //     console.log(x);
    
// // }

// // for (y of arr)
// // {
// //     console.log(y);
    
// // }

// //map method
// let arr = [10,20,30,40,50];
// arr.map((x,y,z)=> console.log(x+1)); //where x indicates the new variable value and y indicates the index values and z indicates the original values
// arr.map((x,y,z)=>console.log(x))
// arr.map((x,y,z)=>console.log(y))
// arr.map((x,y,z)=>console.log(x+1,y,z)) //this can be also considered as the "deep copy" since there will be no chnages to the original array


// //square of each value of an array
// let arr1 = [1,2,3,4,5];
// arr1.map((x,y)=> console.log(x*x))

// //double each value of an array
// let arr2 = [1,2,3,4,5];
// arr2.map((x=>console.log(x*2)));

// // changing the array values to the upper case
//  let arr3 = ["mounika","lithil"]
// arr3.map((x=>console.log(x.toUpperCase())));

// // multipling the value with the index values
// let arr5 = [1,2,3,4,5];
// arr5.map((x,y)=>console.log(x*y))

// //
// let arr4 =[{
//     names:"mounika",
//     age:22
// }, 
// {
//     names:"nikki",
//     age:21
// }, 
// {
//     names:"rohini",
//     age:23
// },
// {
//     names:"teju",
//     age:22
// } ]

// arr4.map((x,y)=>console.log(x.names.toUpperCase()))
// arr4.map((x,y)=>console.log(x.age+1))


// let products =[
//     {id:1, names:"laptop",price:1200},
//     {id:2, names:"phone",price:800},
//     {id:3, names:"tablet",price:600}
// ];
// let data = products.map(product =>({
//     name:product.name,
//     price: product.price
// }));
// console.log(data);

// // multiplying the values of price and quantity
// let cart = [
//     {item: "laptop",price: 1200, quantity:1},
//     {item: "tablet",price: 800, quantity:2},
//     {item: "phone",price: 600, quantity:3}
// ];
// let data1 = cart.map(cart1 =>({
//     item:cart1.item,
//     total :cart1.price*cart1.quantity

// }))
// console.log(data1);

// // printing the ascii values fr the string
// let inputString = "hello";
// let ip = inputString.split("")
// console.log(ip);
//  let ipp=ip.map((x=>x.charCodeAt()));
//  console.log(ipp);

//  // printing the values using the boolean type
//  const users =[
//     {name: "alice", age: 25},
//     {name: "bob", age: 12},
//     {name: "charlie", age: 30}
//  ];

//  let user = users.map(x=>({
//     name: x.name,
//     age: x.age,
//     isAdult: x.age>=18

//  }));
//  console.log(user);

//       // anther way of wrapping
//     //   users = users.map(x=>18{
//     //     return {
//     //         ...x,
//     //         isAdult: x.age>=18,
//     //     }
//     //     }      })

// //FILTER METHOD

// //even numbers
// let arr6 = [1,2,3,4,5,6,7];
// arr6 = arr6.filter(x=>x>2)
// console.log(arr6);
// arr6 = arr6.filter(x=>x%2 ==0)
// console.log(arr6)

// let arr7 = [1,2,3,4,5,6,7];
// arr7.filter((x,y,z)=>
// console.log(x))

// //printing the persons who age is above 25 by using filter
// let people = [
//     {names : "Alice",age : 25},
//     {names : "bb",age : 30},
//     {names : "charlie",age : 35},
//     {names : "david",age : 40}
// ];
// people=people.filter(x=>x.age>25);
// console.log(people);


// //multiples of 10
// let numbers  = [10,22,30,45,50,65]
// numbers = numbers.filter(x=>x%10==0)
// console.log(numbers)

// //print the words with more than or equal to 5
// let words = ["Apple", "banana", "pear", "grape", "kiwi"];
// words = words.filter(x=>x.length>=5)
// console.log(words)

 

// // boolean is constructor which removes all the false values from the array
// let arr8 = [ "mounika", 0, 5,7, "kanukuntla", false]
// arr8= arr8.filter(Boolean)
// console.log(arr8)
 
// //greater than 0
// let number = [-3,-2,4,5,-8,10]
// number = number.filter(x=>x>0)
// console.log(number)

// //duplicates
// let numberss = [ 1,2,2,3,4,4,5,5]
// numberss = numberss.filter((x,y,z)=>z.indexOf(x)===y)
// console.log(numberss);

// //common words
// let wordss = ["apple", "banana", "grape","pineapple" ]
// wordss= wordss.filter(x=>x.includes("apple"))
// console.log(wordss);

// //odd values
// let elements = ["a" ,"b" ,"c", "d","e"];
// elements = elements.filter((x,y)=>y%2==0)
// console.log(elements);

// // 
// let mixedArray = [1,"two", 3, "four", true, false, undefined, null];
// let ma1 = mixedArray.filter(x=>typeof(x)==="string")
// console.log(ma1)
// let ma2 = mixedArray.filter(x=>typeof(x)==="number")
// console.log(ma2);
// let ma3 = mixedArray.filter(x=>typeof(x)==="boolean")
// console.log(ma3);


// //
// let data2 = [1,2,undefined, false,4,null,6,undefined,8];
// data2 = data2.filter(Boolean)
// console.log(data2)

// //
// let nestedArray = [[1,2],[3,4],[5],[],[6,7,8]];
// nestedArray = nestedArray.filter(x=>x.length>1);
// console.log(nestedArray);

// //
// let scores = [45,78,88,92,55,33,87];
// scores = scores.filter(x=>x>=55&&x<=88);
// console.log(scores);

// //
// let wordsss = ["madam", "racecar","apple", "level", "banana"];
// wordsss = wordsss.filter(x=>x===x.split("").reverse().join(""))
// console.log(wordsss)

// //
// let usersss = [
//   {id : 1, profile: {age:25}},
//   {id : 2, profile: {age:30}},
//   {id : 3, profile: {age:35}},
//   {id : 4, profile: {age:28}}

// ];
// usersss = usersss.filter(x=>x.profile.age==35)
// console.log(usersss)

// // 
// let word = ["tree", "sun","mountain","lake"];
// word = word.filter(x=>x.length==3)
// console.log(word)

// REDUCE METHOD here 4 parameters are passed a is cuurent value/accumulator, b is next current value, c is index of current    value and d is whole array

let x = [10,20,30,40]
x=x.reduce((a,b,c,d)=>{
    return a+b;
},"hii")
console.log(x);

// example 1
let numbers =[1,2,3,4,5,6,7,8,9,10];
numbers=numbers.filter(x=>x%2==0).map(x=>x*x);
console.log(numbers)

//example 2
let people = [
    {name : "alice", age : 22},
    {name : "bob", age : 17},
    {name : "charlie", age : 30},
    {name : "david", age : 15}
];
people = people.filter(x=>x.age>20).map(x=>x.name)
console.log(people);

//example 3
let words =["hello", "world","javascript","is","awesome"];
words = words.filter(x=>x.length>2).map(x=>x.toUpperCase())
console.log(words)

//example 4
let products = [
    {name : "book",price: 15},
    {name : "pen",price: 2},
    {name : "notebook",price: 25},
    {name : "backpack",price: 50},
    {name : "pencil",price: 1},
];
products = products.filter(x=>x.price<=15).map(x=>({
    name : x.name,
    price:x.price-(0.1*x.price),
}))
console.log(products)

//example 5
let rawData = ["hello", "world","",null,undefined,"javascript"];
rawData = rawData.filter(Boolean).map(x=>x.trim())
console.log(rawData);

//example 6






