import React, { useState } from "react";
import DeleteTask from "./DeleteTask";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [canEdit, setEdit] = useState([]);
  const handleList = () => {
    if (text) {
      const copiedList = [...list];
      const copiedCanEdit = [...canEdit];
      copiedList.push(text);
      copiedCanEdit.push(false);
      console.log(copiedCanEdit);
      setList(copiedList);
      setEdit(copiedCanEdit);
      setText("");
    } else {
      alert("Please enter the task");
    }
  };
  let data = "";
  const handleDelete = (index) => {
    const copiedList = [...list];
    const copiedCanEdit = [...canEdit];
    // const toRemove = event.target.value;
    // const index = copiedList.indexOf(toRemove);
    if (index > -1) {
      copiedList.splice(index, 1);
      copiedCanEdit.splice(index, 1);
    }
    setList(copiedList);
    setEdit(copiedCanEdit);
    console.log(copiedList);
    console.log(copiedCanEdit);
  };

  const handleEdit = () => {
    const copiedList = [...list];
    const toEdit = event.target.value;
    const index = copiedList.indexOf(toEdit);
    const copiedCanEdit = [...canEdit];
    copiedCanEdit[index] = true;
    setEdit(copiedCanEdit);
    console.log(copiedCanEdit);
  };

  return (
    <div id="main">
      <textarea
        id="task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button id="btn" onClick={() => handleList()}>
        Add Task
      </button>
      <DeleteTask
        list={list}
        setList={setList}
        canEdit={canEdit}
        setEdit={setEdit}
        handleEdit={() => handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
