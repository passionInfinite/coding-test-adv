const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
// const path = require('path');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/auth');

const createApp = (logger) => {
  const app = express();

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  // TODO: Serve your React App using the express server
  // app.use(express.static(path.join(__dirname, 'public')));
  // app.use('/', ROUTE);

  app.use('/auth', authRouter);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res) => {
  // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    logger.error(err);
    res.status(err.status || 500);
  });

  return app;
};

module.exports = createApp;
