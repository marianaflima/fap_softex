const express = require("express");

const app = express();

app.use(express.json());

app.listen(3700, ()=>{
    console.log("Servidor rodando...")
})

app.get("/",(req,res)=>{
    res.send("Bem vindo!");
})

app.get("/users",(req, res)=>{
    res.send("Rota de usuarios");
})

app.post("/users",(req,res)=>{
   const dados = req.body;

   console.log(dados.nome);
   console.log(dados.idade);

   res.send(dados);
})