const express = require ('express')
const app = express();

app.listen(3000, ()=>{
    console.log('Server ON');
})

app.get("/TocToc", (req,res)=>{
    res.send("quien es?")
})

app.get("*",(req,res)=>{
    res.send("<center><h1>Sorry, aquí no hay nada :/ </h1> </center>")
})