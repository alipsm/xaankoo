import React from 'react'

export default function Nav() {
  return (
    <div id='nav-option-head'>
        <div className='container_nav_logo'>
            <div>
                <div className='logo_nav option_segmento_logo' />
                <span>امکانات سگمنتو</span>
            </div>
            <div>
                <div className='logo_nav course_video_logo'/>
                <span>ویدئو آموزشی</span>
            </div>
            <div>
                <div className='logo_nav diamond_price_logo' />
                <span>قیمت اشتراک ماهانه</span>
            </div>
            <div>
                <div className='logo_nav cookie_communicate_logo' />
                <span>همکاری با تیم سگمنتو</span>
            </div>
        </div>
        <div>
          {true?(

            <button className='btn-style'>ثبت نام</button>
            ):(
              
              <button className='btn-style'>ورود</button>
          )

          }
        </div>
    </div>
  )
}
