import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { initialTodoList } from "../../../common/constants/constants";
import {v4 as uuid} from "uuid";
const todosAdapter = createEntityAdapter();
// const initialState = todosAdapter.getInitialState({
//     ids:["1","2"],
//     entities: {
//         1: {
//             id:"1",
//             text: "texting code something something",
//             done: false
//         },
//         2: {
//             id:"2",
//             text: "second testing testing",
//             done: true
//         },
//     },
    
// });

const initialState = todosAdapter.getInitialState({
    ids:[initialTodoList.id],
    entities: {[initialTodoList.id]: initialTodoList}
});

//create slices list name todos
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