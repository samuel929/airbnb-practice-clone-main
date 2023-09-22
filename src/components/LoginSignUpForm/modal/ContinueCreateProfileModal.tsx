import { Box, Modal, Typography } from '@mui/material'
import React,{useState} from 'react'
import { MdOutlineArrowBackIosNew, MdOutlineBedroomChild } from 'react-icons/md'
import OtpModal from './OtpModal'

interface Props{
    setOpenProfileCreateModal:(x:boolean)=>void,
    openProfileCreateModal:boolean
}

function ContinueCreateProfileModal({setOpenProfileCreateModal,openProfileCreateModal}:Props) {
  const [openOtpModal,setOpenOtpModal] =useState(false)
 
    return (
        <>
        <OtpModal
         openOtpModal={openOtpModal}
         setOpenOtpModal={setOpenOtpModal}
        />
         <Modal
  open={openProfileCreateModal}
  onClose={()=>setOpenProfileCreateModal(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box className="form" style={{position:"relative",left:"29%",top:"20%"}}>
  <div style={{ display: "flex", width: "347px", justifyContent: "space-between" }}>
          <div>
            <MdOutlineArrowBackIosNew onClick={() => setOpenProfileCreateModal(false)} style={{ cursor: "pointer" }} />
          </div>
          <p className='login-text-popup'>Finish signing up</p>
 </div>
 <div style={{ background: "#f5f5f5", width: "111%", height: "2px", position: "relative", right: "29px", bottom: "20px" }} />
     <div style={{display:"flex",justifyContent:"center"}}>
     <MdOutlineBedroomChild color='#ff385c' fontSize={120} /> 
     </div>
     <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
     <div>
     <Typography justifyContent={"center"} variant="h6" gutterBottom>
       Welcome to RoomSpace
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Discover rooms to stay and unique experiancesaround the <br/> world.
      </Typography>
      <button
       onClick={()=>{
        setOpenOtpModal(true)
       }}
      type="submit" className='continue-button-black'> Continue</button>
     </div>
     </div>
    
     
  </Box>
</Modal>
        </>
   
  )
}

export default ContinueCreateProfileModal