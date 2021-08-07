const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");

// create mongoose server
mongoose
  .connect("mongodb://localhost:27017/groceryList-hooksContext-backend",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected for groceryList hooks & context");
  })
  .catch((e) => {
    console.log(e);
  });

const groceryListRouter = require("./routes/groceryList/groceryListRouter");
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// is groceryList router
app.use("/api/v1/groceryList", groceryListRouter);

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
  res.json("error", err);
});

module.exports = app;
