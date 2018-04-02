var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://daniel:dan876@ds014118.mlab.com:14118/nodejs-express-ninja')

//Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'} ];
var urlencondedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    
    //Todo Get Action
    app.get('/todo', function(req, res){
        //get data from mongodb and pass it to view
        Todo.find({}, function(err, data){
            if (err) throw err;
            console.log('read data from DB again');
            res.render('todo', {todos: data});
        });
    });
    //Todo Post Action
    app.post('/todo', urlencondedParser, function(req, res){
        //get data from the view and add it to mongodb
        var newTodo = Todo(req.body).save(function(err, data){
            if (err) throw err;
            res.json(true);
        });
    });

    //Todo Delete Action
    app.delete('/todo/:item', function(req, res){
        Todo.find({_id: req.params.item}).remove(function(err,data){
            if (err) throw err;
            res.json(true);
        });
    });


};