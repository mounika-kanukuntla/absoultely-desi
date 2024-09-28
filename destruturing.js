//example 1
var person = {
    names: 'John',
    age: 30,
    city1: 'New York'
};

var { names, age, city1 } = person;

console.log(names); 
console.log(age);  
console.log(city1); 

//example 2
var person1 = {
    naam: 'John',
    address: {
        city: 'New York',
        zip: 10001
    }
};

var  { naam, address: { city, zip } } = person1;

console.log(naam); 
console.log(city);
console.log(zip); 


// example 3
var foo = ["one", "two", "three"];
var [red, yellow, green,blue] = foo;
console.log(red); 
console.log(yellow); 
console.log(green); 
console.log(blue);


// example 4 
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); 
console.log(b); 

var arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); 

//example 5
var user = {
    id: 42,
    statuss: "eligible",
  };
  
  var { id, statuss } = user;
  
  console.log(id); 
  console.log(statuss); 

  //example 6
  var user = {
    id: 42,
    Name: "jdoe",
    fullName: {
      firstName: "Jane",
      lastName: "Doe",
    },
  };
   var {id, Name,fullName:{firstName,lastName}} = user;
   console.log(id); 
   console.log(Name); 
   console.log(firstName);
   console.log(lastName);

   //example 7
   var foo = { "yummy": burger };
var { "yummy": burger } = foo;

console.log(burger); 

//example 8
var frnds = [
    { id: 1, Name: "Mounika" },
    { id: 2, Name: "niikitha" },
    { id: 3, Name: "teju" },
    { id: 4, Name: "rohini" },   
  ];
  
  var [, , { Name }] = frnds;
  
  console.log(Name); 

  //examplle 9
var profile = ["Mounika", "Netha", "Kanukuntla"];

var firstName = profile[0];
var lastName = profile[1];
var surname = profile[2];

console.log(firstName); 
console.log(lastName); 
console.log(surname); 

//example 10
var person1, person2, person3, person4;

[person1, person2, person3, person4] = ["prasad", "anitha", "devika", "pravalika"];

console.log(person1); 
console.log(person2);
console.log(person3); 
console.log(person4);

//example 11
var arrName =  [1,[2,3,4],5,6,7]
    var [,[odd1],, ,odd5] = arrName
    console.log(odd1,odd5);

    //finding even numbers
    var x = [[2,3,4],[[[4,5,6]]]];
    var [[e1] , [[[e3,,e4]]]] = x;
    var res = [e1,e3,e4];
    console.log(res);
    
    //assigning with the default value

    var x = [1,2]
    var [a,b ,c=6] = x;
    console.log(a,b,c);

//example 12
    var x= [1,2,3]
    var y = [4,5,6]
    var [x1, x2, x3 ] = y
    var [y1,y2,y3] = x
    var res1 =[x1, x2, x3 ]
    var res2 = [y1,y2,y3] 
    console.log(res1);
    console.log(res2);

// example 13
    function demo(){
        return [1,2,3,4,5,6]
    }
    var [, x,,,,y] =demo()
    console.log(x,y);

//examplle 14
    const csvData = "John, Doe, 30, Male";
    console.log(csvData.split(","))
    console.log(csvData)
    var [names,surname,age,gender] = csvData.split(",");
    console.log(names);
    console.log(surname);
    console.log(age);
    console.log(gender);
  
//example 15
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

//example 16
var obj = {
    names: "Netha",
    age : 22,
    salary : "25k",
    des: {
        a:"hyderabad",
        b:"chennai",
        c:"bangalore"
    }
}
var {age ,des:{c}} = obj;
console.log(age);
console.log(c);

//example 17
var obj ={
    names: "Reddy",
        age : 22,
        salary : "25k",
        skills :{
            web : ["html", "css", "js"],
            programming :{
                java : 8.9,
                python: 2.5,
            }

        }
}
var {salary, skills:{web:[,,pl]},programming:{python} } = obj;
console.log(salary);
console.log(pl);
console.log(python);

//example 18
var [a,b,c=3] = m
console.log(a); 
console.log(b);
console.log(c); 
var res=[a,b,c];
console.log(res);

function getCoordinates() {
    return [10, 20];
}
var [x, y] = getCoordinates();
console.log(x); 
console.log(y);

//example 19
function getUser() {
    return { id: 1, username: 'user1', email: 'user1@example.com' };
}
var { id, username, email } = getUser();
console.log(id);    
console.log(username); 
console.log(email); 

//example 20
var obj={
    name:"Mounika",
    age:22,
    skills:["python","java","html","css","js"],
    hobbies:["reading","sleeping","singing"]
}
var {age,skills:[item1,,,item2]}=obj;
console.log(age);
console.log(item1,item2);






