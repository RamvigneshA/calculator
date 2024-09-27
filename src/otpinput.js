import { useState, useRef,useEffect } from "react";
import mygif from './icons8-tick.gif'
export const Input0tpFields = ({length=4,onOtpSubmit} )=>{

    const [otpBoxes, setOptBoxes] = useState(Array(length).fill(''));
    const inputReferenece = useRef(Array(length).fill(''));
    const [show ,setshow] = useState(false)
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
        const cancellable = function (t){
           setshow(true)
           setTimeout(() => setshow(false), t);
          
        }
        const joinedOtp = newOptBoxes.join('')
        if(joinedOtp.length === length && joinedOtp === '1234'){
              cancellable(2000)
              onOtpSubmit()
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
      <div>OTP:'1234'</div>  
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

        {
            (show === true)?<div><img src={mygif} alt="Animated GIF" /></div> :<></>
        }

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
     