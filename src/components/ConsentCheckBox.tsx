"use client";
import React from "react";

const ConsentCheckBox = () => {
  return (
    <div className={"flex space-x-2"}>
      <input id={"consent"} type={"checkbox"} />
      <label htmlFor={"consent"}>
        I've read all the instructions and requirements and I wish to proceed
      </label>
    </div>
  );
};

export default ConsentCheckBox;
