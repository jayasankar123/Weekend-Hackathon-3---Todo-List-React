import React from "react";
import "./../styles/App.css";
import ToDoList from "./ToDoList";
let tasksArray = [];
function App() {
  let [tasks, updateTasks] = React.useState([]);
  let [textArea, updateTextArea] = React.useState("");

  function handleChange(event) {
    updateTextArea(event.target.value);
  }
  function handleClick() {
    if (textArea.trim() === "") {
      return;
    } else {
      tasksArray.push(textArea);
      updateTasks(tasksArray);
      console.log(tasks);
      updateTextArea("");
    }
  }
  function handleDelete(event, content) {
    tasksArray = tasksArray.filter((el) => {
      if (el !== content) return el;
    });
    updateTasks(tasksArray);
  }

  return (
    <div id="main">
      {
        //Do not alter main div
        //Please do not alter the functional component as tests depend on the type of component.
      }
      <form>
        <textarea id="task" onChange={handleChange} value={textArea}></textarea>
      </form>
      <button onClick={handleClick}>Add Task</button>
      {tasksArray.map((el) => (
        <ToDoList content={el} del={handleDelete} />
      ))}
    </div>
  );
}

export default App;
