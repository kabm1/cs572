var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var grades = [{ id: 1, name: "kabinad melaku", course: "cs572", grade: "95" }, { id: 2, name: "assad saad", course: "cs572", grade: "95" }];


app.post('/grades', (req, res, next) => {
  var val = JSON.parse(JSON.stringify(req.body));
  console.log(typeof val.id === 'string');
  if (typeof val.id != 'string' || typeof val.name != 'string' || typeof val.course != 'string' || typeof val.grade != 'string') {
    res.send("You did not send proper data");
  }
  else {
res.send("you data has been recorded");
    return next();
  }
})

app.get("/grades/:id", (req, res) => {
  console.log(req.params.id);
  if (req.params.id >= grades.length) {
    res.send("No entries for that id");
  }
  else {
    res.send(grades[req.params.id]);
  }
});

app.put("/grades", (req, res) => {
  var val = JSON.parse(JSON.stringify(req.body));
  console.log(typeof val.id === 'string');
  if (typeof val.id != 'string' || typeof val.name != 'string' || typeof val.course != 'string' || typeof val.grade != 'string') {
    res.send("You did not send proper data");
  }
  else {
  grades[req.body.id - 1] = req.body;
  console.log("entrie is updated");
  res.send("entries is updated");
}});
app.delete("/grades/:id",(req, res)=>{
    grades[req.param.id] == null;
      
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(4000);

module.exports = app;
