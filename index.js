const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 3000
const mysql = require('mysql');
const db = mysql.createConnection({
	host : 'localhost',
	user : 'itemzio',
	password : '!@Yahi0921!@',
	database : 'bitgaram'
});
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.set('view engine', 'ejs');
app.listen(port, () => console.log(`WebServer Start http://localhost:${port}`));


app.get('/', (req, res) => res.render('index.ejs'));
