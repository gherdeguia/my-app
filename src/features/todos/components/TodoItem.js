import React from "react";
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/TodoItem.css";
import { InputGroup, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import { updateTodoData, deleteTodoData } from "../../axios/todos";

function TodoItem(props){
    
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    // console.log(todo);
    const todoStatus = todo.done ? "true" : "";
    const dispatch = useDispatch();

    // function handleClick(){
    //     dispatch(ToggleTodo(props.itemId));
    // }

    function handleClick(){
        updateTodoData(todo.id, {done: !todo.done}).then( (response) => {
            dispatch(ToggleTodo({ props, updateTodoData: response.data} ));
        });
    }


    function handleDelete(event){
        // dispatch(DeleteTodo(props.itemId));

        deleteTodoData(todo.id).then( (response) => {
            dispatch(DeleteTodo(props.itemId));
        });
    }

    

    return (
        <ListGroup variant="flush">
            <ListGroup.Item>
                <ButtonGroup > {/* wrapper  */}
                    <InputGroup.Text className={`item-selected-${todoStatus}`} onClick={handleClick}>{todo.text}</InputGroup.Text>{' '}
                    <Button variant="dark" onClick={handleDelete} value={todo.id}>X</Button>{' '}
                </ButtonGroup >
            </ListGroup.Item>
        </ListGroup>
                
    );
}

export default TodoItem;
