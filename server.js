var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');

var app = express();
app.use(bodyParser.json());

app.get('/api/posts', function (req, res) {
    Post.find(function (err, posts) {
        if (err) { return next(err); }
        res.json(posts);
    })
});

app.post('/api/posts', function (req, res) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });
    post.save(function (err, post) {
        if (err) { return next(err) }
        res.json(201, post)
    });
});

app.get('/', function (req, res) {
  res.sendfile('layouts/posts.html')
});

app.use("/node_modules", express.static('node_modules'));

app.listen(3000, function () {
    console.log('Server listening on ', 3000);
});