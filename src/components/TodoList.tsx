import { Todo } from "../interfaces/Todo";
import TodoItem from "./TodoItem";
import "./../styles/TodoList.css";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({ todos, onToggle, onEdit, onDelete }: TodoListProps) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet. Add one above!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
