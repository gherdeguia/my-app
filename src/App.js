import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="appcontainer">
          <TodoList></TodoList>
        </div>
      </header>
    </div>
  );
}

export default App;
