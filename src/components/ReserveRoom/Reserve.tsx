import { Typography } from '@mui/material'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'


interface Props{
    rooms:any
}

function Reserve({rooms}:Props) {
  return (
    <div style={{border:"1px solid #eaeaea",padding:"40px",borderRadius:"8px",width:"190%",height:"50%",position:"relative",left:"-100%"}}>
       <div style={{display:"flex",justifyContent:"space-between"}}>
          <div>
          <Typography variant="h6" >
          R{rooms.price}
      </Typography>
        <small >Total before taxes</small>
           
          </div>
          <div>
             <div>
               <AiFillStar size={20} style={{position:"relative",top:"4px"}}/>
                <span style={{textDecoration:"underline"}}>{rooms.star_rating} reviews</span>
              </div>
          </div>
       </div>
       <div style={{border:"1px solid #cdcdcd",borderRadius:"8px"}}>
         <div style={{borderBottom:"1px solid #cdcdcd",display:"flex",justifyContent:"space-between",height:"100%"}}>
            <div style={{padding:"10px",borderRight:"1px solid #cdcdcd",width:"50%"}}>
            <p style={{padding:"0px"}}>Guest</p>
            <span>Add Guest</span>
            </div>
            <div style={{padding:"10px",width:"50%"}}>
            <p>Guest</p>
            <span>Add Guest</span>
            </div>
         </div>
           <div style={{padding:"10px"}}>
            <span>Guest</span>
            <span>Add Guest</span>
           </div>
       </div>
       <button className="reserve-btn">Reserve</button>
    </div>
  )
}

export default Reserve