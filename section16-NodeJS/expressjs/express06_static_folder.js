const http = require('http');
const express = require('express');

const app = express();

app.get("/", (req, res)=> {
  res.status(200).send("Hello world Express!")
})
//http://localhost:8080/images/love.webp
app.use("/images", express.static("images"))
app.listen(8080,()=>{console.log("Server started")})