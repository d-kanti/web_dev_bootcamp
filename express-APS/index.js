const express = require('express');

const app = express();

// app.use((req,res)=>{
//     console.log("we got it");
//     res.send("hello, we got your request");

// })

app.get('/cat',(req,res)=>{
    res.send("<h1> hi there, here's your cat.</h1>");
})

app.get('/dog',(req,res)=>{
    res.send("<h1> hi there, here's your dog.</h1>");
})

app.get('/r/:sub/:id',(req,res)=>{
    res.send(`you are welcome to the main ${req.params.sub} the iddd is : ${req.params.id}`);
})

app.get('/joke',(req,res)=>{
    res.render('./../../joke_fetcher/index.ejs')
})

app.get('*',(req,res)=> res.send("path is unknown"));
app.listen(3000,()=>{
    console.log('listning to port 3000');
});