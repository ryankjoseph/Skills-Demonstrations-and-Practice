const Todo = require("../models/todo");

module.exports={
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    put:putTodo,
    edit:editTodo,
};
function editTodo(req,res){
  res.render("todos/edit",{
    todos: Todo.getOne(req.params.id),
  });
}
function putTodo(req,res){
  console.log(`ID ---> ${req.params.id}`);
  console.log(req.body);
  Todo.put(Todo.returnID(req.params.id),req.body);
  res.redirect("/todos");
}
function deleteTodo(req,res){
  Todo.delete(Todo.returnID(req.params.id));
  res.redirect("/todos");
}
function create(req,res){
  Todo.create(req.body);
  res.redirect("/todos");
}
function newTodo(req,res){
  res.render("todos/new", {
    todos: Todo.getAll(),
  })
}
/* GET users listing. */
function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
  });
};
function show(req, res) {
  console.log(`ID ---> ${req.params.id}`);
  console.log(Todo.getOne(req.params.id));
    res.render('todos/show', {
      todos: Todo.getOne(req.params.id),
    });
  };
