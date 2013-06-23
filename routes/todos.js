var Todo = require('../models/Todo');

exports.list = function(req, res) {
    Todo.find({}, function(err, todos) {
        if (err) return next(err);
        console.log('todos: ' + todos);
        res.render('todos', {
            title: 'Tasks',
            todos: todos
        });
    });
};

exports.form = function(req, res) {
    res.render('todos/add', {
        title: 'Add task'
    });
};

exports.submit = function() {
    return function(req, res, next) {
        var title = req.body.task.title;
        console.log('task title: ' + title);
        if (title) {
            Todo.create({
                title: title
            }, function(err) {
                if (err) return next(err);
            });
        }
        res.redirect('tasks');
    };
};