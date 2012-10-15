var app = require('./app').init(4000);

var locals = {
        title: 		 'NodeJS Boostrap using Express 3.x / EJS / Twitter Bootstrap / CSS3',
        description: 'An application template using Express 3.x,  EJS, Twitter Bootstrap, and CSS3',
        author: 	 'C. Aaron Cois, Alexandre Collin',
        _layoutFile: true
    };

app.get('/', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('template.ejs', locals);
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});