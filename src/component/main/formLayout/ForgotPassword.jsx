import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { context } from '../../contextApi/context'
import { checkVerifyEmailAction, sendCodEmailAction } from '../../Redux/Action'

export default function ForgotPassword() {
    const {
        email,
        setEmail,
        codVerifyEmail_1,
        setCodVerifyEmail_1,
        codVerifyEmail_2,
        setCodVerifyEmail_2,
        codVerifyEmail_3,
        setCodVerifyEmail_3,
        codVerifyEmail_4,
        setCodVerifyEmail_4,
        password,
        setPassword,
        password_confirmation,
        setPassword_confirmation
    } = useContext(context)

    // var step=2;

    const step= useSelector(state=>state)
    // debugger
    const dispatch = useDispatch();
    return (
        <div id='forgot-password'>
            <p>گذرواژه خود را فراموش کرده اید. هیچ ایرادی نداره
                ایمیل خودتون رو برامون بنویسین تا ما یک کد فعال سازی ارسال کنیم.
                کد رو وارد کنید و گذرواژه جدیدتون رو بنویسین برامون. به همین سادگی
            </p>
            <div>
                <div className="col-3 input-effect">
                    <input className="effect-22" name='email' type="text" placeholder=' ' onChange={e => setEmail(e.target.value)} />
                    <label>ایمیل</label>
                    <span className="focus-bg"></span>
                </div>
                <button className={`btn-style ${step>0?"complete_btn_section":""}`} onClick={() => dispatch(sendCodEmailAction(email))}>ارسال مجدد ایمیل</button>
            </div>
            <div>
                <div className='verify_email_section'>
                    <div>
                        <span className={`${step>0?"":"disabled_span_style"}`}>کد فعال سازی</span>
                    </div>
                    <div className='container_number'>
                        <input type="tel" name="" id="" maxLength={1} disabled={step>0?false:true} onChange={e => setCodVerifyEmail_1(e.target.value)} max={9}/>
                        <input type="tel" name="" id="" disabled={step>0?false:true} onChange={e => setCodVerifyEmail_2(e.target.value)} maxLength={1}/>
                        <input type="tel" name="" id="" disabled={step>0?false:true} onChange={e => setCodVerifyEmail_3(e.target.value)} maxLength={1}/>
                        <input type="tel" name="" id="" disabled={step>0?false:true} onChange={e => setCodVerifyEmail_4(e.target.value)} maxLength={1}/>
                    </div>
                    <button id='verify-code-sectin-btn' className={`btn-style ${step>1?"complete_btn_section":""}`} disabled={step>0?false:true} onClick={() => dispatch(checkVerifyEmailAction(email, codVerifyEmail_1, codVerifyEmail_2, codVerifyEmail_3, codVerifyEmail_4))}>تایید ایمیل</button>
                </div>
            </div>
            <div className='container_password_input'>
                <div className="col-3 input-effect">
                    <input className="effect-22" type="text" disabled={step>1?false:true} onChange={e => setPassword(e.target.value)} />
                    <label className={`${step>1?"":"disabled_label_style"}`}>گذرواژه</label>
                    <span className="focus-bg"></span>
                </div>
                <div className="col-3 input-effect">
                    <input className="effect-22" type="text" disabled={step>1?false:true} onChange={e => setPassword_confirmation(e.target.value)} />
                    <label className={`${step>1?"":"disabled_label_style"}`}>تکرار گذرواژه</label>
                    <span className="focus-bg"></span>
                </div>
            </div>
            <div className='footer_form'>
                <button className='btn-style password-sectin-btn' disabled={step>1?false:true}>ذخیره گذرواژه و ورود</button>
                <Link to={"/register"}>حساب کاربری ندارم!</Link>
            </div>
        </div>
    )
}
