import React, { useContext, useEffect } from 'react'
import FooterOptionForm from './FooterOptionForm'
import { context } from "../../contextApi/context"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Register() {

  
  const { checkRegisterComplete } = useSelector(state => state)

  const navigate = useNavigate();
  
  const {
    name,
    setName,
    email,
    setEmail,
    setPassword,
    setPassword_confirmation,
    validator
  } = useContext(context)



  //REGISTER COMPLETE => NAVIGATE TO VERIFY FORM
  useEffect(() => {
    if (checkRegisterComplete == true) {
      navigate("verifyemail", { replace: false })
    }
  }, [checkRegisterComplete])


  return (
    <div id='register-form'>
      <div className='input-validator-container col-3'>
         <div className=" input-effect">
        <input className="effect-22" name='name' placeholder=' ' type="text" onChange={e => setName(e.target.value)} />
        <label>نام و نام خانوادگی</label>
        <span className="focus-bg"></span>
          {validator.current.message('name', name, 'required')}
      </div>
      </div>
      <div className='input-validator-container col-3'>
        <div className=" input-effect">
          <input className="effect-22" name='email' placeholder=' ' type="text" onChange={e => setEmail(e.target.value)} />
          <label>ایمیل</label>
          <span className="focus-bg"></span>
          {validator.current.message('email', email, 'required|email')}
        </div>
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
