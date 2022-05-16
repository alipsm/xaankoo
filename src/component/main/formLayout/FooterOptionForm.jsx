import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { context } from '../../contextApi/context'
import { useDispatch } from 'react-redux'
import {loginUserAction, registerUserAction, resetState} from '../../Redux/Action'

export default function FooterOptionForm({ form_type }) {
    const {
        name,
        email,
        password,
        password_confirmation,
    } = useContext(context)
    const dispatch =useDispatch();
    return (
        <div className='footer_form'>
            <div>
                {form_type == "login" ? (

                    <button className='btn_acount_form btn_register' onClick={()=>dispatch(loginUserAction(email,password))}>ورود</button>
                ) : (
                    <button className='btn_acount_form btn_register'onClick={()=>dispatch(registerUserAction(name,email,password,password_confirmation))}>عضویت</button>

                )}
                <button className='btn_acount_form btn_login_google'>حساب گوگل</button>
            </div>
            {/* <a href="#">حساب کاربری دارم!</a> */}
            {form_type == "login" ? (

                <Link to={"/forgotpassword"} onClick={()=>dispatch(resetState())}>گذرواژه خود را فراموش کرده اید؟</Link>
            ) : (
                <Link to={"/login"}>حساب کاربری دارم!</Link>

            )}
            {/* <Routes> */}
            {/* <Route path="login" element={<Link to={"forgotpassword"}>گذرواژه خود را فراموش کرده اید؟</Link>} /> */}
            {/* <Route path="*" element={<Link to={"/login"}>حساب کاربری دارم!</Link>} /> */}
            {/* </Routes> */}

        </div>
    )
}
