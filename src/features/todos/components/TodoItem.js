import React from "react";
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/TodoItem.css";
import { Button, Toast } from "react-bootstrap";
import { updateTodoData, deleteTodoData } from "../../axios/todos";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";

function TodoItem(props){
    
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    // console.log(todo);
    const todoStatus = todo.done ? "true" : "";
    const dispatch = useDispatch();

    function handleClick(){
        updateTodoData(todo.id, {done: !todo.done}).then( (response) => {
            dispatch(ToggleTodo({ props, updateTodoData: response.data} ));
        });
    }

    function handleDelete(event){
        deleteTodoData(todo.id).then( (response) => {
            dispatch(DeleteTodo(props.itemId));
        });
    }

    return (

        <Toast className="todoItem animate__animated animate__fadeInUp " bg="warning" style={{ width: '100%' }}>
            <Toast.Header>
                <BsLayoutTextSidebarReverse />&nbsp;
                <strong className={`me-auto item-selected-${todoStatus}`}>Entry No. {todo.id}</strong>
                <small>{todo.createdAt}&nbsp;</small>
                <Button variant="outline-secondary" size="sm" onClick={handleDelete} value={todo.id}>&times;</Button>
            </Toast.Header>
            <Toast.Body className={`item-selected-${todoStatus}` } onClick={handleClick}>{todo.text}</Toast.Body>
        </Toast>
                
    );
}

export default TodoItem;
