const todos = [
    {id: 1, todo: "Feed Dogs", done: true},
    {id: 2, todo: "Learn Express", done:false},
    {id: 3, todo: "Buy Milk", done: false}
];

function getAll(){
    return todos;
}
function getOne(id){
    return todos[id-1];
}
module.exports ={
    getAll,
    getOne,
};