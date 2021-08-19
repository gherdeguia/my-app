import React, { useEffect } from "react";
import TodoGroup from "./TodoGroup";
import TodoForm from "./TodoForm";
import { AddTodos } from "../reducers/todosSlice";
import { getTodoData } from "../../axios/todos";
import { useDispatch } from "react-redux";
import { Container, Col, Row, Card } from "react-bootstrap";

function TodoList(){
    

    return(
        <Container fluid className="App">
            <Row>
                <Col></Col>
                <Col>
                    <Card>
                        <Card.Header>
                            <h1>To do..</h1>
                            <TodoForm ></TodoForm>
                        </Card.Header>
                        <Card.Body>
                            <TodoGroup></TodoGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default TodoList;