var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var Pool = require('pg').Pool;
var config = {
    user: 'vjvishnu67',
    database:'vjvishnu67',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
app.use(morgan('combined'));
var articles = {
  'article-one': {
      title: 'article one',
    heading:'article one server',
    date: 'aug,22,1997',
    content:  `
                <p>
                this is an article-one
                </p>`
  }, 
  'article-two': {
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

    
},
  'article-three': {
                   title: 'article three',
                    heading:'article three server',
                    date: 'aug,23,1997',
                     content:  `
                             <p>
                              this is an article-three
                             </p>`
  }
};
function createtemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmltemplate = `
<html>
    <head>
        <title>
            ${title}
            
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href = "/ui/style.css" rel = "stylesheet"/>
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
            <h3>${date.ToDateString()}</h3>
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

var counter = 0;
app.get('/counter', function (req, res){
   counter = counter + 1;
   res.send(counter.toString());
});
var Pool = new Pool(config);
app.get('/test-db',function(req,res){
    Pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString(result));
        } else {
            res.send(JSON.stringify(result.rows));
        }
    });
});
var names=[];
app.get('/submit-name', function (req, res) {
    var name = req.query.name;
    names.push(name);
  res.send(JSON.stringify(names));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articles/:articleName', function (req, res) {
    Pool.query('SELECT * FROM article WHERE title = $1', [req.params.articleName], function(err,result) {
        if(err){
            res.status(500).send(err.toString());
        } else {
            if(result.rows.length === 0) {
                res.status(404).send('Article not found');
            } else {
                var articledata = result.rows[0];
                res.send(createtemplate(articledata));
            }
        }
    });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
