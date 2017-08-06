var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articletwo = {
    title: 'article two',
    heading:'article two server',
    date: 'aug,21,1997',
    content:  `
    <p>
                this is an article- two   this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two 
            <p>
                this is an article- two   this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two 
               
            </p>
            <p>
                this is an article- two   this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two  this is an article- two 
                </p>`

    
};
function createtemplate (data) {
    var title = title.data;
    var heading = heading.data;
    var date = date.data;
    var content = content.data;
var htmltemplate = `
<html>
    <head>
        <title>
            ${title}
            
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
            <hr/>
                <div>
            <h1>
                ${heading}
            </h1>
        </div>
        <div>
            <h3>${date}</h3>
        </div>
        <div>
            ${content}
           </div>
        </div>
    </body>
</html> 
  `;
  return htmltemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
  res.send(craetetemplate(articletwo));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
