import React, { useContext } from 'react'
import { context } from '../../contextApi/context'
import FooterOptionForm from './FooterOptionForm'

export default function Login() {
    
    const {
        setEmail,
        setPassword,
    } = useContext(context)

    return (
        <div id='register-form'>
            <div className="col-3 input-effect">
                <input className="effect-22" name='email' type="text" placeholder=' ' onChange={e => setEmail(e.target.value)} />
                <label>ایمیل</label>
                <span className="focus-bg"></span>
            </div>
            <div className="col-3 input-effect">
                <input className="effect-22" type="text" placeholder=' ' onChange={e => setPassword(e.target.value)} />
                <label>گذرواژه</label>
                <span className="focus-bg"></span>
            </div>
            <FooterOptionForm form_type="login" />
        </div>
    )
}
