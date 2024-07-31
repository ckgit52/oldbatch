
let pr=new Promise((req,res)=>{

    setTimeout(()=>{
        resolve("resolve after some time")
    },4000)


})

pr.
then(data=>console.log("data")).
catch(error=>console.log(error))