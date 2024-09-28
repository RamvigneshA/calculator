import React, { useEffect, useState } from "react";

export function Progress({ value,pvalue = 10,reff }) {
    const [displauNum,setDisplayVal] =useState(0)

    useEffect(()=>{
        if(pvalue<value){
            setDisplayVal((prev)=>prev+1)
        }else{
            clearInterval(reff)
        }
    },[pvalue])
  
  return (
    <>
      
      <div className="progress">
        <div style={{'width':`${displauNum}%`}}className="bar"></div>
        <span style={{'color':(displauNum<49)?'black':"purple"}} className="value">{displauNum}%</span>
      </div>
    </>
  );
}