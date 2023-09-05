const express = require("express");

const app = express();

const PORT = 3001;

app.listen(PORT, ()=> {
    console.log("Servidor rodando...");
});

app.get("/",(req, res)=>{
    res.send("Bem-vindo...");
})

app.get("/cadastrar/:id",(req, res)=> {
    const id = req.params.id;
    res.send(`BEM VINDO USUÁRIO ${id}`);
})