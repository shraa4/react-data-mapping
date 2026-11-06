const express=require("express")
const app=express()


app.listen(4000,()=>{
    console.log("server is running on port number: 4000");
})
app.get('/home',(req,res)=>{
    res.send("<h1>It home page</h1>")
})
app.get('/about',(req,res)=>{
    res.send("<h1>It about page</h1>")
})
app.get('/product',(req,res)=>{
    res.send("<h1>It product page</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h1>It contact page</h1>")
})
app.get('/city',(req,res)=>{
   res.send(
    ["pune","Mumbai","Delhi","Kolkata"]
   )
})
app.get('/student',(req,res)=>{
   res.send(
   {
    "name":"Nishant",
    "city":"pune",
    "Course":"Express",
    "Age":29
   }
   )
})
app.get('/list',(req,res)=>{
   
    const studentS=[
{
   "name":"Nishant",
    "city":"pune",
    "Course":"NodeJS",
    "Age":29
},
{
   "name":"vedika",
    "city":"pune",
    "Course":"Express",
    "Age":29
},
{
   "name":"shree",
    "city":"pune",
    "Course":"MongoDb",
    "Age":29
},
    ]
  res.send(studentS)
})