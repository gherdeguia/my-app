import React from "react";
import DoneItem from "./DoneItem";
import { selectDoneList } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
function DoneGroup(){


    const doneIds = useSelector(selectDoneList);
    console.log(doneIds);
    return (
        <div>
            {doneIds.map((doneIds) => (
                <DoneItem key={doneIds.id} itemId={doneIds.id} />
            ))}
        </div>
    );
}

export default DoneGroup;