// var x= 10;
// var f = (a,b) =>{
//     console.log(x); //10
//     var y = 20;
//     console.log(y); //20
//     console.log(a); // undefined
//     console.log(b); //undefined
    
    
// }
// f()
// console.log(x); //10
// console.log(y); // error
// console.log(a); // error
// console.log(b); //error

//nested function

// function outer(){
//     console.log("hiii");
//     function inner(){
//         console.log("hello")
//     }
//     inner()  
// }
// outer()

//global scope
// var x = 10;
// function outer(){
//     console.log(x); //10
//     function inner(){
//         console.log(x) //10
//     }
//     inner()  
// }
// outer()
// console.log(x); //10 

//inheritance -- child inherits the parent behaviour
// function outer(){
//     var x = 10;
//     console.log(x); //10
//     function inner(){
//         console.log(x) //10
//     }
//     inner()  
// }
// outer()
// console.log(x); //error 

// closure --1
// console.log("hello world!!!");
// function outer(){
//     var x = 20;
//     console.log(x); //20
//     function inner(){
//         console.log(x);
//         var x = 10;
//         function sb1(){
//             console.log(x)
//         }
//         return sb1
        
//     }
//      return inner 
// }
// outer()()()

// closure --2

console.log("hello world!!!");
function outer(){
    var x = 20;
    console.log(x); //20
    function inner(){
        console.log(x);           
    }
    inner() 
}
outer()

// closure -- 3
console.log("hello world!!!");
function outer(){
    var x = 20;
    console.log(x); //20
    function inner(){
        console.log(x);           
    }
     return inner
}
outer()()

//closure -- 4

function myname() {
    var x = "Meeee"; 
    function name1() {
      console.log(x);
    }
    name1();
  }
  myname();


  // closure -- 5
  
console.log("hello world!!!");
function outer(){
    var x = 20;
    console.log(x); //20
    function inner(){
        console.log(x);
        var x = 10;
        function sb1(){
            console.log(x)
        }
        sb1()
        
    }
    inner()
}
outer()

// closure --6

console.log("hello world!!!");
function outer(){
    var x = 20;
    console.log(x); //20
    function inner(){
        console.log(x);
        var x = 10;
        function sb1(){
            var y= 30;
            console.log(x)
        function sb2(){
            console.log(y);
        }
        return sb2
    }

        return sb1
        
    }
     return inner 
}
outer()()()

// closure --8

function outer(){
    var x =" hello world!1";
    console.log(x); //20
    function inner(){
        console.log(x);
        var x = "Have a great day!!";
        function sb1(){
            var y= "Wonderfull memories ahead";
            console.log(x)
        function sb2(){
            console.log(y);
        }
        return sb2
    }

        return sb1
        
    }
     return inner 
}
outer()()()

// closure --9




