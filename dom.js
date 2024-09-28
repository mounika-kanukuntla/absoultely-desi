// console.log(document.title);
// document.title = "Training Institution"
// console.log(document.title)

// let a= document.getElementById("start");
// console.log(a)
// a.textContent = 45678;
// a.style.textDecoration = "underline" // text to text we use textContent
// let res = document.getElementById("new")
// res.innerHTML= "welcome to jspiders";
// res.style.color = "blue"

//  let data = document.getElementsByClassName("head")[0]
// console.log(data)
//  data.textContent=("gud Evng");
//  data[1].innerHTML="<strong>havve a nice day</strong>"

// let a = document.getElementsByTagName("h1")
// console.log(a)
// a[0].textContent ="hello"

// let a = document.getElementById("date")
// setTimeout(() => {
//     a.innerHTML= new Date().toLocaleDateString();
// }, 3000);

// let b = document.getElementById("hr")
// setTimeout(() => {
//     b.innerHTML = new Date().toLocaleTimeString();
// }, 5000);

// let c = document.getElementById("timer")
// setInterval(() => {
//     c.innerHTML = new Date().toLocaleTimeString()
// }, 1000);

let bk = document.getElementById("bg")
bk.style.height = "100vh";
bk.style.background = "linear-gradient(rgba(0, 0, 0, 0.404), rgba(0, 0, 0, 0.377)), url(https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg)";
bk.style.backgroundPosition = "center";
bk.style.backgroundRepeat = "norepeat";
bk.style.backgroundSize = "cover";