import { Typography } from '@mui/material'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

interface Props{
    setState:(x:number)=>void,
    state:number
}
function AddProfileModal({state,setState}:Props) {
    const [profileImage, setProfileImage] = React.useState<string | null>(null);

    // Function to handle file upload
    const handleFileUpload = (event: any) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e:any) => {
          setProfileImage(e.target.result);
        };
  
        reader.readAsDataURL(file);
      }
    }
  return (
    <div>
          <div style={{ display: "flex", width: "347px", justifyContent: "space-between" }}>
            <div>
              <MdOutlineArrowBackIosNew onClick={() => setState(2)} style={{ cursor: "pointer" }} />
            </div>
            <p className='login-text-popup'>Create your Profile</p>
   </div>
   <div style={{ background: "#f5f5f5", width: "111%", height: "2px", position: "relative", right: "29px", bottom: "20px" }} />

   <div style={{justifyContent:"center",display:"flex"}}>
       <div style={{textAlign:"center"}}>
         <div>
         <Typography variant="subtitle1" gutterBottom>
        Step {state} of 3
      </Typography>
      <Typography variant="h6" gutterBottom>
        Looking good!
      </Typography>
      <Typography color={"#b4b4b4"} variant="subtitle1" gutterBottom>
        This will be addedto your profile. It will also be seen by hosts or guest, so be sure it doesnt include any personal or sensitive info.
      </Typography>
         </div>
         <div style={{display:"flex",justifyContent:"center"}}>
         {profileImage ? (
              <img src={profileImage} alt="Profile" style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
            ) : (
              <FaUserCircle color='#b0b0b0' style={{ position: "relative", left: "20px", cursor: "pointer" }} fontSize={140} />
            )}
        </div>
        <input
            style={{marginLeft:"100px",marginTop:"30px"}}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
          />
        <button
     
      type="submit" className='continue-button-black'> Continue</button>
        </div>
      
</div>
    </div>
  )
}

export default AddProfileModal