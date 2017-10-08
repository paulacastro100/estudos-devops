//server.js

//set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//configuration
mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api*json'}));
app.use(methodOverride());

//listen (inicia o app com node server.js)
app.listen(8080);
console.log("Aplicacao ouvindo na porta 8080");


//rotas

//pegar todos os to-do's'
app.get('/api/todos', function(req, res) {
	
	Todo.find(function(err, todos) {
		
		if(err)
			res.send(err)
		
		res.json(todos)
	});
});


app.post('/api/todos', function(req, res){
	
	//criar um todo (info vem e uma request AJAX)
	Todo.create({
		text : req.body.text, 
		done : false
	}, function(err, todo) {
		if (err)
			res.send(err);
			
		//pegar e retornar todos os to-dos antes de criar outro
		Todo.find(function(err, todos){
			if (err)
				res.send(err);
			res.json(todos);
				
		});
	});
});

//deletar um to-do
app.delete('/api/todos/:todo_id', function(req, res) {
	Todo.remove({
		_id : req.params.todo_id
	}, function(err, todo){
		if (err)
			res.send(err);
		
		Todo.find(function(err, todos){
			if (err)
				res.send(err)
			res.json(todos);
		});
	});
});
