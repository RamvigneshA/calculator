import { useState,createContext } from "react";
import files from "./fileExplorer.json";
import { Folder } from "./folder";
import './folder.css'
export const MyContext = createContext();

export const FileExplorer = () => {
  const [fileData, setFileData] = useState(files);
  return (
    <MyContext.Provider value={fileData.filesystem.root}>
    <div className="fileExplorer">
      <Folder root={fileData.filesystem.root} />
    </div>
    </MyContext.Provider>
  );
};

// {Array.isArray(children.children)?console.log(children.children[0].name):'n'}
