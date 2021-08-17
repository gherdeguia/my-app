import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/todos/reducers/todosSlice";
import todosReducer from "../features/todos/reducers/todosSlice";

const store = configureStore({
    reducer : { 
        todoList: todosSlice
    },
});

export default store;