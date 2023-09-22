import React from 'react'
import { useDispatch } from 'react-redux';
import { close} from '../../../Slices/popup';
import { open} from '../../../Slices/loginPopUp';
function LoginPopup() {
  const dispatch = useDispatch();

 const openLoginPopUp=()=>{
  dispatch(close());
  dispatch(open());
 }

  return (
    <div className='popup-login-holder' >
         <div>
             <ul className='top'>
                 <li className="specific-li" onClick={()=>openLoginPopUp()}>Sign up</li>
                 <li className="specific-li">Log in</li>
             </ul>
         </div>
         <div  className='border-top-login-popup'>
            <ul className='bottom'>
                 <li className="specific-li">Airbnb your Home</li>
                 <li className="specific-li">Help</li>
             </ul>
         </div>
    </div>
  )
}

export default LoginPopup