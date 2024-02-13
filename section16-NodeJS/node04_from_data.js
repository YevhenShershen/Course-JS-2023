const http = require("http");
const { parse} = require("querystring");
let htmlForm =
`
<html>
<head>
<title>
Formularz
</title>
</head>
<body>
  <form method="POST">
      Name: <input name="name"> <br>
      Email: <input name="email"> <br>
      <input type="submit" value="Send">
  </form>
</body>

</html>
`;

http.createServer(
function(req, res){
let data = "";
req.on("data", function(chunk){
  data += chunk;
})

req.on("end",function(){
  let parsed = parse(data)
  console.log("data: " + data)
  console.log("parsed: " + JSON.stringify(parsed))
/*
data: name=asd&email=shershen.yevhen%40gmail.com
parsed: {"name":"asd","email":"shasdl@gmail.com"}
*/
  res.writeHead(200, {"Content-type": "text/html"})
  res.end(htmlForm)
});

}
).listen(8080);