const Todo = require("../models/todo")

module.exports={
    index,
    show
};

/* GET users listing. */
function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
  });
};
function show(req, res) {
    res.render('todos/show', {
      todos: Todo.getOne(req.params.id),
    });
  };