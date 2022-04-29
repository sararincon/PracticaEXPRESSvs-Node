const express = require ('express')
const app = express();

app.listen(3000, ()=>{
    console.log('Server ON');
})
// MIDDLEWARES: Son funciones que se activan antes de las rutas y nos 
// sirven como filtros donde se pueden definir varias validaciones
// ¿En qué momento se ejecuta un middleware? : Su ejecución sucede en el momento
// en el que el servidor recibe la consulta 
app.use("/Tiempo" , (req, res, next)=>{
    const Auth = req.header("Authorization")
    Auth ? next() : res.send('¿Who is it? ');
}); 

app.get("/Tiempo", (req, res)=>{
    const tiempo = {time: Date.now()}
    res.send(tiempo)
})
//Creando Rutas
app.get("/TocToc", (req,res)=>{
    res.send("quien es?")
});
//redireccionando 
app.get("/estudiar", (req,res)=>{
    res.redirect("https://desafiolatam.com/")
});


//crear de ultima (default)
app.get("*",(req,res)=>{
    res.send("<center><h1>Sorry, aquí no hay nada :/ </h1> </center>")
});





