import React, { useState } from 'react';
import { Input0tpFields } from "./otpinput";


export const Verification = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [show,setShow]=useState(false);
 
  const handleShow =( )=>{
    setShow(!show);
  }
  const handlePhoneNum = (event) => {
    setphoneNumber(event.target.value);
  };


  const handleVerifySubmit = (event) => {
    event.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length <10 || regex.test(phoneNumber)){
      alert('invalid phone number');
      
    }else{
    handleShow();
  }
    
  };

  const onotpSubmit = () => {
    console.log('success')
  }

  return (
    <>{
      (!show)?
    <form onSubmit={handleVerifySubmit} >
     <input
          type="text"
          maxLength={10}
          value={phoneNumber}
          id="number"
          name="pnumber"
          onChange={handlePhoneNum}
          placeholder="enter phone number"
          required
        />
      <button type='submit'>Verify</button>
      </form>
      :
      <>
      <p>enter the OTP sent to this {phoneNumber.replace(/^\d{6}/, '******')}</p>
      <Input0tpFields  length={4} onOtpSubmit = {onotpSubmit} />
      </>

      }
    </>
    
  );
};