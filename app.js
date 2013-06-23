/* 
 * app.js
 * 
 * Our base app code, including Express configs
 */

var express = require('express')
var engine = require('ejs-locals')
var app = express();
var https = require('https');
var http = require('http');
var fs = require('fs');

exports.init = function(port) {

    app.configure(function(){
        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.static(__dirname + '/static'));
        app.use(app.router);
        app.enable("jsonp callback");
    });

    app.engine('ejs', engine);

    app.configure('development', function(){
       app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
        // app.use(express.logger({ format: ':method :url' }));
    });

    app.configure('production', function(){
       app.use(express.errorHandler()); 
    });


    app.use( function(err, req, res, next) {
        res.render('500.ejs', { locals: { error: err }, status: 500 });
    });
    
var options = {
  key: fs.readFileSync('/etc/ssl/http/self.key'),
  cert: fs.readFileSync('/etc/ssl/http/self.pem')
};

http.createServer(app).listen(4000);
https.createServer(options, app).listen(4001);
//    server = app.listen(port);

//    console.log("Listening on port %d in %s mode", server.address().port, app.settings.env);

    return app;
}
