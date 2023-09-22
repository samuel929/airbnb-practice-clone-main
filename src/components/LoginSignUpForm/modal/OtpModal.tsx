import { Box, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import AirBnbTextInput from '../../TextInput/AirBnbTextInput';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import OtpStep1Number from './OtpStep1Number';
import OtpStep2Number from './OtpStep2Number';
import AddProfileModal from './AddProfileModal';

interface Props{
    setOpenOtpModal:(x:boolean) =>void;
    openOtpModal:boolean
}

function OtpModal({openOtpModal,setOpenOtpModal}:Props) {
    const [state,setState]=useState<number>(1)
    const validationSchema = yup.object({
        number: yup.number().required('Phone number is required.'),
       
      });

 
  return (
    <Modal
    open={openOtpModal}
    onClose={()=>setOpenOtpModal(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box className="form" style={{position:"relative",left:"29%",top:"20%"}}>
    {state === 1 && (
          <OtpStep1Number
            validationSchema={validationSchema }
            state={state}
            setState={setState}
            setOpenOtpModal={setOpenOtpModal}
          />
        )}
        {state === 2 && (
          <OtpStep2Number
            state={state}
            setState={setState}
          />
        )}
         {state === 3 && (
          <AddProfileModal
            state={state}
            setState={setState}
          />
        )}
       
    </Box>
  </Modal>
  )
}

export default OtpModal