import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { initialTodoList } from "../../../common/constants/constants";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
    name : "todos",
    initialState : initialState,
    reducers : {
        AddTodo(state, action) {
            todosAdapter.addOne(state, action.payload);
        },
        ToggleTodo(state, action) {
            // other logic that can be used
            todosAdapter.updateOne(state, {
                id : action.payload.props.itemId,
                changes: action.payload.updateTodoData
            });
            return state;
            // console.log(action.payload);
        },
        DeleteTodo(state, action){
            // console.log(action.payload);
            todosAdapter.removeOne(state, action.payload);
        },
        AddTodos(state,action){
          todosAdapter.addMany(state, action.payload);
        },
    },
});

export const {AddTodo, ToggleTodo, DeleteTodo, AddTodos} = todosSlice.actions;

export const {
    selectIds : selectTodoIds, 
    selectById: selectTodoById,
    selectAll : selectAllTodos,
} = todosAdapter.getSelectors((state) => state.todoList);

export const selectDoneList = createSelector([selectAllTodos], (todos) => {
    return todos.filter((todo) => todo.done)
});

export const selectDoneItems = createSelector([selectAllTodos], (todos) => todos.filter((todo) => todo.done));

export const selectTodoItems = createSelector([selectAllTodos], (todos) => todos.filter((todo) => !todo.done));

export default todosSlice.reducer;