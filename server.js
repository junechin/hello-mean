var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use("/node_modules", express.static('node_modules'));
app.use('/api/posts', require('./controllers/api/posts'));
app.use( require('./controllers/static'));

app.listen(3000, function () {
    console.log('Server listening on ', 3000);
});