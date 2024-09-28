import React, { useEffect, useRef, useState } from "react";
import { Progress } from "./progressSec";
import "./progress.css";

export function ProgressBar() {
  const [progressValue, setProgressValue] = useState(0);
  const reff = useRef();
  useEffect(()=>{
      reff.current=setInterval(()=>{
      setProgressValue((prev)=>prev+1)
    },100)

  },[])


  
  return (
    <>
      Progress Bar
      <Progress value={100} pvalue={progressValue} reff={reff.current}/>
      
    </>
  );
}