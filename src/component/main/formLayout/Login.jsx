import React from 'react'
import FooterOptionForm from './FooterOptionForm'

export default function Login() {
    return (
        <div id='register-form'>
            <div className="col-3 input-effect">
                <input className="effect-22" name='email' type="text" />
                <label>ایمیل</label>
                <span className="focus-bg"></span>
            </div>
            <div className="col-3 input-effect">
                <input className="effect-22" type="text" />
                <label>گذرواژه</label>
                <span className="focus-bg"></span>
            </div>
            <FooterOptionForm form_type="login"/>
        </div>
    )
}
