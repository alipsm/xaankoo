import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router'
import Page404 from '../Utils/Error404/page404'
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
          <Route path='register'>
            <Route path='verifyemail' element={<VerifyEmail />}/>
            <Route path='' element={
              <Fragment>
                <Register />
                <SidePicture form_name={"resister"} />
              </Fragment>
            }/>
          </Route>
          <Route path='forgotpassword' element={
            <Fragment>
              <ForgotPassword />
              <SidePicture form_name={"verifyEmail"} />
            </Fragment>
          } />
          <Route path='*' element={
            <Page404 />
          } />
        </Routes>
      </div>
    </Fragment>
  )
}
