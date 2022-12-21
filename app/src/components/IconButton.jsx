import React from "react";

/*Rounded square button with an svg icon and text, using tailwind */

const IconButton = (props) => {
  return (
    <div className="flex flex-col items-center text-emerald-400 m-3 w-20 h-20 text-lg border-solid border border-emerald-400 rounded-lg     hover:border-2 hover:cursor-pointer">
      <p className="text-center">{props.text}</p>
    </div>
  );
};

export default IconButton;
