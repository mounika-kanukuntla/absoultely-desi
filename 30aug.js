//async await
// by using the arrow and self-invoking function
// let res = (async ()=>{
//     return "hii"
// })().then(x=>console.log(x));
// // console.log(res);
// // res.then(x=>console.log(x));
 

//then vs await
// let pr = new Promise( (resolve,reject)=>{
//     setTimeout(() => {
//         resolve( "hiii too my world!!!");

//     }, 2000);
// })
// let pr1 = new Promise( (resolve,reject)=>{
//     setTimeout(() => {
//         resolve( "hiii too my universe!!!");
        
//     }, 4000);
// })
// let pr2 = new Promise( (resolve,reject)=>{
//     setTimeout(() => {
//         resolve( "hiii too my galaxy!!!");
        
//     }, 2000);
// })
//  async function demo(){
//     // pr.then(res => console.log(res));
//     //let res =await pr; // another way to print within the single line
//    // console.log(res);
//    console.log(await pr1) 
//    console.log(await pr)
//    console.log(await pr1)
//    console.log(await pr2)
//     console.log("helloo")
// }
// demo()


// try and catch and  finally
// let pr = new Promise ((resolve , reject )=>{
//     //resolve("Hi Mounika");
//     reject ("hello Mounika Netha");
// })
// async function demo(){
//     try {
//         console.log( await pr)
//     } catch (e) {
//         console.log(e)
//     }
//     finally{
//         console.log("yes its mee")
//     }
// }
// demo()

// let api1 = fetch("https://jsonplaceholder.typicode.com/users")
// console.log(api1)
// async function demo1(){
    
//     try {
//         let a = await api1;
//         let b = a.json();
//         let c = await b;
//         console.log(c)
//     } catch (error) {
//         console.log("error in fetching")  
//     }
//     finally{
//         console.log("fetched!!")
//     }
// }
// demo1()


let api = fetch("https://api.github.com/users");
console.log(api)
api.then(x=>x.json()).then(res =>console.log(res))

// let res = (async ()=>{
//   let x = await api
//   let y = x.json();
//   let z= await y;
//   console.log(z)
// console.log( await api);
// })()

// async function demo(){
//     try {
//         let x = await api;
//         let y = x.json();
//         let z = await y
//         console.log(z)
//     } catch (e) {
//         console.log("unable to fetch the data please check the internet connection")  
//     }
// }
// demo()