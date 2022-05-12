import React from 'react'
import FooterOptionForm from './FooterOptionForm'



export default function Register() {
  return (
    <div id='register-form'>
      <div class="col-3 input-effect">
        <input class="effect-22" name='name' type="text" />
        <label>نام و نام خانوادگی</label>
        <span class="focus-bg"></span>
      </div>
      <div class="col-3 input-effect">
        <input class="effect-22" name='email' type="text" />
        <label>ایمیل</label>
        <span class="focus-bg"></span>
      </div>
      {/* <input type="text" name="name" id="name" placeholder='نام و نام خانوادگی'/> */}
      {/* <input type="text" name="email" id="email" placeholder='ایمیل' /> */}
      <div className='container_password_input'>
        <div class="col-3 input-effect">
          <input class="effect-22" type="text" />
          <label>گذرواژه</label>
          <span class="focus-bg"></span>
        </div>
        <div class="col-3 input-effect">
          <input class="effect-22" type="text" />
          <label>تکرار گذرواژه</label>
          <span class="focus-bg"></span>
        </div>

        {/* <input type="text" id="1_password" placeholder='گذرواژه' /> */}
        {/* <input type="text" id="2_password" placeholder='تکرار گذرواژه' /> */}
      </div>
      <FooterOptionForm form_type="register"/>
    </div>
  )
}
