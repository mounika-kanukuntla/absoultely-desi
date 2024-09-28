//example 1
let items =  ["item1", "item2","item3"];
items =items.map(x=>`<li>${x}<li>`)
console.log(items)

// example 2
let numbers = [1,-2,3,4,5];
numbers = numbers.map(x=>x*-1)
console.log(numbers)

//example 3
let datestrings = ["2024-01-01", "2024-02-14", "2024-12-25"];
datestrings = datestrings.map(x=>new Date(x))
console.log(datestrings)

// example 4
let triangles =[
    {base: 5, height:10},
    {base: 7, height:14},
    {base: 10, height:20}
]
 
let triangle = triangles.map(x=>({
    base: x.base,
    height: x.height,
    area: x.base*x.height

 }));
 console.log(triangle);

 //example 5
 let xcoords = [1,2,3,4];
   let xcoords1=xcoords = xcoords.map((x,y)=>[(y+1,x*2)])
 {
    console.log(xcoords1);
 }

 // example 6
 let students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
   students = students.filter(x => x.grade >= 90)
   console.log(students)

  //example 7
  let vegees = ['tomato', 'potato', 'tomato', 'brinjal', 'potato', 'tomato'];
  let count = vegees.reduce((x,y) => {
  x[y] = (x[y] || 0) + 1;
  return x;
  }, {});
   console.log(count); 

   //example 8
   let arr1 = [1, 2, 3, 4];
   let arr2 = [3, 4, 5, 6];
   let intersection = arr1.filter(item => arr2.includes(item));
   console.log(intersection);

   //example 9
   let input = [1, -4, 12, 0, -3, 29, -150];
   let input1 = input.filter(x=>x>0)
   console.log(input1)
   input1= input1.reduce((a,b,c,d)=>{
     return a+b;
   })
   console.log(input1)

   //example 10
   let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
   let petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
    }, {});

    console.log(petCounts); 

    //example 11
    // let studentss = [
    //     { name: "Alice", scores: [90, 85, 92] },
    //     { name: "Bob", scores: [75, 80, 85] },
    //     { name: "Charlie", scores: [90, 95, 85] },
    //     { name: "Jack", scores: [100, 100, 100] }
    // ];
    // let studentAverages = studentss.map(student => student.scores.reduce((acc, score) => acc + score);
    // return { name: student.name, average: sum / student.scores.length };
    // );
    // let highPerformers = studentAverages.filter(student => student.average>90);

    // const employee=[
    //     {firstName:"Tejashwini",lastName:"Kothuru",age:26},
    //     {firstName:"Nikitha",lastName:"Bommagani",age:75},
    //     {firstName:"Mounika",lastName:"Kanukuntla",age:50},
    //     {firstName:"Rohini",lastName:"Reddy",age:26}
    // ];
    // employee = employee.reduce((a,b)=>{
    //     return a.concat(b);
    // })
    // console.log(employee)

    let members =
  [
  {id: 111,name: "Mounika",workExp: 7,deptExp: 6,isPermanent: true},
  {id: 102,name: " teju", workExp: 13,deptExp: 10,isPermanent: false},
  {id: 123,name: " nikki",workExp: 23,deptExp: 15,isPermanent: false },
  {id: 66,name: " rohini",workExp: 22,deptExp: 9,isPermanent: true},
];
let permMember = members.filter((x)=>
{
  return x.isPermanent;
});
console.log(permMember)
let totalScore = permMember.map((x)=>
{
  return x.workExp + x.deptExp;
});
console.log(totalScore)
let combinedTotalScore= totalScore.reduce((acc, total)=>
{
  return acc + total;
}, 0);
console.log(combinedTotalScore)

//example 14

let arr8 = [ {
    name : "akshay",
    branch : "cse",
    place : "warangal",
    percent: 65
},
{
    name : "harish",
    branch : "ece",
    place : "warangal",
    percent: 70
},
{
    name : "sai",
    branch : "cse",
    place : "jangaon",
    percent: 75
}
];
arr8 = arr8.map(x=>x.name.toUpperCase())
console.log(arr8)

//example 15
const fruit = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'kiwi', color: 'green' },
    { name: 'orange', color: 'orange' },
    { name: 'pineapple', color: 'yellow' }
];

const  yellowFruits = fruit.filter(fruit => fruit.color === 'yellow');
console.log(yellowFruits);

//example 16
let triangless=[
    {base:5,height:10},
    {base:7,height:14},
    {base:10,height:20}
]
triangless=triangless.map(x=>({
    base:x.base,
    height:x.height,
    area:0.5*x.base*x.height
}))
console.log(triangless);

//example 18
const fruits1 = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'kiwi', color: 'green' },
    { name: 'orange', color: 'orange' },
    { name: 'pineapple', color: 'yellow' }
];

const transformedFruits = fruits1.map(fruit => ({
    fruitName: fruit.name.toUpperCase(),
    fruitColor: fruit.color.toUpperCase()
}));
console.log(transformedFruits);

//example 19
let arr = [1.5, 2.56, 5.1, 12.33];
let rounded = arr.map(Math.ceil);
console.log(rounded); 

//example 20
let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
];
   const ans=student.filter((x)=> {
   return x.marks>60}).map((x)=>{return x.name});
   console.log(ans);

   //example 21
   let employe=[
    {firstName:"Tejashwini",lastName:"Kothuru",age:26},
    {firstName:"Nikitha",lastName:"Bommagani",age:75},
    {firstName:"Mounika",lastName:"Kanukuntla",age:50},
    {firstName:"Rohini",lastName:"Reddy",age:26},  
  ];
let employee=employe.map((x)=>{
      return x.firstName+" "+x.lastName;
  })
  console.log(employee);

  //example 22
  const ar=[0,"hello",false,42,"",null,"world",undefined,true]
   let ar1=arr.filter(x=>x=!false)
 console.log(arr1);
let a1=arr.filter((Boolean))//remove all false values
console.log(arr1);
const words=["apple","banana","pear","grape","kiwi"]
let ar2=words.filter(x=>x.length>=5)
console.log(arr2);

//example 23
let std =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
];
let anns=std.filter((x)=> {
return x.marks>60}).map((x)=>{return x.name});
console.log(anns);

//example 24
var wordss = ['apple', 'banana', 'cherry', 'dates'];
var longUppercaseWords = wordss
    .map((word)=> {
        return word.toUpperCase();
    })
    .filter((word) =>{
        return word.length > 5;
    });

console.log(longUppercaseWords);

//example 25
let petss = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
   let petCountss = petss.reduce((obj, pet)=>{
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
    }, {});

    console.log(petCountss); 
