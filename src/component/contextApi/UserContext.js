import React, { useState } from 'react'
import {context} from './context'
export default function UserContext({children}) {
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [password_confirmation,setPassword_confirmation]=useState("");
    const [codVerifyEmail_1,setCodVerifyEmail_1]=useState("");
    const [codVerifyEmail_2,setCodVerifyEmail_2]=useState("");
    const [codVerifyEmail_3,setCodVerifyEmail_3]=useState("");
    const [codVerifyEmail_4,setCodVerifyEmail_4]=useState("");
    const [remember,setRemember]=useState("");


  return (
      <context.Provider value={
          {
              name,
              setName,
              email,
              setEmail,
              password,
              setPassword,
              password_confirmation,
              setPassword_confirmation,
              codVerifyEmail_1,
              setCodVerifyEmail_1,
              codVerifyEmail_2,
              setCodVerifyEmail_2,
              codVerifyEmail_3,
              setCodVerifyEmail_3,
              codVerifyEmail_4,
              setCodVerifyEmail_4,
              remember,
              setRemember
          }
      }>
          {children}
      </context.Provider>
    )
}
