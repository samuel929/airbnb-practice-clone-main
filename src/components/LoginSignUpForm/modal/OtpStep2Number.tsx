import { Box, Modal, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import AirBnbTextInput from '../../TextInput/AirBnbTextInput';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import OtpInput from 'react-otp-input';

interface Props{
    setState:(x:number)=>void,
    state:number
}


function OtpStep2Number({state,setState}:Props) {
    const [otp, setOtp] = useState('');
    useEffect(()=>{

    },[otp])
    const handleOtpChange = (value:string) => {
      setOtp(value)
        if(value.length === 6){
          setState(3)
        }
      }
     
      console.log(otp.length === 6)
      console.log(state)
  return (
    <>
    <div style={{ display: "flex", width: "347px", justifyContent: "space-between" }}>
            <div>
              <MdOutlineArrowBackIosNew onClick={() => setState(1)} style={{ cursor: "pointer" }} />
            </div>
            <p className='login-text-popup'>Create your Profile</p>
   </div>
   <div style={{ background: "#f5f5f5", width: "111%", height: "2px", position: "relative", right: "29px", bottom: "20px" }} />
       <div className='container'>
       <div style={{textAlign:"center"}}>
        <Typography variant="subtitle1" gutterBottom>
        Step {state} of 3
      </Typography>
      <Typography variant="h6" gutterBottom>
        Confirm your phone number
      </Typography>
      <Typography color={"#b4b4b4"} variant="subtitle1" gutterBottom>
        Enter a 4 - digit code RoomSpace just sent to 0898798898989
      </Typography>
        </div>
        <div style={{display:"flex",justifyContent:'center',marginTop:"20px"}}>
        <OtpInput
        inputStyle={{width:"2rem",height:"2rem"}}
        value={otp}
        onChange={handleOtpChange}
        numInputs={6} // Define the number of OTP input fields
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
        </div>
        <div style={{textAlign:"center",marginTop:"10px"}}>
        <Typography color={"#b4b4b4"} variant="subtitle1" gutterBottom>
   Didn't you get a text? <Typography style={{textDecoration:"underline",cursor:"pointer"}} color={"black"}>send again.</Typography>
      </Typography>
        </div>
       
       
       </div>
       </>
  )
}

export default OtpStep2Number