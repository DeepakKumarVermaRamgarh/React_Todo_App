import { useDispatch } from "react-redux";
import {
  Button,
  DeleteButton,
  Input,
  TodoItemWrapper,
  TodoText,
} from "../styles/styled-components";
import {
  deleteTodo,
  deleteTodoAsync,
  markCompleted,
  markCompletedAsync,
  updateTodo,
  updateTodoAsync,
} from "../redux/todosReducer";
import { useState } from "react";

export const Todo = ({ id, text, completed }) => {
  // State to manage if the todo is in edit mode and the edited text
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle removing a todo item
  const handleRemove = (id) => {
    dispatch(deleteTodoAsync(id));
    // dispatch(deleteTodo(id));
  };

  // Function to enable edit mode for a todo item
  const handleEdit = (id) => {
    if (completed) return; // Do not allow editing of completed todos
    setIsEdit(true);
  };

  // Function to handle updating a todo item
  const handleUpdate = (id) => {
    if (editText.trim() === text) {
      setIsEdit(false);
      return;
    }

    dispatch(updateTodoAsync({ id, editText }));
    // dispatch(updateTodo({ id, text: editText }));
    setIsEdit(false);
  };

  // Function to mark a todo item as completed
  const handleComplteTask = (id) => {
    dispatch(markCompletedAsync(id));
    // dispatch(markCompleted(id));
  };

  return (
    <TodoItemWrapper>
      {/* Checkbox for marking the todo item as completed */}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleComplteTask(id)}
        disabled={completed}
      />

      {isEdit ? (
        <>
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            disabled={completed}
          />
          <Button onClick={() => handleUpdate(id)} disabled={completed}>
            <img src="./assets/tick.svg" />
          </Button>
        </>
      ) : (
        <>
          <TodoText onDoubleClick={() => handleEdit(id)}>{text}</TodoText>
          <DeleteButton onClick={() => handleRemove(id)}>
            <img src="./assets/delete.svg" />
          </DeleteButton>
        </>
      )}
    </TodoItemWrapper>
  );
};
