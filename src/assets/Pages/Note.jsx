import React from "react";
import noteimg from "./../images/notesBg.png";

function Note({ item }) {
  return (
    <div
      className="bg-cover bg-center h-[540px] w-full p-9 pt-20 pl-8 pr-5"
      style={{ backgroundImage: `url(${noteimg})` }}
    >
      <h1 className="font-bold text-3xl text-justify">{item.title}</h1>
      <p className="mt-3">{item.desc}</p>
    </div>
  );
}

export default Note;
