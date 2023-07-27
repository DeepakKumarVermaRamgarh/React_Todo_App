// Async Thunks for API interactions
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state for the todo list
const INITIAL_STATE = { todos: [] };

// Fetch initial todos from the API
export const getInitialState = createAsyncThunk("todo/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
});

// Add a new todo to the API
export const addTodoAsync = createAsyncThunk(
  "todo/addTodo",
  async (payload) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return res.json();
  }
);

// Delete a todo from the API
export const deleteTodoAsync = createAsyncThunk(
  "todo/deleteTodo",
  async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
      }
    );
    return res;
  }
);

// Update a todo in the API
export const updateTodoAsync = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, payload }) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    return res.json();
  }
);

// Mark a todo as completed in the API
export const markCompletedAsync = createAsyncThunk(
  "todo/markCompleted",
  async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: true }),
      }
    );
    return res.json();
  }
);

// Redux slice for managing the todo list state
const todoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // When fetching initial todos is fulfilled, update the state with the fetched data
      .addCase(getInitialState.fulfilled, (state, action) => {
        state.todos = [...action.payload];
      })
      // When adding a new todo is fulfilled, update the state with the newly added todo
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.todos.push(action.payload);
      })
      // When deleting a todo is fulfilled, remove the corresponding todo from the state
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        const newtodos = state.todos.filter(
          (todo) => todo.id !== action.payload
        );
        state.todos = [...newtodos];
      })
      // When updating a todo is fulfilled, update the state with the updated todo
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        const updatedTodo = action.payload;
        const index = state.todos.findIndex(
          (todo) => todo.id === updatedTodo.id
        );
        if (index !== -1) {
          state.todos[index] = updatedTodo;
        }
      })
      // When marking a todo as completed is fulfilled, update the state with the completed todo
      .addCase(markCompletedAsync.fulfilled, (state, action) => {
        const completedTodo = action.payload;
        const index = state.todos.findIndex(
          (todo) => todo.id === completedTodo.id
        );
        if (index !== -1) {
          state.todos[index] = completedTodo;
        }
      });
  },
});

/*
const todoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {
    setInitialTodo: (state, action) => {
      state.todos = [...action.payload];
    },
    addTodo: (state, action) => {
      state.todos.unshift({
        id: state.todos.length + 1,
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos[action.payload.id - 1].title = action.payload.title;
    },
    markCompleted: (state, action) => {
      state.todos[action.payload - 1].completed = true;
    },
  },
});

*/

export const todoReducer = todoSlice.reducer;
// export const {
//   addTodo,
//   deleteTodo,
//   updateTodo,
//   markCompleted,
//   setInitialTodo,
// } = todoSlice.actions;

export const todoSelector = (state) => state.todos;
