//self invoking function

(function x() {
    console.log("x called");
    
})();


(function y() {
    console.log("y called");
    
})();


//2

var c = (function (a,b){
    console.log(a+b);
    
})(2,3)




// arrow function       we dont use functionkeyword inplace of it  we use =>

    var a = ()=> console.log("hii")
    a();

    var demo = x =>x/100;
    console.log(demo(5));

    //3

    var demo = ()=>{
        console.log("hello");
        console.log("hii");        
    }
    demo()

    //4

    var demo = (a,b)=>{
     console.log(a+b);
    }
    demo(3,5)

    //5
    var demo = (()=>{
        console.log("heelo hiiiii");  
    })()

    //6
    var demo = (a,b)=>{
        console.log(a+b)
        console.log(a-b)
        console.log(a/b)
        console.log(a%b)
    }
    demo(9,8)

    //7

    var demo = (a,b)=>console.log(a+b);
    demo(11,22)
      
    //8

    var demo = () =>{
        color= ['blue' ,"pink"];
        pattern=[1,2,3,4];
        console.log(color);
        console.log(pattern);  
    }
    demo()

    //9

    var demo = () =>{
        nam="Mounika";
        degree= "b.tech";
        rollno= "5c6"
        console.log(nam);
        console.log(degree)
        console.log(rollno)      
    }
    demo()

    //10

    var demo = () =>{
        fruits = ["apple", "bananaa","sapota"];
        vegetables = ["tomato", "potato"];
        whole = [0,1,2,3,4,5,6]
        console.log(fruits);
        console.log(vegetables);
        console.log(whole);  
    }
    demo()

    //11

    var demo = () =>{
        skills = ["java","python", "SQL"]
        var b = skills.splice(1,0, "c", "javascript");
        console.log(skills);
        console.log(b);  
    }
    demo()

    //12

    var demo = () =>{
        var g = "AKHILREDDY".split("").reverse().join("");
        console.log(g);
    }
    demo()

    //13
    var demo= () =>{
        var v = [11,22,33,44]
        var g = v.unshift(0,55);
        console.log(g); 
        console.log(v);       
    }
    demo()

    //14
    var demo = ()=>{
        var v = [11,22,33,44]
        var g = v.shift(3);
        console.log(g); 
        console.log(v);       
    }
    demo()

    //15

    var demo =() =>console.log("Mounika is a gud girl");
    demo()

    //16

    var demo = ()=>{
        var bts =["RM","SUGA", "JHOPE","JIN" , "V", "JIMIN","JK" ]
        console.log(bts);
        
    }
    demo()


    //17

    var square = (x) => {
        return x * x;
    };
    square(4)
    

    //18
    var show = (a, b=200) => {  
        console.log(a + " " + b);  
    }  
    show(100);

    //19
    
    var gfg = () => {
        console.log( "Hi Geek!" );
    }
    gfg();

    //20
    
    var obj=()=>{
        name:"rohini"
        age:23
        skills:"python full stack"
    }
    console.log(obj);

    //21

 var d=((a,b)=> console.log(a*b))(2,5)

//22
var a= (function(){
    console.log("hii");
 })
     a()

//23
var area=(length,width)=>{
    var area1=length*width;
    return area1
}
console.log(area(5,10));    

//24
var power =()=>{
    var x=prompt("enter a number");
    var y=prompt("enter a number");
    var pow=x**y;
    
    return pow;
}
console.log(power());

//25
 var createUser = (name, age) => ({ name, age });
 console.log(createUser("John", 30));
    

    
        
    