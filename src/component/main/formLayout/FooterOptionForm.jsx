import React from 'react'

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
            <a href="#">حساب کاربری دارم!</a>
        </div>
    )
}
