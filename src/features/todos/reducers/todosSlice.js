import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { initialTodoList } from "../../../common/constants/constants";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids:[initialTodoList.id],
    entities: {[initialTodoList.id]: initialTodoList}
});

const todosSlice = createSlice({
    name : "todos",
    initialState : initialState,
    reducers : {
        AddTodo(state, action) {
            todosAdapter.addOne(state, action.payload);
        },
        ToggleTodo(state, action) {
            const todo = state.entities[action.payload];
            // console.log(todo)
            //todo.done = !todo.done;
            
            //other logic that can be used
            todosAdapter.updateOne(state, {
                id : action.payload.id,
                changes: action.payload.updateTodo
            });
            return state;
        },
        DeleteTodo(state, action){
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

export const selectDoneList = createSelector([selectAllTodos], (todos) =>
 todos.filter((todo) => todo.done)
);

export default todosSlice.reducer;