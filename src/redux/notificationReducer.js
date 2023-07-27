// import { createSlice } from "@reduxjs/toolkit";
// import {markCompletedAsync, 
//   addTodo,
//   addTodoAsync,
//   deleteTodo,
//   deleteTodoAsync,
//   markCompleted,
//   updateTodo,
//   updateTodoAsync,
// } from "./todosReducer";

// const INITIAL_STATE = { message: "" };

// const notificationSlice = createSlice({
//   name: "notification",
//   initialState: INITIAL_STATE,
//   reducers: {
//     resetNotification: (state, action) => {
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(addTodo, (state, action) => {
//         state.message = "Todo Added Successfully.";
//       })
//       .addCase(deleteTodo, (state, action) => {
//         state.message = "Deleted Successfully";
//       })
//       .addCase(updateTodo, (state, action) => {
//         state.message = "Todo Updated Successfully";
//       })
//       .addCase(markCompleted, (state, action) => {
//         state.message = "Task Completed Successfully";
//       });
//   },
// });

// export const notificationReducer = notificationSlice.reducer;
// export const { resetNotification } = notificationSlice.actions;

// export const notificationSelector = (state) => state.notification;
