import React from "react";

export default function ToDoList({ content, del }) {
  return (
    <>
      <form>
        <textarea value={content}></textarea>
      </form>
      <button>edit</button>
      <button onClick={del(content)}>delete</button>
    </>
  );
}
