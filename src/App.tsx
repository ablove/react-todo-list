import { useState } from "react";
import { Todo } from "./interfaces/Todo";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./styles/main.css";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default App;
