let http = require("http")
http.createServer(
  function(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    res.end("Hello world!")
  }
).listen(8080);
//prawym pszyciskiem myszki na plik i wyebieramy
//opend in integrated terminal
//w terminalu wpisujemy node NazwaPliku.js
//póżniej w przeglądarce localhost:8080