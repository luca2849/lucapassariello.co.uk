import React from "react";

const Skill = ({ skill }) => {
  return (
    <div>
      <svg class={`icon icon-${skill}`}>
        <use href={`/icons/symbol-defs.svg#icon-${skill}`}></use>
      </svg>
    </div>
  );
};

export default Skill;
