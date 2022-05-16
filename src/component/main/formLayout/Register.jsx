import React, { useContext } from 'react'
import FooterOptionForm from './FooterOptionForm'

import { context } from "../../contextApi/context"

export default function Register() {
  const {
    setName,
    setEmail,
    setPassword,
    setPassword_confirmation,
  } = useContext(context)
  return (
    <div id='register-form'>

      <div className="col-3 input-effect">
        <input className="effect-22" name='name' placeholder=' ' type="text" onChange={e => setName(e.target.value)} />
        <label>نام و نام خانوادگی</label>
        <span className="focus-bg"></span>
      </div>
      <div className="col-3 input-effect">
        <input className="effect-22" name='email' placeholder=' ' type="text" onChange={e => setEmail(e.target.value)} />
        <label>ایمیل</label>
        <span className="focus-bg"></span>
      </div>
      <div className='container_password_input'>
        <div className="col-3 input-effect">
          <input className="effect-22" type="text" placeholder=' ' onChange={e => setPassword(e.target.value)} />
          <label>گذرواژه</label>
          <span className="focus-bg"></span>
        </div>
        <div className="col-3 input-effect">
          <input className="effect-22" type="text" placeholder=' ' onChange={e => setPassword_confirmation(e.target.value)} />
          <label>تکرار گذرواژه</label>
          <span className="focus-bg"></span>
        </div>
      </div>
      <FooterOptionForm form_type="register" />
    </div>
  )
}
