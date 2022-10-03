import React, { useState, useRef } from "react";

function Input(props) {
    const inputValue = useRef();


    const addTodo = () => {
        console.log(inputValue.current.value)
        props.func(inputValue.current.value);
        console.log()
        inputValue.current.value = "";
    }

    return (
        <>
            <input type="text" ref={inputValue} 
                placeholder="Enter Todo"
                className="inputBox" />

                <button onClick={addTodo}>Submit</button>
        </>
    );
}

export default Input;
