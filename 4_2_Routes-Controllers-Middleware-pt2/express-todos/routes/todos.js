var express = require('express');
var router = express.Router();
var todosCtrl = require("../controllers/todos");

router.get("/", todosCtrl.index);
router.get("/:id", todosCtrl.show);

// const Todo = require("../models/todo");

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('todos/index', {
//     todos: Todo.getAll(),
//   });
// });

module.exports = router;
