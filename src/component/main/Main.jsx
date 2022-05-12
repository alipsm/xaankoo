import React, { Fragment } from 'react'
import Login from './formLayout/Login'
import Register from './formLayout/Register'
import SidePicture from './SidePicture'


export default function Main() {
  return (
    <Fragment>

    <div id='main'>
        {/* <Register/> */}
        <Login/>
        <SidePicture/>
    </div>
    </Fragment>
  )
}
