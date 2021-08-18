import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../styles/TodoForm.css"
import { AddTodo } from "../reducers/todosSlice";
import { addTodoData } from "../../axios/todos";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { BsBookmarkPlus } from 'react-icons/bs';

function TodoForm(props) {

    const [todoText,setText] = useState("");
    const dispatch = useDispatch();

    function changeHandler(event){
        setText(event.target.value);
    }

    function addHandler(event){
        addTodoData(todoText).then( (response) => {
            dispatch(AddTodo(response.data));
        });
        setText(event.target = '');
    }
    

    return (

        <InputGroup className="mb-3" style={{ width: '45rem' }}>
            <FormControl 
                placeholder="Add new To do Item"
                aria-label="Add new To do Item"
                aria-describedby="basic-addon3"
                value = {todoText}
                onChange={changeHandler}
            />
            <Button variant="outline-success" id="button-addon2" onClick={addHandler}><BsBookmarkPlus /> ADD</Button>
        </InputGroup>

    );
}

export default TodoForm;