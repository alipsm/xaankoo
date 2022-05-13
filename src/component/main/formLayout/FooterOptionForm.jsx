import React from 'react'
import { Link  } from 'react-router-dom'
import { Route, Routes } from 'react-router'

export default function FooterOptionForm({form_type}) {
    return (
        <div className='footer_form'>
            <div>
                {form_type=="login"?(

                    <button className='btn_acount_form btn_register'>ورود</button>
                    ):(
                    <button className='btn_acount_form btn_register'>عضویت</button>

                )}
                <button className='btn_acount_form btn_login_google'>حساب گوگل</button>
            </div>
            {/* <a href="#">حساب کاربری دارم!</a> */}
            <Routes>
            <Route path="login" exact element={<Link to={"forgotpassword"}>گذرواژه خود را فراموش کرده اید؟</Link>}/>
            <Route path="*" element={<Link to={"/"}>حساب کاربری دارم!</Link>}/>
            </Routes>

        </div>
    )
}
