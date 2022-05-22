import React, { Fragment, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import { context } from '../contextApi/context'
import { resetStateRedux } from '../Redux/Action'
import Page404 from '../Utils/Error404/page404'
import Dashboard from './formLayout/Dashboard'
import ForgotPassword from './formLayout/ForgotPassword'
import Login from './formLayout/Login'
import Register from './formLayout/Register'
import VerifyEmail from './formLayout/VerifyEmail'
import SidePicture from './SidePicture'



export default function Main() {

  const { reset_state_contextApi } = useContext(context)
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();


  //RESET STATE REDUX AND CONTEXT API WITH CHANGE BROWSER PATH
  useEffect(() => {
    const token = localStorage.getItem("token")


    if (location != "/register/verifyemail") {
      reset_state_contextApi();
      dispatch(resetStateRedux());
    }
    if (token) {
      navigate("/dashboard", { replace: true })
    }else if (location == "/dashboard") {
      navigate("/login", { replace: true })
      
    }

  }, [location])

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
            <Route path='verifyemail' element={<VerifyEmail />} />
            <Route path='' element={
              <Fragment>
                <Register />
                <SidePicture form_name={"resister"} />
              </Fragment>
            } />
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
          <Route path='dashboard' element={
            <Dashboard />
          } />
        </Routes>
      </div>
    </Fragment>
  )
}
