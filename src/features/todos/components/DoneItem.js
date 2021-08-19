import React from "react";
import { selectTodoById } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import "../styles/TodoItem.css";
import { Card } from "react-bootstrap";

function TodoneItem(props){

    const todone = useSelector((state) => selectTodoById(state, props.itemId));
    
    // console.log(todone);
    return (

        <Card className="doneItems animate__animated animate__fadeInUp" variant="dark" style={{ width: '25rem', display: 'inline-grid', margin: '10px'}}>
            <Card.Body>
                <Card.Title>{todone.id} - {todone.text}</Card.Title>
                <Card.Text></Card.Text>
                <footer className="blockquote-footer">{todone.createdAt}</footer>
            </Card.Body>
        </Card>
    );

}


export default TodoneItem;