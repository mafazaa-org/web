import React from "react";

function FilledButton({
  backgroundColor,
  textColor,
  text,
}: {
  backgroundColor: string;
  textColor: string;
  text: string;
}) {
  return (
    <button
      className={`${backgroundColor} ${textColor} font-bold text-2xl px-[30px] py-[15px] rounded`}
    >
      <h4>{text}</h4>
    </button>
  );
}

export default FilledButton;
