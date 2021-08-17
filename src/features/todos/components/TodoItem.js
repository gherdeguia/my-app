import React from "react";
import { selectTodoById, ToggleTodo } from "../reducers/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/TodoItem.css";
import { InputGroup, FormControl } from "react-bootstrap";

function TodoItem(props){
    // const todoIds = useSelector(selectTodoIds);
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const todoStatus = todo.done ? "true" : "";
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(ToggleTodo(props.itemId));
    }

    return (
                <InputGroup>
                    <div className={`item-selected-${todoStatus}`} onClick={handleClick}>{todo.text}</div>
                </InputGroup>
                
    );
    //onclick status will change
}

export default TodoItem;
