import React from 'react'
import {BsMapFill} from 'react-icons/bs'
interface Props{
  ShowHideMap:()=>void;
  showMap:boolean
}
function ShowMapButton({ShowHideMap,showMap}:Props) {
  return (
    <button className='show-map-button' onClick={ShowHideMap}>
       {showMap ? "Hide Map":"Show map"}  <BsMapFill color='white' style={{position:"relative",top:"3px"}}/>
    </button>
  )
}

export default ShowMapButton