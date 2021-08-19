import React, { useEffect } from "react";
import groot from '../../../images/gg.jpg';
import { useSelector } from "react-redux";
import { getTodoData } from "../../axios/todos";
import { useDispatch } from "react-redux";
import { selectDoneList, selectTodoItems, AddTodos } from "../reducers/todosSlice";
import { Badge, Card, Col, Container, Row, Image } from "react-bootstrap";
import { BsClock, BsCardChecklist, BsCalendar, BsPerson, FaEdit } from "react-icons/bs";
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
             <span >{timer.toLocaleTimeString()}</span>
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
      const hasTodo = (todoCount.length > 0) ? "animate__animated animate__swing animate__infinite animate__slow" : "";


    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col md={7}>

                    <Card>
                        <Card.Body className="profile-greeting">

                            <Row>

                                <h6 className="media">
                                    <Badge bg="light" text="dark" className="animate__animated animate__pulse animate__infinite animate__slow">
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
                <Col md={3}>

                    <Card>
                        <Card.Body >
                            <Row>
                                <h3>To do or Not to do</h3>
                                <hr/>
                            </Row>
                            <Row>
                                
                                <h6 className="media">
                                    <span className="count"><BsCalendar />&nbsp;To do&nbsp;</span>
                                    <Badge pill className={`${hasTodo}`}>{todoCount.length}</Badge>
                                </h6>
                                
                            </Row>

                            <Row>
                                <h6 className="media">
                                    <span className="count"><BsCardChecklist />&nbsp;Done&nbsp;</span>
                                    <Badge pill className="">{doneCount.length}</Badge>
                                </h6>
                            </Row>
                            
                            
                        </Card.Body>
                    </Card>

                </Col>
                <Col></Col>
            </Row>
        </Container>
    )

}

export default Dashboard;