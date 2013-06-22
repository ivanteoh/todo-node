var Todo = require('../models/Todo');

exports.list = function(req, res) {
    Todo.find({}, function(err, todos) {
        if (err) return next(err);
        res.render('todos', {
            title: 'Tasks',
            todos: todos
        });
    });
};