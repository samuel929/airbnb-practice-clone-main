import React,{useState} from 'react'
import SignUpForm from './SignUpForm'
import SignUpLoginOptions from './SignUpLoginOptions'
function LoginSignUpForm() {
  const [showOption,setShowOptions]=useState<boolean>(false);
  return (
    <div className='overlay'>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className='form'>
            {
              showOption ?
              <SignUpForm setShowOptions={setShowOptions}/>:
              <SignUpLoginOptions setShowOptions={setShowOptions} />
              
            }
        </div>
      </div>

    </div>
  )
}

export default LoginSignUpForm