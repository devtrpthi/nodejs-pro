var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

var port = process.env.PORT || 3000;

app.get('/', function(req,res) {
  var info = {
    'string_value': 'Devesh',
    'number_value': 69
  }
res.json(info);
})
  app.listen(port, function() {
    console.log('Nodejs is listening on port' + port)
  })

