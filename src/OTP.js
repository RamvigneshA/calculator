import { useState, useRef } from "react";
import "./Otp.css";
import { Verification } from "./verification";  



export function OneTimePassword() {
  

  return (
    <div className="App">
      <h1>OTP LOGIN</h1>
      <Verification />
    </div>
  );
}


    // if (!otpBoxes.some((element) => element === null || element === "")) { 
    //   joinedOtp = otpBoxes.join("");
    //   startVerify(joinedOtp);
    //   setOptBoxes(["", "", "", ""]);
    // } 