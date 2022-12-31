var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const pool = require('./models/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//select
pool.query('select * from empleados').then((resp) => console.log(resp));

//insert
// const nuevoEmpleado = {
// 	nombre: 'Gastón',
// 	apellido: 'Trotteyn',
// 	trabajo: 'desarrollador',
// 	edad: 45,
// 	salario: 210000,
// 	mail: 'gastonTrotteyn@gmail.com',
// };
// pool.query('insert into empleados set ?', [nuevoEmpleado]);

//update
//pool.query('update empleados set salario=300000 where id_emp=23').then((res) => console.log(res));

//delete
//pool.query('delete from empleados where id_emp=23').then((resp) => console.log(resp));

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

module.exports = app;
