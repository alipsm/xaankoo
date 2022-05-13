import React from 'react'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'

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
        <Routes>
          <Route path={"login"} element={<Link to={"register"} className='btn-style'>ثبت نام</Link>} />
          <Route path={"forgotpassword"} element={<Link to={"forgotpassword"} className='btn-style'>ثبت نام</Link>} />
          <Route path={"*"} element={<Link to={"login"} className='btn-style'>ورود</Link>} />
        </Routes>
      </div>
    </div>
  )
}
