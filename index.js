require('dotenv').config()
const express = require("express");


const app = express();

// const port = 3000; 

 app.get('/',(req,res)=>{
  res.send("hello World")
 })
 app.get('/instagram',(req,res)=>{
  res.send("rakesh._.sainix")
 })
 app.get('/whatsapp',(req,res)=>{
  res.send("+919465649902")
 })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
