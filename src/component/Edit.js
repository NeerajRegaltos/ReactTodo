import React, { useState } from "react";

function Edit({ editIn }) {
    console.log("EDITING")
    const arr = JSON.parse(localStorage.getItem("todo"));
    const [todo, setTodo] = useState();

    console.log(todo);

    return (
        <>
            <span className="editButton" onClick={(e) => setTodo(arr[e.target.id.slice(1)])}><i className="fa-solid fa-pencil" id={"e" + editIn}></i></span>
        </>
    )
}

export default Edit;