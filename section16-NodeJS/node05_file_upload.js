let http = require('http');
let formidable = require("formidable");
let fs = require("fs");

let htmlForm =
`
<!DOCTYPE html>
<html>
<head>
<title>file upload</title>
</head>
<body>
<form action="/upload" method="post" enctype="multipart/form-data">
<input type="file" name="file1"> <br>
<input type="submit" value="Send" />
</form>
</body>
</html>
`;

http.createServer(
  function(req, res){
    if(req.url === "/upload"){
      let form = new formidable.IncomingForm();
      form.parse(
                  req, function(err, fields, files){
                    console.log(files.file1[0].originalFilename)
                    console.log(JSON.stringify(files.file1));
                    let tempPath = files.file1[0].filepath;
                    let newPath = "./public/" + files.file1[0].originalFilename;
                    fs.rename(tempPath, newPath,function(err){
                      if(err){
                        res.write("error uloading file!")
                      }else{
                        res.write("file uloaded.")
                      }
                      res.end()
                    })
                  }
                )
    }
    else{
      res.writeHeader(200, {'Content-Type': 'text/html'});
      res.end(htmlForm)
    }
  }
).listen(8080)