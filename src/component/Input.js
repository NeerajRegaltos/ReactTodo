import React, { useState, useRef } from "react";

function Input({ callback }) {
  const inputValue = useRef("");

  const addTodo = () => {
    console.log(inputValue.current.value);
    callback(inputValue.current.value);
    //inputValue.current.value = "";
  };

  return (
    <>
      <input id="input-id001"
        type="text"
        ref={inputValue}
        placeholder="Enter Todo"
        className="inputBox"
        onChange={addTodo}
      />
    </>
  );
}

export default Input;
