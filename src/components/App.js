import React from "react";
import "./../styles/App.css";
//import ToDoList from "./ToDoList";

//let index = -1;
function App() {
  let [tasks, updateTasks] = React.useState([]);
  let tasksArr = [...tasks];
  let [textArea, updateTextArea] = React.useState("");
  let str = "";

  function handleTaskChange(event) {
    str = event.target.value;
    return;
  }

  function saveTask(index) {
    if (str === "") {
      return;
    }
    let obj = { ...tasksArr[index] };
    obj.edit = false;
    obj.content = str;
    tasksArr[index] = { ...obj };
    updateTasks([...tasksArr]);
    str = "";
    return;
  }

  function handleChange(event) {
    updateTextArea(event.target.value);
    //console.log(textArea);
    return;
  }

  function handleClick() {
    let textContent = textArea;
    if (textContent.trim() === "") {
      return;
    }
    let obj = {};
    obj.content = textArea;
    obj.edit = false;
    tasksArr.push(obj);
    updateTasks([...tasksArr]);
    updateTextArea("");
  }

  function handleDelete(index) {
    tasksArr = tasksArr.filter((el, i) => {
      return i !== index;
    });
    updateTasks([...tasksArr]);
  }

  function handleEdit(index) {
    if (tasksArr[index].edit === true) {
      return;
    }
    let obj = {};
    let element = (
      <>
        <textarea
          className="edit task"
          onChange={() => handleTaskChange(event)}
        ></textarea>
        <button className="save task" onClick={() => saveTask(index)}>
          SAVE TASK
        </button>
      </>
    );
    obj.content = tasksArr[index].content;
    obj.edit = true;
    obj.element = element;
    tasksArr[index] = { ...obj };
    updateTasks([...tasksArr]);
  }

  return (
    <div id="main">
      {
        //Do not alter main div
        //Please do not alter the functional component as tests depend on the type of component.
      }
      <textarea id="task" onChange={handleChange} value={textArea}></textarea>
      <button id="btn" onClick={handleClick}>
        ADD TASKS
      </button>
      <ul>
        {tasks.map((el, index) => (
          <li key={el.content} className="list">
            {el.content}
            {el.edit && el.element}
            <div>
              <button className="edit" onClick={() => handleEdit(index)}>
                EDIT
              </button>

              <button className="delete" onClick={() => handleDelete(index)}>
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
