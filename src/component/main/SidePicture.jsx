import React, { Fragment } from 'react'

export default function SidePicture({form_name}) {
  return (
    <div id='side-picture-form'>
      {/* <div></div> */}
      <div>
        {form_name=="login" ? (
          <div className='picture_form_login'>

            <img src="./images/picture_form/login/sun_login.svg"  alt="2nabsh" />
            <img src="./images/picture_form/login/login.svg" alt="2nabsh" />
          </div>
          ) : (
          <img src="./images/picture_form/verifying/verifying.svg" className='picture_form' alt="2nabsh" />

        )}
      </div>
      <p>برند هایی که به ما اعتماد کرده اند:</p>
      <div>
        <img src="./images/partner_companies/2nabsh.svg" className='partner_companies_picture' alt="2nabsh" />
        <img src="./images/partner_companies/nini_fil.svg" className='partner_companies_picture' alt="nini fil" />
        <img src="./images/partner_companies/topfroosh.svg" className='partner_companies_picture' alt="top froosh" />
        <img src="./images/partner_companies/nartab.svg" className='partner_companies_picture' alt="nartab" />
        <img src="./images/partner_companies/otaghak.svg" className='partner_companies_picture' alt="otaghak" />
      </div>
    </div>
  )
}
