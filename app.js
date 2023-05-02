import React, { useState } from "react";
import ChildComponent from "./child";

const ParentComponent = () => {
  const [parentData, setParentData] = useState("Initial Parent Data");

  const updateParentData = (newData) => {
    setParentData(newData);
  };

  return <ChildComponent updateParentData={updateParentData} />;
};
