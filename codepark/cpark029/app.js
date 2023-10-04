const mysql2 = require('mysql2');
const express = require('express');

const app = express();

const db = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root', 
    database: 'fap1'
})

db.connect((error) => {
    if (error) {
        console.log("Erro ao conectar com banco de dados", error);
    } else {
        console.log("Conexão com banco de dados realizada")
    }
})

app.listen(3003, ()=>{
    console.log("Servidor rodando...");
})