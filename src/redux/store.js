import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todosReducer";
// import { notificationReducer } from "./notificationReducer";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    // notification: notificationReducer,
  },
});
