import React, { useEffect, useState } from 'react'
import { handleNextInput } from '../Utils/focusNextInput';
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
    const [register,setRegister]=useState(false);


    //HANDLE SELECT NEXT INPUT IN FORM FORGOTPASSWORD AND VERIFYEMAIL
    useEffect(() => {
        handleNextInput(0)
    }, [codVerifyEmail_1])
    useEffect(() => {
        handleNextInput(4)
    }, [codVerifyEmail_2])
    useEffect(() => {
        handleNextInput(3)
    }, [codVerifyEmail_3])
    useEffect(() => {
        handleNextInput(2)
    }, [codVerifyEmail_4])
    
    

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
              setRemember,
              register,
              setRegister
          }
      }>
          {children}
      </context.Provider>
    )
}
