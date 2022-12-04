import React, { useRef } from "react";

import InputField from "./inputfield";

function Addapp() {
  const nameForm = useRef(null);

  const handleClickEvent = () => {
    const form = nameForm.current;
    alert(
      `${form["appname"].value} ${form["url"].value} ${form["region"].value}`
    );
  };
  return (
    <div className="form">
      <button onClick={handleClickEvent}>Add app</button>
      <form ref={nameForm}>
        <InputField label={"App name"} name={"appname"} />{" "}
        <InputField label={"url"} name={"url"} />
        <InputField label={"Region"} name={"region"} />
      </form>
    </div>
  );
}

export default Addapp;
