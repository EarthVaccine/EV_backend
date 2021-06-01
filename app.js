const path = require("path");
const express = require("express");
const logger = require("morgan");
const cookieParser = require('cookie-parser');
const mongoConnect = require('./config/mongoose');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());

// 연결하려면 잠시 주석 풀고 하세요
// app.use('/db', require('./routes/users'));
app.use('/', require('./routes/index.js'));

app.listen(3000, () => { console.log("Connected !") });