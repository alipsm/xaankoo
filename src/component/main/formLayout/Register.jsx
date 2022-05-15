import React from 'react'
import FooterOptionForm from './FooterOptionForm'



export default function Register() {
  return (
    <div id='register-form'>
      <div className="col-3 input-effect">
        <input className="effect-22" name='name' type="text" />
        <label>نام و نام خانوادگی</label>
        <span className="focus-bg"></span>
      </div>
      <div className="col-3 input-effect">
        <input className="effect-22" name='email' type="text" />
        <label>ایمیل</label>
        <span className="focus-bg"></span>
      </div>
      {/* <input type="text" name="name" id="name" placeholder='نام و نام خانوادگی'/> */}
      {/* <input type="text" name="email" id="email" placeholder='ایمیل' /> */}
      <div className='container_password_input'>
        <div className="col-3 input-effect">
          <input className="effect-22" type="text" />
          <label>گذرواژه</label>
          <span className="focus-bg"></span>
        </div>
        <div className="col-3 input-effect">
          <input className="effect-22" type="text" />
          <label>تکرار گذرواژه</label>
          <span className="focus-bg"></span>
        </div>

        {/* <input type="text" id="1_password" placeholder='گذرواژه' /> */}
        {/* <input type="text" id="2_password" placeholder='تکرار گذرواژه' /> */}
      </div>
      <FooterOptionForm form_type="register"/>
    </div>
  )
}
