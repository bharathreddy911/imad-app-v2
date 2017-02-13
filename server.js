var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

var articles={ 
    'articleone' :{
    title:'articleone bharath',
    heading:'Article One',
    date:'feb 14 2017',
    content:`
    <p>this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article </p>
    <p>this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article </p>
    <p>this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article </p>`
},
    'articletwo' :{
        title:'article two bharath',
    heading:'Article two',
    date:'feb 15 2017',
    content:`
    <p>this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article </p>`
    },
    'articlethree' :{
        title:'article three bharath',
    heading:'Article three',
    date:'feb 16 2017',
    content:`
    <p>this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article </p>
    <p>this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article this is the content of my article </p>`
    },
};
function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=`
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width-device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet"/>
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href='/'>home</a>
                    </div>
                    <hr/>
                    <h3>${heading}</h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>`
    ;
    return htmltemplate;
}

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createtemplate(articles[articleName]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
