
// console.log("run it")

// setTimeout(function() {
  
//     console.log("runned after 10sec")},
    
// 10000);

//   //setime out is used to make a function delay or used in website to stop the program by giving error so that user doesnt have to wait that much

// let pr=new Promise((resolve,reject)=>{

//   let x=1;
//   if(x==0){
//     resolve("yes match")
//   }else{
//     reject("not match")
//   }
// })

// pr.
// then(data => console.log(data)).
// catch(data => console.log(data))


// console.log("run it");

// let printname10sec = function(name) {
//     setTimeout(function() {
//         console.log(name);
//     }, 10000);

//     setTimeout(function() {
//         console.log("kumar");
//     }, 5000);
// }

// printname10sec("chandan");



// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log("chandan");
//     }, 5000);
// }

// let pr = new Promise((resolve, reject) => {
//     let name = "cck";
//     // if(name=="ck"){
//     //     resolve("name matched")
//     // }else{
//     //     reject("name unmatched")
//     // }

//     let i = 0;
//     for (i = 0; i < 5; i++)
//         setTimeout(() => {
//             reject("rejected after 5 sec");
//         }, 5000);

//     setTimeout(() => {
//         resolve("resolve after 5 sec value of i is " + i);
//     }, 6000);
// })

// pr.then((data) => console.log(data)).catch((error) => console.log(error));


// setTimeout(() => {
//   console.log("hello0")
// }, 0);

// console.log("hello");


// setTimeout(() => {
//   console.log("hello1")
// }, 1);


// setTimeout(() => {
//   console.log("hello0")
// }, 0);

// console.log("hello");


// setTimeout(() => {
//   console.log("hello1")
// }, 1);



setTimeout(()=>{
  console.log("runned outer")

  setTimeout(()=>{
    console.log("runned inner")
    console.log("helloooooo")
  },10000)
},4000)




  