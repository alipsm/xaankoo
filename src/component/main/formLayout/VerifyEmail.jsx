import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { context } from '../../contextApi/context';
import { checkVerifyEmailAction, sendCodEmailAction } from '../../Redux/Action';

export default function VerifyEmail() {
    
    const dispatch = useDispatch();

    const {
        email,
        codVerifyEmail_1,
        setCodVerifyEmail_1,
        codVerifyEmail_2,
        setCodVerifyEmail_2,
        codVerifyEmail_3,
        setCodVerifyEmail_3,
        codVerifyEmail_4,
        setCodVerifyEmail_4,
    } = useContext(context)


    return (
        <div id='verify-form'>
            <p>
                مطمئن باشین این یه متن از پیش آماده شده نیست، ما خیلی خوشحالیم که شما
                از امروز همراه ما هستی، قطعا قول میدیم هر روز شما هم اینطوری خوب و خوش باشه
                چون تلاشمون اینه کنار خلق ارزش، حس خوبی هم از کار با محصولات ما دریافت کنید
                و از اون گذشته، ما دوست داریم شما در کسب و کارتون به اوج برسید. زودباشین
                برین از ایمیل تون کد فعال سازی حساب رو بردارین و ماجراجویی هاتون رو در
                سگمنتو شروع کنید. (اگرم دیدین ایمیلی نیومده، مجددا درخواست بدین، کامپیوترها
                کامپیوترها خیلی هم باهوش نیستن و ممکنه اشتباه کرده باشن 😉)
            </p>
            <div className='verify_email_section'>
                <span>کد فعال سازی</span>
                <div className='container_number'>
                    <input className='input_selector_4' type="tel" name="" id="" maxLength={1} onChange={e => setCodVerifyEmail_1(e.target.value)}/>
                    <input className='input_selector_3' type="tel" name="" id="" maxLength={1} onChange={e => setCodVerifyEmail_2(e.target.value)}/>
                    <input className='input_selector_2' type="tel" name="" id="" maxLength={1} onChange={e => setCodVerifyEmail_3(e.target.value)}/>
                    <input  type="tel" name="" id="" maxLength={1} onChange={e => setCodVerifyEmail_4(e.target.value)}/>
                </div>
                <div>
                <button className='btn-style' onClick={()=>dispatch(checkVerifyEmailAction(email, codVerifyEmail_1, codVerifyEmail_2, codVerifyEmail_3, codVerifyEmail_4))}>تایید ایمیل</button>
                <a href="#" onClick={()=>dispatch(sendCodEmailAction(email))}>دریافت مجدد ایمیل</a>
                </div>
            </div>
            <div className='footer_icon_suport'>
                <img src='/images/picture_form/email_verify/call.svg' />
                <img src='/images/picture_form/email_verify/support.svg' />
            </div>
        </div>
    )
}
