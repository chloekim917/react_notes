import React from "react";

function ChildComponent(props) {
  function handleClick() {
    props.updateParentData("New Parent Data");
  }

  return <button onClick={handleClick}>Update Parent Data</button>;
}

export default ChildComponent