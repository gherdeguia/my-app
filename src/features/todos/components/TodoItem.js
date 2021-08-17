import React from "react";
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/TodoItem.css";
import { InputGroup, Button, ListGroup, ButtonGroup } from "react-bootstrap";

function TodoItem(props){
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const todoStatus = todo.done ? "true" : "";
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(ToggleTodo(props.itemId));
    }

    function handleDelete(event){
        dispatch(DeleteTodo(props.itemId));
        
    }

    return (
        <ListGroup variant="flush">
            <ListGroup.Item>
                <ButtonGroup >
                    <InputGroup.Text className={`item-selected-${todoStatus}`} onClick={handleClick}>{todo.text}</InputGroup.Text>{' '}
                    <Button variant="dark" onClick={handleDelete} value={todo.id}>X</Button>{' '}
                </ButtonGroup >
            </ListGroup.Item>
        </ListGroup>
                
    );
}

export default TodoItem;
