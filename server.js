/* 
 * server.js
 * 
 * The main file, to be invoked at the command line. Calls app.js to get 
 * the Express app object.
 */

var app = require('./app').init(4000);

var locals = {
        title: 		 'William Quade',
        description: 'William Quade: A technology enthusiast who offers freelance web design, hosting, and mobile application development services.',
        author: 	 'William Quade',
        _layoutFile: true
    };

app.get('/', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('home.ejs', locals);
});

app.get('/about', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('about.ejs', locals);
});

app.get('/web-design', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('web-design.ejs', locals);
});

app.get('/web-hosting', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('web-hosting.ejs', locals);
});

app.get('/mobile-apps', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('mobile-apps.ejs', locals);
});

app.get('/computers', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('computers.ejs', locals);
});

app.get('/minecraft', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('minecraft.ejs', locals);
});

app.get('/contact', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('contact.ejs', locals);
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});