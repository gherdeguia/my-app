import React from "react";
import TodoItem from "./TodoItem";
import {initialTodoList} from "../../../common/constants/constants";
import {getAllTodoIds} from "../../../common/utils/utils";
import { selectTodoIds } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
function TodoGroup(){


    const todoIds = useSelector(selectTodoIds);
    return (
        <div>
            {todoIds.map((id,index) => (
                <TodoItem key={id+index} itemId={id} />
            ))}
        </div>
    );
}

export default TodoGroup;