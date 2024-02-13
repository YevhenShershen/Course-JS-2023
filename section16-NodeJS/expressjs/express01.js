//npm init -y
//npm install express
//npm install -g nodemon

const http = require('http');
const express = require('express');

const app = express();

app.get("/", (req, res)=> {
  res.status(200).send("Hello worlds Express!")
})

app.listen(8080,()=>{console.log("Server started")})