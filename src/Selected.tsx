import React from "react";
import { PersonType, PropsTypeSelected } from "./Types";

const Selected = ({
  data,
  removeSelected,
  highlightedUser,
}: PropsTypeSelected) => {
  return (
    <div
      className={`bg-[#E8E8E8] h-8 w-[160px] justify-between pl-1 pr-2 flex items-center rounded-full ${
        highlightedUser ? "border border-black" : ""
      }`}
    >
      <img src={data.photo} className="h-7 w-7 rounded-full" />
      <p className="text-sm">{data.name}</p>
      <button
        className="border-none outline-none"
        onClick={() => removeSelected(data)}
      >
        X
      </button>
    </div>
  );
};

export default Selected;
