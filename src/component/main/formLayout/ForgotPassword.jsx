import React from 'react'

export default function ForgotPassword() {
    return (
        <div id='forgot-password'>
            <p>گذرواژه خود را فراموش کرده اید. هیچ ایرادی نداره
                ایمیل خودتون رو برامون بنویسین تا ما یک کد فعال سازی ارسال کنیم.
                کد رو وارد کنید و گذرواژه جدیدتون رو بنویسین برامون. به همین سادگی
            </p>
            {/* <div className='container_input_forgot_password_form'>
                <div>
                    <div class="col-3 input-effect">
                        <input class="effect-22" name='email' type="text" />
                        <label>ایمیل</label>
                        <span class="focus-bg"></span>
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
                    <div class="col-3 input-effect">
                        <input class="effect-22" type="text" />
                        <label>گذرواژه</label>
                        <span class="focus-bg"></span>
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

                        <div class="col-3 input-effect">
                            <input class="effect-22" type="text" />
                            <label>تکرار گذرواژه</label>
                            <span class="focus-bg"></span>
                        </div>
                    </div>
                    <div>

                        <a href="#">حساب کاربری ندارم!</a>
                    </div>
                </div>
            </div> */}

            <div>
                <div class="col-3 input-effect">
                    <input class="effect-22" name='email' type="text" />
                    <label>ایمیل</label>
                    <span class="focus-bg"></span>
                </div>
                <button className='btn-style'>ارسال مجدد ایمیل</button>
            </div>
            <div>
                <div className='verify_email_section'>
                    <div>
                        <span>کد فعال سازی</span>
                    </div>
                    <div className='container_number'>
                        <input type="number" name="" id="" maxLength={1} max={9}/>
                        <input type="number" name="" id="" />
                        <input type="number" name="" id="" />
                        <input type="number" name="" id="" />
                    </div>
                    <button className='btn-style'>تایید ایمیل</button>
                </div>
            </div>
            <div className='container_password_input'>
                <div class="col-3 input-effect">
                    <input class="effect-22" type="text" />
                    <label>گذرواژه</label>
                    <span class="focus-bg"></span>
                </div>
                <div class="col-3 input-effect">
                    <input class="effect-22" type="text" />
                    <label>تکرار گذرواژه</label>
                    <span class="focus-bg"></span>
                </div>
            </div>
            <div className='footer_form'>
                <button className='btn-style'>ذخیره گذرواژه و ورود</button>
                <a href="#">حساب کاربری ندارم!</a>
            </div>

        </div>
    )
}
