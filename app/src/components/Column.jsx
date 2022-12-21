import React from "react";

/* Column with a title and a description, using tailwind */
const Column = (props) => {
  return (
    <div className="flex flex-col items-center text-white m-3 pt-5 h-full">
      <h3 className="text-2xl font-bold">{props.title}</h3>
      <p className="text-center">{props.description}</p>
      {props.children}
    </div>
  );
};

export default Column;
