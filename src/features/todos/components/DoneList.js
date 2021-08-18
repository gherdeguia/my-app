import React from "react";
import DoneItem from "./DoneItem";
import { selectDoneList } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import { Container, Col, Row, Card } from "react-bootstrap";

function TodoneList(){

    const doneIds = useSelector(selectDoneList);
    console.log(doneIds);
    return (

        <Container fluid className="App">
                <Row></Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header><h1>Already Done</h1></Card.Header>
                            <Card.Body>
                                {doneIds.map((doneIds) => (
                                    <DoneItem key={doneIds.id} itemId={doneIds.id} />
                                ))}
                            </Card.Body>
                        </Card>

                  
                    </Col>
                </Row>
        </Container>
    );
}

export default TodoneList;