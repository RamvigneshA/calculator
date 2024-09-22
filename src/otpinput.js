import { useState, useRef,useEffect } from "react";

export const Input0tpFields = ({length=4,onOtpSubmit} )=>{
    const [otpBoxes, setOptBoxes] = useState(Array(length).fill(''));
    const inputReferenece = useRef(Array(length).fill(''));
    useEffect(()=>{
        inputReferenece.current[0].focus()
    }
    ,[])
       const onClickhandle = (index) => {
            inputReferenece.current[index].setSelectionRange(-1,-1)        

    }
    
    
    function handleChange(event, index) {
        let value = event.target.value;
        if(isNaN(value) || (value.substring(value.length-1)) === ' ')return
        const newOptBoxes = [...otpBoxes];
        newOptBoxes[index] = value.substring(value.length-1);
        setOptBoxes(newOptBoxes);

        if(value && index< length-1 && inputReferenece.current[index+1]){
            inputReferenece.current[index+1].focus();
        }
       
        const joinedOtp = newOptBoxes.join('')
        if(joinedOtp.length === length){

        } 
      }

      const onKeyHandle = (event,index) => {

        if(event.key === 'Backspace'&& index>0&&inputReferenece.current[index-1]&&!otpBoxes[index]){
            inputReferenece.current[index-1].focus();
        }
      }

    return(
        <>
        
      
      <div>
        {otpBoxes.map((otpBox, index) => (
          <input
          key={index}
          type="text"      
          onChange={(event) => handleChange(event, index)}
          onClick={()=>onClickhandle(index)}
          onKeyDown={(event)=>onKeyHandle(event,index)}
          value={otpBoxes[index]}
          required
          ref={(ele) => (inputReferenece.current[index] = ele)}
          />
        ))}
      </div>
     
      </>
        
    )
}
    

    // function startVerify(joined) {
    //     if (joined === "1111") {
    //       referenece.current.textContent = "This is the correct otp.";
    //     } else {
    //       referenece.current.textContent = "This is the incorrect otp.";
    //     }
    //   }
     