import React from "react";

function OutlinedButton({
  borderColor,
  textColor,
  text,
}: {
  borderColor: string;
  textColor: string;
  text: string;
}) {
  return (
    <button
      className={`bg-transparent border-2 ${borderColor} ${textColor} font-bold text-2xl  px-[30px] py-[15px] rounded`}
    >
      <h4>{text}</h4>
    </button>
  );
}

export default OutlinedButton;
