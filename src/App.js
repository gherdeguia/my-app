import logo from './logo.svg';
import logoDire from './images/direwolf.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css";
import Dashboard from './features/todos/components/Dashboard';
import TodoList from './features/todos/components/TodoList';
import TodoneList from './features/todos/components/DoneList';
import NotFoundPage from './features/notfound/notfound';
import { BsCalendar, BsCardChecklist, BsHouse } from "react-icons/bs";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import { Navbar, Nav, Container, Row } from "react-bootstrap";


function App(){
    return(
        <BrowserRouter>
            <Container fluid className="AppMain">
                <Row>
                    <Navbar bg="dark" variant="dark" >
                        <Container>
                            <Navbar.Brand className="brandImg">
                                <img alt="" src={logoDire} width="40" height="30" className="d-inline-block align-top"/>{' '}
                            </Navbar.Brand>

                            <Nav className="me-auto">
                                <Link className="nav-link" to="/"><BsHouse />&nbsp;<strong>Home</strong></Link>
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
                <Route exact path="/" component={Dashboard}></Route>
                <Route exact path="/todo" component={TodoList}></Route>
                <Route exact path="/done" component={TodoneList}></Route>
                <Route path="*" component={NotFoundPage}></Route>
            </Switch>

        </BrowserRouter>
        
    );
}

export default App;