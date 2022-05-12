import React from 'react'

export default function Nav() {
  return (
    <div id='nav-option-head'>
      <div className='container_nav_logo'>
        <div>
          <span className='logo_nav option_segmento_logo' />
          <a href='#'>امکانات سگمنتو</a>
        </div>
        <div>
          <span className='logo_nav course_video_logo' />
          <a href='#'>ویدئو آموزشی</a>
        </div>
        <div>
          <span className='logo_nav diamond_price_logo' />
          <a href='#'>قیمت اشتراک ماهانه</a>
        </div>
        <div>
          <span className='logo_nav cookie_communicate_logo' />
          <a href='#'>همکاری با تیم سگمنتو</a>
        </div>
      </div>
      <div>
        {true ? (
          <button className='btn-style'>ثبت نام</button>
        ) : (
          <button className='btn-style'>ورود</button>
        )

        }
      </div>
    </div>
  )
}
