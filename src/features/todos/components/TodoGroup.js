import React from "react";
import TodoItem from "./TodoItem";
import { selectTodoIds, AddTodos } from "../reducers/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTodoData } from "../../axios/todos";
import { Container, Col, Row, Toast } from "react-bootstrap";
function TodoGroup(){

    const todoIds = useSelector(selectTodoIds);
    return (

        <Container fluid className="App">
                <Row> 
                    <Col>
                        {todoIds.map((id,index) => (
                            <TodoItem key={id+index} itemId={id} />
                        ))}
                    </Col>
                    
                </Row>
        </Container>
    );
}

export default TodoGroup;