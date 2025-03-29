import { useState } from "react";
import { Todo } from "../interfaces/Todo";
import { format } from "date-fns";
import "./../styles/TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onEdit, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
        title="Mark as completed"
        placeholder="Mark as completed"
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          autoFocus
          className="edit-input"
          placeholder="Edit your task"
        />
      ) : (
        <span className="todo-text" onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}

      <div className="todo-actions">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="edit-button"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button onClick={() => onDelete(todo.id)} className="delete-button">
          Delete
        </button>
      </div>

      <span className="todo-date">
        {format(new Date(todo.createdAt), "MMM dd, yyyy")}
      </span>
    </li>
  );
};

export default TodoItem;
