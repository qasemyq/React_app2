import './App.css';
import React, {useEffect,useState} from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';


const local_storage_key = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);


  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(local_storage_key))
    if(storageTodos){
      setTodos(storageTodos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(local_storage_key, JSON.stringify(todos))
  },[todos])

  function addTodo(todo) {
    setTodos([todo, ...todos])
    
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo =>{
        if(todo.id === id){
          return {
            ...todo,
            complted: !todo.complted
          }
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
      <p>React Todo</p>
      <TodoForm addTodo={addTodo}/>
      <TodoList 
      todos={todos} 
      toggleComplete={toggleComplete}
      removeTodo={removeTodo}
      />
      </header>
    </div>
  );
}

export default App;
