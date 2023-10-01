import React from 'react'
import Grid from '@mui/material/Grid';
import {FaSwimmingPool} from 'react-icons/fa';
import {MdApartment, MdBedroomChild, MdOutlineBedroomChild, MdOutlineRestaurant} from 'react-icons/md';
import {GiSoccerBall, GiSoccerField, GiSoccerKick} from 'react-icons/gi';
import { FcWiFiLogo } from 'react-icons/fc';
import { AiOutlineCoffee } from 'react-icons/ai';
import {FaSquareParking} from 'react-icons/fa6';
import {RiFridgeFill} from 'react-icons/ri'
function IconBanner() {
  return (
    <div style={{marginTop:"130px",display:"flex",justifyContent:"center",marginLeft:"90px",marginBottom:"30px"}}>
     <Grid container spacing={8} >
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
      <FaSwimmingPool size={30} style={{position:"relative",left:"10px"}}/>
      <span>Pool</span>
    </Grid>
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
    <MdBedroomChild  size={30} style={{position:"relative",left:"10px"}}/>
    <span>Rooms</span>
    </Grid>
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
    <MdApartment size={30} style={{position:"relative",left:"10px"}}/>
    <span>Apartment</span>
    </Grid>
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
    <GiSoccerBall  size={30} style={{position:"relative",left:"10px"}}/>
    <span>Sports</span>
    </Grid>
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
    <GiSoccerKick  size={30} style={{position:"relative",left:"10px"}}/>
    <span>Play</span>
    </Grid>
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
    <GiSoccerField size={30} style={{position:"relative",left:"10px"}}/>
    <span>Fields</span>
    </Grid>
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
    <FcWiFiLogo size={30} style={{position:"relative",left:"10px"}}/>
    <span>Wifi</span>
    </Grid>
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
    <AiOutlineCoffee size={30} style={{position:"relative",left:"10px"}}/>
    <span>Coffee</span>
    </Grid>
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
    <FaSquareParking size={30} style={{position:"relative",left:"10px"}}/>
    <span>Parking</span>
    </Grid>
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
    <RiFridgeFill size={30} style={{position:"relative",left:"10px"}}/>
    <span>Bar</span>
    </Grid>
    <Grid item xs={1} md={1} style={{display:"flex",flexDirection:"column"}}>
    <MdOutlineRestaurant size={30} style={{position:"relative",left:"10px"}}/>
    <span>Restaurant</span>
    </Grid>
  </Grid>    
    </div>
  )
}

export default IconBanner