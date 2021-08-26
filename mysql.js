const mysql = require('mysql');
const connection = mysql.createConnection({
	host	   :	'localhost',
	user     : 'itemzio',
	password : '!@Yahi0921!@',
	database : 'bitgaram'
});

connection.connect();

connection.query('SELECT * from member', function(error, result, fields){
	if(error) throw error;
	console.log(result);
});


connection.end();
