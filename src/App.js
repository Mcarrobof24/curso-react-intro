import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton} from "./CreateTodoButton";
import React from "react";
import "./App.css";

const defaultTodos = [
  { text: 'Cortar', completed: true},
  { text: 'Tomar el cursos de intrdo a react', completed: false},
  { text: 'Caminar', completed: false},
  { text: 'Correr', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
          />
        ))}
      </TodoList>

      <CreateTodoButton />  
    </React.Fragment>
  );
}

export default App;
