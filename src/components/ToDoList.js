import { useEffect, useState } from "react";
import {
  TodoListContainer,
  Input,
  Row,
  Button,
  Notification,
  TodoFooter,
  FilterButton,
  FilterButtons,
} from "../styles/styled-components";
import { Todo } from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAsync,
  deleteTodoAsync,
  getInitialState,
  todoSelector,
} from "../redux/todosReducer";
import {
  notificationSelector,
  resetNotification,
} from "../redux/notificationReducer";

export const ToDoList = () => {
  const [input, setInput] = useState("");
  const { todos } = useSelector(todoSelector);
  // const { message } = useSelector(notificationSelector);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialState());
  }, []);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleAdd = () => {
    const todo = input.trim();
    if (!todo) return;
    // dispatch(addTodo(todo));
    dispatch(addTodoAsync(todo));
    setInput("");
  };

  // if (message) {
  //   setTimeout(() => {
  //     dispatch(resetNotification());
  //   }, 1500);
  // }

  const getAllTodos = () => {
    setFilteredTodos(todos);
  };

  const remainingTodos = () => {
    const remaining = todos.filter((todo) => !todo.completed);
    setFilteredTodos(remaining);
  };

  const completedTodos = () => {
    const completed = todos.filter((todo) => todo.completed);
    setFilteredTodos(completed);
  };

  const clearCompletedTodos = () => {
    todos.forEach((todo) => {
      if (todo.completed) {
        dispatch(deleteTodoAsync(todo.id));
      }
    });
  };

  return (
    <TodoListContainer>
      {/* {message && <Notification>{message}</Notification>} */}

      <Row>
        <Input
          placeholder="Write your todos here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleAdd}>Add</Button>
      </Row>
      {filteredTodos?.length > 0 &&
        filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.title}
            completed={todo.completed}
          />
        ))}

      <TodoFooter>
        <FilterButtons>
          <FilterButton onClick={getAllTodos}>All Todos</FilterButton>
          <FilterButton onClick={remainingTodos}>To be done</FilterButton>
          <FilterButton onClick={completedTodos}>Completed Todos</FilterButton>
          <FilterButton onClick={clearCompletedTodos}>
            Clear Completed
          </FilterButton>
        </FilterButtons>
      </TodoFooter>
    </TodoListContainer>
  );
};
