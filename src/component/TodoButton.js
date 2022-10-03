import React, { useState } from "react";

function TodoButton({ callback }) {
  const addTodo = () => {
    callback();
  };

  return (
    <>
      <button className="submitTodo" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
}

export default TodoButton;
