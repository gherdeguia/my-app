import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './features/todos/components/TodoList';
import TodoneList from './features/todos/components/DoneList';
import NotFoundPage from './features/notfound/notfound';


import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="appcontainer">
          <BrowserRouter>

            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                React Bootstrap
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link to="/todo">To do</Link>
                  </Nav.Link>
                  <Nav.Link onClick="/done">
                    Done
                    <Link to="/done">Done</Link>
                  </Nav.Link>
                </Nav>

              </Container>
            </Navbar>


            <ul>
              <Link to="/todo">to do</Link>
              <Link to="/done">done</Link>
            </ul>
            <Switch>
              <Route exact path="/"></Route>
              <Route exact path="/todo" component={TodoList}></Route>
              <Route exact path="/done" component={TodoneList}></Route>

              <Route path="*" component={NotFoundPage}></Route>
            </Switch>
          </BrowserRouter>

          



          {/* <TodoList></TodoList> */}
        </div>
      </header>
    </div>
  );
}

export default App;
