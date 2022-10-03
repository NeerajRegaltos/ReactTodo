
import { useEffect, useState } from 'react';
import './App.css';
import Input from './component/Input';
import List from './component/List';
import TodoButton from './component/TodoButton';


function App() {
  const arr = JSON.parse(localStorage.getItem("todo"));

  const [todoitem, setTodoitem] = useState("");

  const [list, setList] = useState([]);

  function getTodoItem(item) {
    setTodoitem(item);
  }

  function getTodoList(list) {
    setList(list);
  }


  return (
    <div className="App">
      <Input func={getTodoItem} ></Input>
      <TodoButton todo={todoitem} todoList={getTodoList} ></TodoButton>
      <br /><br />

      <List lis={arr}></List>

    </div>
  );
}

export default App;
