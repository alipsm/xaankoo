import React from 'react'
import FooterOptionForm from './FooterOptionForm'

export default function Login() {
    return (
        <div id='register-form'>
            <div class="col-3 input-effect">
                <input class="effect-22" name='email' type="text" />
                <label>ایمیل</label>
                <span class="focus-bg"></span>
            </div>
            <div class="col-3 input-effect">
                <input class="effect-22" type="text" />
                <label>گذرواژه</label>
                <span class="focus-bg"></span>
            </div>
            <FooterOptionForm form_type="login"/>
        </div>
    )
}
