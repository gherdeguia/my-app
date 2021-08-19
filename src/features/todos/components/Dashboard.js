import React, { useEffect } from "react";
import groot from '../../../images/gg.jpg';
import { useSelector } from "react-redux";
import { getTodoData } from "../../axios/todos";
import { useDispatch } from "react-redux";
import { selectDoneList, selectTodoItems, AddTodos } from "../reducers/todosSlice";
import { Badge, Card, Col, Container, Row, Image } from "react-bootstrap";
import { BsClock, BsCardChecklist, BsCalendar, BsPerson } from "react-icons/bs";
import "../../todos/styles/common.css";


function Dashboard(props){

    const dispatch = useDispatch();

    //get data from the API
    useEffect( () => {
        getTodoData().then( (response) => {
            // console.log("reponse data: ",response.data);
            dispatch(AddTodos(response.data));
        })
    },[]);


    function Clock(props) {
        const timer = useNewTimer(new Date());
     
        return (
             <span>{timer.toLocaleTimeString()}</span>
         );
     }

     function useNewTimer(currentDate) {
        const [date, setDate] = React.useState(currentDate);
        
        React.useEffect(() => {
          var timerID = setInterval( () => tick(), 1000 );
          return function cleanup() {
              clearInterval(timerID);
            };
         });
        
        function tick() {
          setDate(new Date());
         }
        
        return date;
      }

      const doneCount = useSelector(selectDoneList);
      const todoCount = useSelector(selectTodoItems);


    return (
        <Container fluid>
            <Row>
                <Col md={8}>

                    <Card>
                        <Card.Body className="profile-greeting">

                            <Row>

                                <h6 className="media">
                                    <Badge bg="light" text="dark">
                                        <BsClock />&nbsp;{ Clock() }
                                    </Badge>

                                    <Badge bg="light" text="dark">
                                        <BsPerson />
                                    </Badge>
                                </h6>

                            </Row>

                            <Row>

                                <Image variant="top" className="profile-image" src={groot} roundedCircle />
                                <hr/>
                                <footer className="blockquote-footer quotable">I am Groooooot.</footer>
                            </Row>

                        </Card.Body>
                    </Card>

                </Col>
                <Col >

                    <Card>
                        <Card.Body>
                            <Row>
                                <h3>Hi! You have a Lot to do!</h3>
                                <hr/>
                            </Row>
                            <Row>
                                
                                <h6 className="media">
                                    <span className="count"><BsCalendar />&nbsp;To do&nbsp;</span>
                                    <Badge pill>{doneCount.length}</Badge>
                                </h6>
                                
                            </Row>

                            <Row>
                                <h6 className="media">
                                    <span className="count"><BsCardChecklist />&nbsp;Done&nbsp;</span>
                                    <Badge pill>{todoCount.length}</Badge>
                                </h6>
                            </Row>
                            
                            
                        </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container>
    )

}

export default Dashboard;