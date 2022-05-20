import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../../contextApi/context'
import { useDispatch, } from 'react-redux'
import { loginUserAction, registerUserAction, resetStateRedux } from '../../Redux/Action'

export default function FooterOptionForm({ form_type }) {
    const {
        name,
        email,
        password,
        password_confirmation,
        check_validator
    } = useContext(context)
    const dispatch = useDispatch();

    return (
        <div className='footer_form'>
            <div>
                {form_type == "login" ? (

                    <button className='btn_acount_form btn_register' onClick={() => dispatch(loginUserAction(email, password))}>ورود</button>
                ) : (
                    <button className='btn_acount_form btn_register' onClick={() => check_validator(registerUserAction(name, email, password, password_confirmation),["email","name"])}>عضویت</button>
                )}
                <button className='btn_acount_form btn_login_google'>حساب گوگل</button>
            </div>
            {form_type == "login" ? (

                <Link to={"/forgotpassword"} onClick={() => dispatch(resetStateRedux())}>گذرواژه خود را فراموش کرده اید؟</Link>
            ) : (
                <Link to={"/login"}>حساب کاربری دارم!</Link>

            )}
        </div>
    )
}
