import { Box, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import AirBnbTextInput from '../../TextInput/AirBnbTextInput';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { error } from 'console';

interface Props{
    validationSchema: yup.ObjectSchema<{
        number: number;
    }, yup.AnyObject, {
        number: undefined;
    }, "">,
    setOpenOtpModal:(x:boolean) =>void,
    setState:(x:number) =>void,
    state:number
}


function OtpStep1Number({state, setState,setOpenOtpModal}:Props) {
  const [confirmationResult, setConfirmationResult] = useState(null);
  console.log(confirmationResult);

  const validationSchema = yup.object({
    number: yup.number().required(),
  });


  return (
    <>
    <div style={{ display: "flex", width: "347px", justifyContent: "space-between" }}>
            <div>
              <MdOutlineArrowBackIosNew onClick={() => setOpenOtpModal(false)} style={{ cursor: "pointer" }} />
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
        This is your Host,guests, or RoomSpacecan reach you.
      </Typography>
        </div>
        <Formik
      initialValues={{
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async(values, e) => {
        const auth=getAuth()
        const appVerifier = new RecaptchaVerifier(auth,'recaptcha-container');
        try {
          const confirmation:any = await signInWithPhoneNumber(auth,values.number, appVerifier);
          setConfirmationResult(confirmation);
          setState(2)
        } catch (error) {
          console.error('Error sending code:', error);
        }
        
      }}
    >
     <Form>
     <div style={{ marginTop: "20px" }}>
            <AirBnbTextInput
              type="number"
              name="number"
              placeholder='Phone Number' />
              <br/>
            <span style={{ fontSize: "11px", color: "#aeaeae", float: "left" }}>We callor textyou to confirmyour number. Standard message and data rates apply.</span>
          </div>
          <button
     
      type="submit" className='continue-button-black'> Continue</button>
     </Form>
        </Formik>
       </div>
       </>
  )
}

export default OtpStep1Number