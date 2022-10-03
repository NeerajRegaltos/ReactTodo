import React, { useState } from "react";

function TodoButton({ todo, todoList }) {

    const [listItem, setListItem] = useState([]);

    const arr = localStorage.getItem("todo");

    if (arr === null) {
        localStorage.setItem("todo", JSON.stringify([]));
    }
    const [flag, setFlag] = useState(false);

    function insertIntoLocalStorage() {
        if (todo.length > 0) {
            let localArr = JSON.parse(localStorage.getItem("todo"));
            localArr.push(todo);
            localStorage.setItem("todo", JSON.stringify([...localArr]));
            setListItem(localArr);
            setFlag(true);
        }
    }

    todoList(listItem);
    

    return (
        <>
            <button className="submitTodo" onClick={() => insertIntoLocalStorage()}>Add Todo</button>
        </>
    )
}

export default TodoButton;