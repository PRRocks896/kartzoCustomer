var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

// Use for angular
var distDir = __dirname + "/build";
app.use(express.static(distDir));
app.use(function(req,res) {
  res.sendFile(path.join(__dirname  + '/build/index.html'));
});

app.get('/:path', function(req, res) {
    res.sendFile(path.join(__dirname  + '/build/index.html'));
});

app.get('/:city/:area', function(req, res) {
    res.sendFile(path.join(__dirname  + '/build/index.html'));
});

// app.get('/signin', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });


// app.get('/about', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });

// app.get('/contact-us', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });

// app.get('/carrers', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });


// app.get('/carrers-job', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });


// app.get('/partners', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });

// app.get('/business', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });

// app.get('/search-city', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });

// app.get('/track-order', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });

// app.get('/find-store', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });

// app.get('/store-item', function(req, res) {
//     res.sendFile(path.join(__dirname  + '/build/index.html'));
// });


app.get('/placeorder', function(req, res) {
    res.sendFile(path.join(__dirname  + '/build/index.html'));
});


app.get('/cart', function(req, res) {
    res.sendFile(path.join(__dirname  + '/build/index.html'));
});

app.get('/profile', function(req, res) {
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
  
app.listen(5004, function() {
    console.log('Server is listen on localhost:' + 5004);
})