const todos = [
    {id: 1, todo: "Feed Dogs", done: true},
    {id: 2, todo: "Learn Express", done:false},
    {id: 3, todo: "Buy Milk", done: false}
];
let idNo = 4;
function updateTodo(index,body){
    todos[index].todo=body.todo;
    if (body.done){
        todos[index].done=true;
    }
    else{
        todos[index].done=false;
        console.log("GOT HERE!")
    }
}
function deleteTodo(id){
    console.log(id);
    todos.splice(id,1);
}
function getAll(){
    return todos;
}
function returnID(id){
    return todos.findIndex((element,idx) => `${element.id}`===`${id}` ? true:null)
}

function getOne(id){
    return (todos[returnID(id)]);
}
function create(todo){
    let newtodo={};
    newtodo.id= idNo;
    idNo++;
    newtodo.todo=todo.todo;
    newtodo.done=false;
    todos.push(newtodo);
}
module.exports ={
    getAll,
    getOne,
    create,
    returnID,
    delete: deleteTodo,
    put: updateTodo
};