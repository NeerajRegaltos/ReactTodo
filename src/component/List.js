
import React, { useEffect, useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";

function List({ lis }) {

    const arr = JSON.parse(localStorage.getItem("todo"));

    let [lists, setLists] = useState(lis);
    const [text, setText] = useState("");
    function afterDeletionUpdatedList(deletedUpdateList) {
        setLists(deletedUpdateList);
    }

    function getTodo(todo) {
        setText(todo);
    }
    

    return (
        <>
            <div>
                <ul className="todoItemsList">
                    {arr.length > 0 ? arr.map((item, index) => <li key={index} className={index}> {item} <Edit editIn={index} sendTodo={getTodo}></Edit> <Delete deleteIn={index} deletionUpdatedList={afterDeletionUpdatedList}></Delete></li>) : <h4>No tasks...</h4>}
                </ul>
            </div>
        </>
    )
}

export default List;