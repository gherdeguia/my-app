import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
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
            // console.log("Add : ", action)
            todosAdapter.addOne(state, {
                id : uuid(),
                text: action.payload,
                done: false,
            });
            return state;
        },
        ToggleTodo(state, action) {
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
            //other logic that can be used
            // console.log("Add : ", action)
            // todosAdapter.updateOne(state, {
            //     id : uuid,
            //     text: action.payload,
            //     done: false,
            // });
            // return state;
        },
        DeleteTodo(state, action){
            todosAdapter.removeOne(state, action.payload);
            return state;
        },
    },
});

export const {AddTodo, ToggleTodo, DeleteTodo} = todosSlice.actions;

export const {selectIds : selectTodoIds, selectById: selectTodoById} = 
todosAdapter.getSelectors((state) => state.todoList);

export default todosSlice.reducer;