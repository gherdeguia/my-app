import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../styles/TodoForm.css"
import { AddTodo} from "../reducers/todosSlice";

function TodoForm(props) {

    const [todoText,setText] = useState("");
    const dispatch = useDispatch();

    function changeHandler(event){
        setText(event.target.value);
        // console.log(event.target.value);
    }

    function addHandler(event){
        dispatch(AddTodo(todoText));
        // console.log(todoText);
    }
    

    return (
        <div className="todoForm">
            <input 
                type="text" 
                placeholder="enter new to do item"
                value = {todoText}
                onChange={changeHandler}
            />
            <button onClick={addHandler}>Submit</button>
        </div>
    );
}

export default TodoForm;