var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

// Use for react
var distDir = __dirname + "/build";
app.use(express.static(distDir));
app.use(function(req,res) {
  res.sendFile(path.join(__dirname  + '/build/index.html'));
});

// Path
app.get('/:path', function(req, res) {
    res.sendFile(path.join(__dirname  + '/build/index.html'));
});

app.get('/:city/:area', function(req, res) {
    res.sendFile(path.join(__dirname  + '/build/index.html'));
});

app.get('/order/:slug', function(req, res) {
    res.sendFile(path.join(__dirname  + '/build/index.html'));
});

app.get('/store/:slug', function(req, res) {
    res.sendFile(path.join(__dirname  + '/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send('error');
});
  
app.listen(5008, function() {
    console.log('Server is listen on localhost:' + 5008);
})