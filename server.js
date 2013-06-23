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

/*app.get('/about', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('about.ejs', locals);
});

app.get('/services', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('services.ejs', locals);
});

app.get('/contact', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('contact.ejs', locals);
});
 */
/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});