import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router'
import ForgotPassword from './formLayout/ForgotPassword'
import Login from './formLayout/Login'
import Register from './formLayout/Register'
import VerifyEmail from './formLayout/VerifyEmail'
import SidePicture from './SidePicture'


export default function Main() {
  return (
    <Fragment>

      <div id='main'>
        <Routes>
          <Route path='login' element={
            <Fragment>
              <Login />
              <SidePicture form_name={"login"} />
            </Fragment>
          } />
          <Route path='register' element={
            <Fragment>
              <Register />
              <SidePicture form_name={"resister"} />
            </Fragment>
          } />
          <Route path='verifyemail' element={
            <Fragment>
              <VerifyEmail />
              <SidePicture form_name={"verifyEmail"} />
            </Fragment>
          } />

          <Route path='forgotpassword' element={

            <Fragment>
              <ForgotPassword />
              <SidePicture form_name={"verifyEmail"} />
            </Fragment>
          } />
        </Routes>
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <VerifyEmail/> */}
        {/* <ForgotPassword/> */}
      </div>
    </Fragment>
  )
}
