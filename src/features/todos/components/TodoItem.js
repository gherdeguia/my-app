import React, { useState } from "react";
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/TodoItem.css";
import { Button, Toast, Modal, FormControl } from "react-bootstrap";
import { updateTodoData, deleteTodoData } from "../../axios/todos";
import { BsLayoutTextSidebarReverse, BsPencilSquare, BsXCircleFill } from "react-icons/bs";

function TodoItem(props){
    
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const todoStatus = todo.done ? "true" : "";
    const dispatch = useDispatch();

    //modal part
    const [todoText,setText] = useState(todo.text);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleClick(){
        updateTodoData(todo.id, {text: todo.text, done: !todo.done}).then( (response) => {
            dispatch(ToggleTodo({ props, updateTodoData: response.data} ));
        });
    }

    function handleDelete(event){
        deleteTodoData(todo.id).then( (response) => {
            dispatch(DeleteTodo(props.itemId));
        });
    }

    function changeHandler(event){
        setText(event.target.value);
        // console.log(event.target.value);
    }

    function handleUpdate(event){
        // console.log(todoText ? todoText : todo.text);
        updateTodoData(todo.id,{ text: todoText ? todoText : todo.text,  done: todo.done }).then( (response) => {
            dispatch(ToggleTodo({ props, updateTodoData: response.data} ));
        });
        setShow(false);
    }

    return (

        <Toast className="todoItem animate__animated animate__fadeInUp " bg="warning" style={{ width: '100%' }}>
            <Toast.Header>
                <BsLayoutTextSidebarReverse />&nbsp;
                <strong className={`me-auto item-selected-${todoStatus}`}>Entry No. {todo.id}</strong>
                <small>{todo.createdAt}&nbsp;</small>
                <BsPencilSquare onClick={handleShow} value={todo.id} className={`as-buttons item-selected-${todoStatus}`}/>&nbsp;
                <BsXCircleFill onClick={handleDelete} value={todo.id} className="as-buttons"/>
            </Toast.Header>
            <Toast.Body className={`item-selected-${todoStatus}` } onClick={handleClick}>{todo.text}</Toast.Body>

            <Modal 

                show={show} 
                onHide={handleClose}

                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>EDIT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG</p>
                    <FormControl as="textarea" value={todoText} onChange={changeHandler}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleUpdate} value={todo.id}>Save</Button>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>


        </Toast>
                
    );
}

export default TodoItem;
