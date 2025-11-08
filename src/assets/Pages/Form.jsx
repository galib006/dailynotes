import React, { createContext, useContext, useState } from "react";
import { NotesContext } from "../../components/NotesProvider";
function Form() {
  const { notes, setNotes } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const reload = (e) => {
    e.preventDefault();
    setNotes([...notes, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  return (
    <>
      <div className="bg-blue-300 w-1/3 p-2">
        <form
          action=""
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            reload(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter Title"
            className="border-2 border-black active:outline-none bg-white p-1.5"
            maxLength="22"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <textarea
            name=""
            id=""
            placeholder="Details (Maximum 85 character)"
            className="border-2 border-black active:outline-none bg-white h-20 p-1.5"
            maxLength="85"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
          <input type="submit" value="SUBMIT" className="btn btn-success" />
        </form>
      </div>
    </>
  );
}

export default Form;
