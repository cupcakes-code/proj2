import React from "react";
// Import Components
 import Todo from "./Todo";

const Todolist = ({todos,setTodos,filteredTodos}) => {
    return(  
    <div className="todo-container">
    <ul className="todo-list">
       {filteredTodos.map((todo) => (
            <Todo 
            todo={todo} 
            setTodos={setTodos} 
            todos={todos} 
            key={todo.id} 
            text={todo.text} 
            id={todo}
            />
        
       ))}
    </ul>
  </div>);
};






export default Todolist;