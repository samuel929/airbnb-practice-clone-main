import React, { useCallback, useRef, useState } from 'react'
import { AiOutlineClose, AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { close} from '../../Slices/loginPopUp';
import {setUser} from '../../Slices/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import AirBnbTextInput from '../../components/TextInput/AirBnbTextInput'
import {
    LoginSocialGoogle,
    LoginSocialAmazon,
    LoginSocialFacebook,
    LoginSocialGithub,
    LoginSocialInstagram,
    LoginSocialLinkedin,
    LoginSocialMicrosoft,
    LoginSocialPinterest,
    LoginSocialTwitter
  } from "reactjs-social-login";
import { RootState } from '../../store/store';
interface Props {
    setShowOptions: (x: boolean) => void;
}
function SignUpLoginOptions({ setShowOptions }: Props) {
    
    const dispatch=useDispatch();
   


    return (
        <section>
            <div style={{ display: "flex", width: "347px", justifyContent: "space-between" }}>
                <div>
                    <AiOutlineClose onClick={()=>dispatch(close())} style={{ cursor: "pointer" }} />
                </div>
                <p className='login-text-popup'>Log in or sign up</p>
            </div>
            <div style={{ background: "#f5f5f5", width: "111%", height: "2px", position: "relative", right: "29px", bottom: "20px" }} />
            <p className='heading-form-text'>Welcome to Airbnb</p>

            <div>
          

                {/* <AirBnbTextInput  placeholder='Email' /> */}
                <button onClick={()=>setShowOptions(true)} className='continue-button'>CONTINUE</button>
            </div>
            
            <div >
            <LoginSocialFacebook
          appId={"126913110503222"}

          onResolve={({ provider, data }) => {

            console.log(data, "data");
            console.log(provider, "provider");
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
                <div className='border-login'>
                    <div style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", width: "350px", alignItems: "center", height: "100%", paddingLeft: "20px" }}>
                        <div><AiFillFacebook fontSize={25} color='#1977f2' /></div>
                        <div>Continue with Facebook</div>
                    </div>
                </div>

     </LoginSocialFacebook>
                <LoginSocialGoogle
          client_id="923396781162-0q37cb8dfhsaasf61ncmgn0rpc4pi6qg.apps.googleusercontent.com"
          onResolve={({ provider, data }:any) => {
            dispatch(setUser(data))
            dispatch(close())
            console.log(data, "data");
            console.log(provider, "provider");
          }}
          onReject={(err) => {
            console.log("hbhbdhd", err);
          }}
        >
                <div className='border-login' >
                    <div style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", width: "350px", alignItems: "center", height: "100%", paddingLeft: "20px" }}>
                        <div><FcGoogle fontSize={25} color='#1977f2' /></div>
                        <div>Continue with Google</div>
                    </div>
                </div>
</LoginSocialGoogle>
                <div className='border-login'>
                    <div style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", width: "350px", alignItems: "center", height: "100%", paddingLeft: "20px" }}>
                        <div><BsApple fontSize={25} /></div>
                        <div>Continue with Apple</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpLoginOptions