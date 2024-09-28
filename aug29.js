// // set time out and set interval
// function demo(){
//     console.log("hello world");
// }
// setTimeout(demo,2000) // set timeout enables us to disply the content after the time set to it , it hppens for only one time

// setInterval(()=>console.log("hello world"),2000) // set interval helps us to iterate the value for n no of times


// //PROMISE

// let RCB = new Promise((resolve,reject)=>{
//     let score = 280;
//     if (score==280)
//         {
//         resolve("RCB won the match");
//     }
//     else{
//         reject ("CSK won the match");
//     }
// })
// console.log(RCB);

//
// let product = new Promise((resolve, reject)=>{
//     let odj =true;
//     if(odj==true){
//       resolve("order placed successfully");
//     }
//     else{
//         reject("order is rejected");
//     }
// })
// setTimeout(()=>{
//     console.log(product);
// },3000);


// by using the promise result =< then for the resolve values and catch for the reject statements
// let product = new Promise((resolve, reject)=>{
//     let odj =true;
//     if(odj==true){
//       resolve("order placed successfully");
//     }
//     else{
//         reject("order is rejected");
//     }
// })
// product.then(res=>console.log(res));
// product.catch(err=>console.log(err));


// //api fetching
// let api = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(api)
// let api1 = api.then(res => {
//     console.log(res);
//     return res.json();
    
// })
// console.log(api1);
// api1.then(val=>console.log(val));

//printing the name and id
// let res1=api.then(x=>x.json()).then(x=>{
//     x.map(y=>{
//         console.log(y);
//         console.log(y.id);
//         console.log(y.id);
//     })
// }) 

// // printing the latitude and longitude  along with the names of 'e'
// api.then(x=>x.json()).then(x=>{
//     x.filter(y=>y.username.includes("e")).map(z=>{
//             console.log(z.address.geo.lng,z.address.geo.lat);
            
//         })
//     })

    //new API2
    // let api2 = fetch("https://fakestoreapi.com/products");
    // console.log(api2)
    // // api2.then(x=>x.json()).then(y=>{
    // //     y.filter(z=>z.rating.rate>4).map(a=>console.log(a.title))
    // // })
    // api2.then(x=>x.json()).then(y=>{
    //     console.log(y.map(z=>Math.floor((z.rating.rate))));
    // })


    //api3 

    // let api3 = fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log(api3)
    // api3.then(x=>x.json()).then(y=>{
    //     y.slice(0,50).map(x=>{
    //         console.log(x)
    //     })
        
    // })

//     let api4 = fetch("https://jsonplaceholder.typicode.com/albums");
//     console.log(api4);
//     api4.then(x=>x.json()).then(y=>console.log(y)).then(z=>{
//     let arr = [];
//     console.log(arr)
//     for(i =0; i<this.length;i++){
//         let z= this[i];
//         if (unique.indexOf(z)<0)unique.push(z);
//     }
//     return z;
// })
// console.log(arr.unique())
    //.then(z=>{
        //z.map(a=>a.userId)
        //console.log(z.filter((x,y,z)=>z.indexOf(x)===y))
 //})

//  let api=fetch("https://jsonplaceholder.typicode.com/albums").then(x=>(x.json())).then((y)=>{
//     let arr = [];
// for(i=0; i < arr.length; i++){ 

//     if(arr.indexOf(api[i]) === -1) { 
//         arr.push(api[i]); 
//     } 
// }
// return i;
// })
// console.log(arr);



let api=fetch("https://jsonplaceholder.typicode.com/albums").then(x=>(x.json())).then((x,y)=>{
    let res = [];
    let ids = {};
x.map(obj => {
    if (!ids[obj.userId]) {
        ids[obj.userId] = true;
        res.push(obj);
    }
});
console.log(res);
})



 