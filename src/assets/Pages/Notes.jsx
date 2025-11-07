import React from "react";
import Note from "./Note";

function Notes() {
  return (
    <>
      <div className="w-2/3 bg-sky-300 p-2 grid grid-cols-3 gap-2 h-screen overflow-auto">
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
      </div>
    </>
  );
}

export default Notes;
