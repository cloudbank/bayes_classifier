var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3030;
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//routing file
app.use(require('./routes/index'));
var mongoose = require('mongoose');
mongoose.connect('mongodb://bayesUser:welcome@ds139937.mlab.com:39937/bayes');
//var  db = require('/config/db.js');
//db.init();
var db = require('./config/db.js');
db.initialize();
app.listen(port, function() {
    console.log('Listening on port ' + port)
})