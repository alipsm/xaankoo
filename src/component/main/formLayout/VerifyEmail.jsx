import React from 'react'

export default function VerifyEmail() {
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
                    <input type="number" name="" id="" maxLength={1} max={9} />
                    <input type="number" name="" id="" />
                    <input type="number" name="" id="" />
                    <input type="number" name="" id="" />
                </div>
                <div>
                <button className='btn-style'>تایید ایمیل</button>
                <a href="#" >دریافت مجدد ایمیل</a>
                </div>
            </div>
            <div className='footer_icon_suport'>
                <img src='./images/picture_form/email_verify/call.svg' />
                <img src='./images/picture_form/email_verify/support.svg' />
            </div>
        </div>
    )
}
