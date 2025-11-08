import React, { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "../../components/NotesProvider";

function Notes() {
  const {notes} = useContext(NotesContext)
  return (
    <>
      <div className="w-2/3 bg-sky-300 p-2 grid grid-cols-3 gap-2 h-screen overflow-auto">
      {
        notes.map((item,idx)=>(
          <Note key={idx} item={item}></Note>
        ))
      }
        
      </div>
    </>
  );
}

export default Notes;
