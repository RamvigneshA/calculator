import React, { useState } from "react";

export const Folder = ({ root }) => {
  const [show, setShow] = useState(true);

  function handleShow() {
    setShow(!show)
  }

  if (root.type === "directory") {
    return (
      <div style={{ marginTop: "20px" }}>
        <h1 onClick={handleShow}>
          <span style={{ cursor: "pointer" }}> 🖿{root.name}</span>
        </h1>
        <div
          style={
            show
              ? { display: "block", paddingLeft: "25px" }
              : { display: "none" }
          }
        >
          {root.children.map((child) => (
            <Folder root={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <h1>
        <span>📄{root.name}</span>
      </h1>
    );
  }
};
