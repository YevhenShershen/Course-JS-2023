const http = require('http');
const express = require('express');

const app = express();
const testRouter = require("./test_router");

app.get("/", (req, res)=> {
  res.status(200).send("Hello worlds Express!")
})

app.use("/test", testRouter)
app.listen(8080,()=>{console.log("Server started")})