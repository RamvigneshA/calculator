import { useState } from "react";
import files from "./fileExplorer.json";
import { Folder } from "./folder";

export const FileExplorer = () => {
  const [fileData, setFileData] = useState(files);
  return (
    <div className="fileExplorer">
      <Folder root={fileData.filesystem.root} />
    </div>
  );
};

// {Array.isArray(children.children)?console.log(children.children[0].name):'n'}
