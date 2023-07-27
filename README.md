
# Todo List App with Redux Toolkit

This is a simple Todo List application built using React and Redux Toolkit. The app allows users to manage their todo items, including adding, updating, deleting, and marking them as completed. The state management is handled using Redux Toolkit's powerful features, such as createAsyncThunk for handling asynchronous API requests and creating a Redux slice to manage the todo list state.


## Features

- View a list of todos fetched from an external API (JSONPlaceholder).
- Add new todo items to the list with a title and initial completion status.
- Update the title of an existing todo item.
- Mark a todo item as completed.
- Delete a todo item from the list.


## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/DeepakKumarVermaRamgarh/React_Todo_App.git
```

2. Navigate to the project directory:
    
```bash
cd todo-list-app
```

3. Install the required dependencies using npm or yarn:

```bash
npm install
```
or
```bash
yearn install
```

4. Start the development server:
```bash
npm start
```
or
```bash
yearn start
```

5. The application should now be running on http://localhost:3000.
## How to Use

- Once the app is running, you will see the Todo List with any existing todos fetched from the API.
- To add a new todo, type the title in the input field and click the "Add Todo" button.
- To update a todo, double-click on the todo text. This will enable edit mode. After making your changes, press the "✔" button to save the update.
- To mark a todo as completed, click the checkbox next to the todo. Completed todos cannot be edited.
- To delete a todo, click the "Delete" button next to the todo.


## API Reference
The application interacts with the JSONPlaceholder API to fetch, add, update, and delete todos. The createAsyncThunk function from Redux Toolkit is used to handle asynchronous API requests.

- Fetch Initial Todos: The app fetches the initial list of todos from https://jsonplaceholder.typicode.com/todos when it starts.

- Add Todo: When a new todo is added, it sends a POST request to https://jsonplaceholder.typicode.com/todos with the todo data and updates the state with the newly added todo.

- Update Todo: When a todo is updated, it sends a PUT request to https://jsonplaceholder.typicode.com/todos/{todoId} with the updated data and updates the state with the updated todo.

- Mark Completed: When a todo is marked as completed, it sends a PATCH request to https://jsonplaceholder.typicode.com/todos/{todoId} with the updated completed status and updates the state with the completed todo.

- Delete Todo: When a todo is deleted, it sends a DELETE request to https://jsonplaceholder.typicode.com/todos/{todoId} and removes the corresponding todo from the state.
## Folder Structure

todo-list-app/
├── public/
├── src/
│   ├── components/
│   ├── redux/
│   ├── styles/
│   ├── App.js
│   └── index.js
├── package.json
├── .gitignore
└── README.md

- `public/`: Contains public assets and the HTML template for the app.
- `src/`: Contains the main application files and folders.
- `components/`: Contains React components used in the application.
- `redux/`: Contains the Redux logic, including the Redux slice and async thunks for API interactions.
- `styles/`: Contains styled-components for styling the application.
- `App.js`: The main component that renders the Todo List app and handles state changes.
- `index.js`: The entry point of the application.

## Technologies Used

- **`React`**: A JavaScript library for building user interfaces.
- **`Redux Toolkit`**: A Redux package that simplifies the Redux workflow and includes utilities like `createAsyncThunk` and `createSlice`.
- **`styled-components`**: A popular CSS-in-JS library for styling React components.

## Contributing

Contributions are always welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.


## Authors

- [@Deepak Kumar Verma](https://github.com/DeepakKumarVermaRamgarh)

