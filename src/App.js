import { useEffect, useState } from "react";
import "./App.css";
import Input from "./component/Input";
import List from "./component/List";
import TodoButton from "./component/TodoButton";

function App() {
  const arr = JSON.parse(localStorage.getItem("todo"));

  const [todoitem, setTodoitem] = useState("");
  const [listItem, setListItem] = useState([]);

  const [list, setList] = useState([]);

  function insertIntoLocalStorage() {
    console.log("inside the insert function");

    let localArr = JSON.parse(localStorage.getItem("todo"));
    console.log(todoitem);
    localArr.push(todoitem);
    localStorage.setItem("todo", JSON.stringify([...localArr]));
    setListItem(localArr);
    // setFlag(true);
    document.getElementById("input-id001").value = "";
  }

  function getTodoItem(item) {
    setTodoitem(item);
  }

  return (
    <div className="App">
      <Input callback={getTodoItem} />
      <TodoButton callback={insertIntoLocalStorage}></TodoButton>
      <br />
      <br />

      <List lis={arr}></List>
    </div>
  );
}

export default App;
