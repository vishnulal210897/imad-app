var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone = {
    title: 'article one',
    heading:'article one server',
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
var htmltemplate = `

`

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-1.html'));
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
