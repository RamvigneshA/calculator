import React, { useState } from "react";
export const Folder = ({ root }) => {
  const [show, setShow] = useState(true);
  const [directory, setDirectory] = useState(root);
  function addFile() {
    const newDirectory = { ...directory };
    if (root.type === "directory") {
      newDirectory.children = [
        ...newDirectory.children,
        { name: "fileName", type: "file" },
      ];
      setDirectory(newDirectory);
    }
  }

  function addFolder() {
    const newDirectory = { ...directory }; // Create a copy
    if (root.type === "directory") {
      newDirectory.children = [
        ...newDirectory.children,
        { name: "folderName", type: "directory", children: [] },
      ];
      setDirectory(newDirectory);
    }
  }
  function handleShow() {
    setShow(!show);
  }

  if (root.type === "directory") {
    return (
      <div style={{ marginTop: "20px" }}>
        <h1 className="directory">
          <div className="buttonContainer">
            <span onClick={handleShow} style={{ cursor: "pointer" }}>
              {" "}
              🖿{root.name}
            </span>
            <div>
              <span
                onClick={() => {
                  addFile();
                }}
                className="file"
              >
                +File
              </span>
              <span
                onClick={() => {
                  addFolder();
                }}
                className="folder"
              >
                +Folder
              </span>
            </div>
          </div>
        </h1>
        <div
          style={
            show
              ? { display: "block", paddingLeft: "10px" }
              : { display: "none" }
          }
        >
          {directory.children.map((child) => (
            <Folder root={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <h1 className="pageFile">
        <span>📄{root.name}</span>
      </h1>
    );
  }
};
