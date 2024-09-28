// //example1
var arr = [1, 2, 3, 4, 5];
var res = arr.map((num) => num += 10)
console.log(arr); 
console.log(res); 

// //example2

// var users = [
//     {firstName: 'nikitha', lastName: 'bommagani', age: 25},
//     {firstName: 'teju', lastName: 'kothuru', age: 30},
//     {firstName: 'mounika', lastName: 'kanukuntla', age: 35},
//     {firstName: 'rohini', lastName: 'reddy', age: 40}
// ]

// var result = users.map((user) => user.firstName + ' ' + user.lastName)
// console.log(result); 

// //example3
// var numbers = [1, 2, 3, 4, 5];
// var doubledNumbers = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(doubledNumbers);

// //example4
// var words = ['hello', 'world', 'javascript'];
// var upperCaseWords = words.map(function(word) {
//     return word.toUpperCase();
// });

// console.log(upperCaseWords); 


//example5
// var numbers = [4, 9, 16, 25];
// var squareRoots = numbers.map(function(num) {
//     return Math.sqrt(num);
// });

// console.log(squareRoots); 

// //example6

// var numbers = [1, 2, 3, 4, 5];
// var doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers); 

// //example7

// var numbers = [1, 2, 3, 4, 5];
// var stringNumbers = numbers.map(function(num) {
//     return num.toString();
// });

// console.log(stringNumbers); 

// //example8
// var fruit = ["apple", "banana", "cherry"];
// var fruits = fruit.map(function(items) {
//     return items + "s";
// });

// console.log(fruits); 

// //example9
// var words = ['sun', 'moon', 'stars'];
// var wordLengths = words.map(function(word) {
//     return word.length;
// });

// console.log(wordLengths);

//example10
// var arr = [1, 2, 3, 4, 5];
// var res = arr.filter((num) => num % 2) 
// console.log(arr); 
// console.log(res); 

//exampe11

// var users = [
//     {firstName: 'nikitha', age: 20},
//     {firstName: 'teju', age: 22},
//     {firstName: 'mounika', age: 18},
//     {firstName: 'rohini', age: 25},
//     {firstName: 'Dhana', age: 28},
//     {firstName: 'yamuna',age: 33}
// ]
// var output = users.filter(({age}) => age > 20)
// console.log(output);

// //example12

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evenNumbers = numbers.filter(function(num) {
//     var res= num % 2 === 0;
//     return res
// });

// console.log(evenNumbers);

// //example13

// var numbers = [-5, -1, 0, 2, 8, -3, 7];
// var positiveNumbers = numbers.filter(function(num) {
//     return num > 0;
// });

// console.log(positiveNumbers); 

// //example14
// var numbers = [10, 20, 30, 40, 50];
// var greaterThanThirty = numbers.filter(function(num) {
//     return num > 30;
// });

// console.log(greaterThanThirty); 

// //example15

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var oddNumbers = numbers.filter(function(num) {
//     return num % 2 !== 0;
// });

// console.log(oddNumbers);

// //example16

// var names = ['mounika', 'Bhavitha', 'Charitha', 'varshitha', 'varunika'];
// var namesStartingWithC = names.filter(function(name) {
//     return name.startsWith('C');
// });

// console.log(namesStartingWithC);

// //example17

// var numbers = [10, 15, 22, 35, 40, 55, 60];
// var divisibleByFive = numbers.filter(function(num) {
//     return num % 5 === 0;
// });

// console.log(divisibleByFive);

// //example18

// var mixedArray = [1, 'apple', true, 42, 'banana', false, 'cherry'];
// var stringsOnly = mixedArray.filter(function(element) {
//     return typeof element === 'string';
// });

// console.log(stringsOnly);

// //examples19

// var numbers = [-10, 15, -3, 8, -25, 30];
// var positiveNumbers = numbers.filter(function(num) {
//     return num < 0;
// });

// console.log(positiveNumbers); 

// //example20
var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)

console.log(sum); 

// //example21
var numbers = [5, 20, 100, 60, 1];
var maxValue = numbers.reduce((max, curr) => {
    if(curr > max) max = curr;
    return max;
});
console.log(maxValue);

// //example22
var numbers = [1, 2, 3, 4];
var product = numbers.reduce(function(total, currentValue) {
    return total * currentValue;
}, 1);

console.log(product); 

// //example23
// var arrays = [[1, 2], [3, 4], [5, 6]];
// var mixArray = arrays.reduce(function(total, currentValue) {
//     return total.concat(currentValue);
// }, []);

// console.log(mixArray);

// //example24
// var words = ['Hello', 'World','!!!' ,'This', 'Is', 'Nikitha'];
// var sentence = words.reduce(function(total, currentValue) {
//     return total + ' ' + currentValue;
// });

// console.log(sentence); 

// //example25
// var numbers = [15, 8, 42, 4, 23, 16];
// var minValue = numbers.reduce(function(total, currentValue) {
//     return Math.min(total, currentValue);
// }, numbers[0]);

// console.log(minValue); 

// //example26
// var items = [
//     { name: 'Item 1', price: 10 },
//     { name: 'Item 2', price: 20 },
//     { name: 'Item 3', price: 15 }
// ];

// var totalCost = items.reduce(function(total, item) {
//     return total + item.price;
// }, 0);

// console.log(totalCost); 

// //example27
// var booleans = [true, false, true, true, false, true];
// var trueCount = booleans.reduce(function(total, currentValue) {
//     return total + (currentValue ? 1 : 0);
// }, 0);

// console.log(trueCount); 

// //example28
// var numbers = [1, 2, 3, 4, 5];
// var doubledEvenNumbers = numbers
//     .map(function(num) {
//         return num * 2;
//     })
//     .filter(function(num) {
//         return num % 2 === 0;
//     });

// console.log(doubledEvenNumbers); 

// //example29
// var words = ['apple', 'banana', 'cherry', 'date'];
// var longUppercaseWords = words
//     .map(function(word) {
//         return word.toUpperCase();
//     })
//     .filter(function(word) {
//         return word.length > 5;
//     });

// console.log(longUppercaseWords);

// //example30
// var strings = ['short', 'tiny', 'a bit longer', 'much longer string'];
// var shortStringsLengths = strings
//     .map(function(str) {
//         return str.length;
//     })
//     .filter(function(length) {
//         return length < 10;
//     });

// console.log(shortStringsLengths);
// //example31
// var numbers = [1, 2, 3, 4, 5, 9, 16];
// var perfectSquares = numbers
//     .map(function(num) {
//         return Math.sqrt(num);
//     })
//     .filter(function(sqrt) {
//         return Number.isInteger(sqrt);
//     });

// console.log(perfectSquares);

// //example32
// var reviews = [
//     { review: 'Great product!', rating: 5 },
//     { review: 'Not bad', rating: 3 },
//     { review: 'Terrible service', rating: 1 },
//     { review: 'Excellent value', rating: 4 }
// ];

// var positiveReviews = reviews
//     .map(function(review) {
//         return review.rating;
//     })
//     .filter(function(rating) {
//         return rating >= 4;
//     });

// console.log(positiveReviews);

// //example33

// var users = [
//     { name: 'ram', age: 30, score: 85 },
//     { name: 'raju', age: 25, score: 95 },
//     { name: 'priya', age: 35, score: 80 },
//     { name: 'seetha', age: 20, score: 75 }
// ];

// var highScorers = users
//     .filter(function(user) {
//         return user.score >= 80; 
//     })
//     .sort(function(a, b) {
//         return b.score - a.score; 
//     })
//     .map(function(user) {
//         return user.name; 
//     });

// console.log(highScorers); 

// //example34
// var numbers = [1, 4, 6, 8, 10, 3, 5];

// var sortedSquaresOfEvens = numbers
//     .filter(function(num) {
//         return num % 2 === 0; 
//     })
//     .sort(function(a, b) {
//         return a - b; 
//     })
//     .map(function(num) {
//         return num * num; 
//     });

// console.log(sortedSquaresOfEvens); 

// //example35

// var words = ['apple', 'banana', 'kiwi', 'blueberry', 'grape'];

// var sortedUppercaseLongWords = words
//     .filter(function(word) {
//         return word.length > 5;
//     })
//     .sort(function(a, b) {
//         return a.length - b.length; 
//     })
//     .map(function(word) {
//         return word.toUpperCase(); 
//     });

// console.log(sortedUppercaseLongWords);

//example36

// var products = [
//     { name: 'Laptop', price: 999 },
//     { name: 'Mouse', price: 25 },
//     { name: 'Keyboard', price: 75 },
//     { name: 'Monitor', price: 300 }
// ];

// var affordableSortedProductNames = products
//     .filter(function(product) {
//         return product.price <= 100; 
//     })
//     .sort(function(a, b) {
//         return a.price - b.price; 
//     })
//     .map(function(product) {
//         return product.name; 
//     });

// console.log(affordableSortedProductNames); 

// //example37

// var students = [
//     { name: 'nikitha', grade: 85, attendance: 80 },
//     { name: 'teju', grade: 92, attendance: 90 },
//     { name: 'mounika', grade: 78, attendance: 70 },
//     { name: 'rohini', grade: 88, attendance: 85 },
//     { name: 'Dhana', grade: 65, attendance: 60 }
// ];

// var topStudents = students
//     .filter(function(student) {
//         return student.attendance >= 75; 
//     })
//     .sort(function(a, b) {
//         return b.grade - a.grade; 
//     })
//     .map(function(student) {
//         return ${student.name} (Grade: ${student.grade}); 
//     });

// console.log(topStudents);

// //example38
// var products = [
//     { name: 'Smartphone', price: 499, rating: 4.5 },
//     { name: 'Laptop', price: 899, rating: 3.8 },
//     { name: 'Tablet', price: 299, rating: 4.2 },
//     { name: 'Smartwatch', price: 199, rating: 4.8 },
//     { name: 'Headphones', price: 129, rating: 3.9 }
// ];

// var topRatedAffordableProducts = products
//     .filter(function(product) {
//         return product.rating >= 4; 
//     })
//     .sort(function(a, b) {
//         return a.price - b.price; 
//     })
//     .map(function(product) {
//         return ${product.name} - $${product.price.toFixed(2)};
//     });

// console.log(topRatedAffordableProducts);

// //example39
// var booleans = [true, false, true, true, false, true];
// var trueCount = booleans.reduce(function(total, currentValue) {
//     return total + (currentValue ? 1 : 0);
// }, 0);

// console.log(trueCount); 

// //example40
// var numbers = [1, 2, 3, 4, 5];
// var doubledEvenNumbers = numbers
//     .map(function(num) {
//         return num * 2;
//     })
//     .filter(function(num) {
//         return num % 2 === 0;
//     });

// console.log(doubledEvenNumbers); 

// //example41
// var words = ['apple', 'banana', 'cherry', 'date'];
// var longUppercaseWords = words
//     .map(function(word) {
//         return word.toUpperCase();
//     })
//     .filter(function(word) {
//         return word.length > 5;
//     });

// console.log(longUppercaseWords);

// //example42
// var strings = ['short', 'tiny', 'a bit longer', 'much longer string'];
// var shortStringsLengths = strings
//     .map(function(str) {
//         return str.length;
//     })
//     .filter(function(length) {
//         return length < 10;
//     });

// console.log(shortStringsLengths);
// //example43
// var numbers = [1, 2, 3, 4, 5, 9, 16];
// var perfectSquares = numbers
//     .map(function(num) {
//         return Math.sqrt(num);
//     })
//     .filter(function(sqrt) {
//         return Number.isInteger(sqrt);
//     });

// console.log(perfectSquares);

// //example44
// var reviews = [
//     { review: 'Great product!', rating: 5 },
//     { review: 'Not bad', rating: 3 },
//     { review: 'Terrible service', rating: 1 },
//     { review: 'Excellent value', rating: 4 }
// ];

// var positiveReviews = reviews
//     .map(function(review) {
//         return review.rating;
//     })
//     .filter(function(rating) {
//         return rating >= 4;
//     });

// console.log(positiveReviews);

// //example45

// var users = [
//     { name: 'ram', age: 30, score: 85 },
//     { name: 'raju', age: 25, score: 95 },
//     { name: 'priya', age: 35, score: 80 },
//     { name: 'seetha', age: 20, score: 75 }
// ];

// var highScorers = users
//     .filter(function(user) {
//         return user.score >= 80; 
//     })
//     .sort(function(a, b) {
//         return b.score - a.score; 
//     })
//     .map(function(user) {
//         return user.name; 
//     });

// console.log(highScorers); 

// //example46
// var numbers = [1, 4, 6, 8, 10, 3, 5];

// var sortedSquaresOfEvens = numbers
//     .filter(function(num) {
//         return num % 2 === 0; 
//     })
//     .sort(function(a, b) {
//         return a - b; 
//     })
//     .map(function(num) {
//         return num * num; 
//     });

// console.log(sortedSquaresOfEvens); 

// //example47

// var words = ['apple', 'banana', 'kiwi', 'blueberry', 'grape'];

// var sortedUppercaseLongWords = words
//     .filter(function(word) {
//         return word.length > 5;
//     })
//     .sort(function(a, b) {
//         return a.length - b.length; 
//     })
//     .map(function(word) {
//         return word.toUpperCase(); 
//     });

// console.log(sortedUppercaseLongWords);

//example48

// var products = [
//     { name: 'Laptop', price: 999 },
//     { name: 'Mouse', price: 25 },
//     { name: 'Keyboard', price: 75 },
//     { name: 'Monitor', price: 300 }
// ];

// var affordableSortedProductNames = products
//     .filter(function(product) {
//         return product.price <= 100; 
//     })
//     .sort(function(a, b) {
//         return a.price - b.price; 
//     })
//     .map(function(product) {
//         return product.name; 
//     });

// console.log(affordableSortedProductNames); 

// //example49

// var students = [
//     { name: 'nikitha', grade: 85, attendance: 80 },
//     { name: 'teju', grade: 92, attendance: 90 },
//     { name: 'mounika', grade: 78, attendance: 70 },
//     { name: 'rohini', grade: 88, attendance: 85 },
//     { name: 'Dhana', grade: 65, attendance: 60 }
// ];

// var topStudents = students
//     .filter(function(student) {
//         return student.attendance >= 75; 
//     })
//     .sort(function(a, b) {
//         return b.grade - a.grade; 
//     })
//     .map(function(student) {
//         return ${student.name} (Grade: ${student.grade}); 
//     });

// console.log(topStudents);

// //example50
// var products = [
//     { name: 'Smartphone', price: 499, rating: 4.5 },
//     { name: 'Laptop', price: 899, rating: 3.8 },
//     { name: 'Tablet', price: 299, rating: 4.2 },
//     { name: 'Smartwatch', price: 199, rating: 4.8 },
//     { name: 'Headphones', price: 129, rating: 3.9 }
// ];

// var topRatedAffordableProducts = products
//     .filter(function(product) {
//         return product.rating >= 4; 
//     })
//     .sort(function(a, b) {
//         return a.price - b.price; 
//     })
//     .map(function(product) {
//         return ${product.name} - $${product.price.toFixed(2)};
//     });

// console.log(topRatedAffordableProducts);
