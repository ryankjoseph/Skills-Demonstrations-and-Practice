var express = require('express');
var router = express.Router();
var todosCtrl = require("../controllers/todos");

router.get("/", todosCtrl.index);
router.get("/new", todosCtrl.new);
router.get("/:id/edit", todosCtrl.edit);
router.get("/:id", todosCtrl.show);

router.put("/:id",todosCtrl.put);
router.post("/",todosCtrl.create);
router.delete("/:id",todosCtrl.delete)

// const Todo = require("../models/todo");

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('todos/index', {
//     todos: Todo.getAll(),
//   });
// });

module.exports = router;
