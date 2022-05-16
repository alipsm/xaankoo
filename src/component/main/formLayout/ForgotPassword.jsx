import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
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

    const dispatch =useDispatch();
    return (
        <div id='forgot-password'>
            <p>گذرواژه خود را فراموش کرده اید. هیچ ایرادی نداره
                ایمیل خودتون رو برامون بنویسین تا ما یک کد فعال سازی ارسال کنیم.
                کد رو وارد کنید و گذرواژه جدیدتون رو بنویسین برامون. به همین سادگی
            </p>
            {/* <div className='container_input_forgot_password_form'>
                <div>
                    <div className="col-3 input-effect">
                        <input className="effect-22" name='email' type="text" />
                        <label>ایمیل</label>
                        <span className="focus-bg"></span>
                    </div>
                    <div className='verify_email_section'>
                        <div>

                            <span>کد فعال سازی</span>
                        </div>
                        <div className='container_number'>
                            <input type="number" name="" id="" maxLength={1} max={9} />
                            <input type="number" name="" id="" />
                            <input type="number" name="" id="" />
                            <input type="number" name="" id="" />
                        </div>
                    </div>
                    <div className="col-3 input-effect">
                        <input className="effect-22" type="text" />
                        <label>گذرواژه</label>
                        <span className="focus-bg"></span>
                    </div>
                    <div>

                    <button className='btn-style'>ذخیره گذرواژه و ورود</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button className='btn-style'>ارسال مجدد ایمیل</button>
                    </div>
                    <div>
                        <button className='btn-style'>تایید ایمیل</button>
                    </div>
                    <div>

                        <div className="col-3 input-effect">
                            <input className="effect-22" type="text" />
                            <label>تکرار گذرواژه</label>
                            <span className="focus-bg"></span>
                        </div>
                    </div>
                    <div>

                        <a href="#">حساب کاربری ندارم!</a>
                    </div>
                </div>
            </div> */}

            <div>
                <div className="col-3 input-effect">
                    <input className="effect-22" name='email' type="text" placeholder=' ' onChange={e=>setEmail(e.target.value)}/>
                    <label>ایمیل</label>
                    <span className="focus-bg"></span>
                </div>
                <button className='btn-style' onClick={()=>dispatch(sendCodEmailAction(email))}>ارسال مجدد ایمیل</button>
            </div>
            <div>
                <div className='verify_email_section'>
                    <div>
                        <span>کد فعال سازی</span>
                    </div>
                    <div className='container_number'>
                        <input type="number" name="" id="" onChange={e=>setCodVerifyEmail_1(e.target.value)}/>
                        <input type="number" name="" id="" onChange={e=>setCodVerifyEmail_2(e.target.value)}/>
                        <input type="number" name="" id="" onChange={e=>setCodVerifyEmail_3(e.target.value)}/>
                        <input type="number" name="" id="" onChange={e=>setCodVerifyEmail_4(e.target.value)}/>
                    </div>
                    <button className='btn-style' onClick={()=>dispatch(checkVerifyEmailAction(email,codVerifyEmail_1,codVerifyEmail_2,codVerifyEmail_3,codVerifyEmail_4))}>تایید ایمیل</button>
                </div>
            </div>
            <div className='container_password_input'>
                <div className="col-3 input-effect">
                    <input className="effect-22" type="text" onChange={e=>setPassword(e.target.value)}/>
                    <label>گذرواژه</label>
                    <span className="focus-bg"></span>
                </div>
                <div className="col-3 input-effect">
                    <input className="effect-22" type="text" onChange={e=>setPassword_confirmation(e.target.value)}/>
                    <label>تکرار گذرواژه</label>
                    <span className="focus-bg"></span>
                </div>
            </div>
            <div className='footer_form'>
                <button className='btn-style'>ذخیره گذرواژه و ورود</button>
                <Link to={"/register"}>حساب کاربری ندارم!</Link>
            </div>

        </div>
    )
}
