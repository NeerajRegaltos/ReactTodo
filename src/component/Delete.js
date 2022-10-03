import React, { useState } from "react";

function Delete(props) {

    const arr = JSON.parse(localStorage.getItem("todo"));
    const [list, setList] = useState(arr);
    function handleDelete(e) {

        arr.splice(e.target.id, 1);
        localStorage.setItem("todo", JSON.stringify(arr));
        setList(arr);
    }

    props.deletionUpdatedList(list)

    return (
        <>
            <span className="deleteButton" onClick={(e) => handleDelete(e)}><i id={props.deleteIn} className="fa-solid fa-trash"></i></span>
        </>
    )
}

export default Delete;