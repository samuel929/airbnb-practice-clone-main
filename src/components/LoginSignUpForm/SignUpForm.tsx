import React,{useState} from 'react'
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import AirBnbTextInput from '../../components/TextInput/AirBnbTextInput'
import { setUser } from '../../Slices/userSlice';
import { useDispatch,useSelector } from 'react-redux';
import ContinueCreateProfileModal from './modal/ContinueCreateProfileModal';
interface Props {
  setShowOptions: (x: boolean) => void;
}
function SignUpForm({ setShowOptions }: Props) {
  const dispatch = useDispatch();
  const [openProfileCreateModal,setOpenProfileCreateModal]=useState(false);

  const validationSchema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    birthdate: yup.date()
      .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
      .required("Required"),
    password: yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  });

  
  return (
    <div>
 <ContinueCreateProfileModal
          setOpenProfileCreateModal={setOpenProfileCreateModal}
          openProfileCreateModal={openProfileCreateModal}
        />

    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        birthdate: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, e) => {
        // Handle form submission here
        dispatch(setUser(values));
        setOpenProfileCreateModal(true)
      }}
    >
      
      <Form >
        <div style={{ display: "flex", width: "347px", justifyContent: "space-between" }}>
          <div>
            <MdOutlineArrowBackIosNew onClick={() => setShowOptions(false)} style={{ cursor: "pointer" }} />
          </div>
          <p className='login-text-popup'>Finish signing up</p>
        </div>
        <div style={{ background: "#f5f5f5", width: "111%", height: "2px", position: "relative", right: "29px", bottom: "20px" }} />
        <div style={{ marginTop: "20px" }}>
          <div style={{ marginTop: "20px" }}>
            <AirBnbTextInput
              type="text"
              name="firstName"
              placeholder='First Name' />
              <br/>
            <span style={{ fontSize: "11px", color: "#aeaeae", float: "left" }}>Make sure it matches the name on your government ID.</span>

          </div>

          <div style={{ marginTop: "20px" }}>
            <AirBnbTextInput
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Last Name' />
               <br/>
            <span style={{ fontSize: "11px", color: "#aeaeae", float: "left" }}>Make sure it matches the name on your government ID.</span>
          </div>


        </div>
        <div style={{ marginTop: "20px" }}>
          <AirBnbTextInput
            id="birthdate"
            name="birthdate"
            type="date" />
             <br/>
          <small style={{ fontSize: "11px", color: "#aeaeae" }}>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb</small>
        </div>
        <div style={{ marginTop: "20px" }}>
          <AirBnbTextInput
            id="email"
            name="email"
            type="email" placeholder='Email' />
             <br/>
          <small style={{ fontSize: "11px", color: "#aeaeae", float: "left" }}>We'll email you trip confirmations and receipts.</small>

        </div>
        <div style={{ marginTop: "20px" }}>
          <AirBnbTextInput
            id="password"
            name="password"
            type="password" placeholder='Password' />

        </div>
        <button type="submit" className='continue-button'>Agree and Continue</button>
      </Form>
    </Formik>
    </div>
  )
}

export default SignUpForm