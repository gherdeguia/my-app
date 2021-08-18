import logo from './logo.svg';
import logoDire from './images/direwolf.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './features/todos/components/TodoList';
import TodoneList from './features/todos/components/DoneList';
import NotFoundPage from './features/notfound/notfound';
import { BsCalendar, BsCardChecklist } from "react-icons/bs";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import { Navbar, Nav, Container, Row } from "react-bootstrap";


function App(){
    return(
        <BrowserRouter>
            <Container fluid className="AppMain">
                <Row>
                    <Navbar bg="light" variant="light" >
                        <Container>
                            <Navbar.Brand>
                                <img alt="" src={logoDire} width="40" height="30" className="d-inline-block align-top"/>{' '}
                                To do or Not to do
                            </Navbar.Brand>

                            <Nav className="me-auto">
                                <Link className="nav-link" to="/todo"><BsCalendar />&nbsp;<strong>To do</strong></Link>
                                <Link className="nav-link" to="/done"><BsCardChecklist />&nbsp;<strong>Done</strong></Link>
                            </Nav>

                            <Navbar.Text>
                                Hello There
                            </Navbar.Text>
                        </Container>
                    </Navbar>
                </Row>
                <br/>
            </Container>

            <Switch>
                <Route exact path="/"></Route>
                <Route exact path="/todo" component={TodoList}></Route>
                <Route exact path="/done" component={TodoneList}></Route>
                <Route path="*" component={NotFoundPage}></Route>
            </Switch>

        </BrowserRouter>
        
    );
}

export default App;