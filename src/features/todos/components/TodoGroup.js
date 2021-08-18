import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { selectTodoIds, AddTodos } from "../reducers/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTodoData } from "../../axios/todos";
function TodoGroup(){

    const todoIds = useSelector(selectTodoIds);
    const dispatch = useDispatch();

    //get data from the API
    useEffect( () => {
        getTodoData().then( (response) => {
            // console.log("reponse data: ",response.data);
            dispatch(AddTodos(response.data));
        })
    });

   
    return (
        <div>
            {todoIds.map((id,index) => (
                <TodoItem key={id+index} itemId={id} />
            ))}
        </div>
    );
}

export default TodoGroup;