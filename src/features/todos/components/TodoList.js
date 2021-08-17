import React from "react";
import TodoGroup from "./TodoGroup";
import TodoForm from "./TodoForm";


function TodoList(){
    return(
        <div>
            <h1>To do List</h1>
            <TodoGroup></TodoGroup>
            <TodoForm ></TodoForm>
        </div>
    );
}

export default TodoList;