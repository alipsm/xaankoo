import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
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
    const [remember,setRemember]=useState(0);
    const [register,setRegister]=useState(false);
    const [, forceUpdate] = useState()


    const dispatch = useDispatch();


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
    

    //RESET STATE
    const reset_state_contextApi=()=>{
        setName("")
        setEmail("")
        setPassword("")
        setPassword_confirmation("")
        setCodVerifyEmail_1("")
        setCodVerifyEmail_2("")
        setCodVerifyEmail_3("")
        setCodVerifyEmail_4("")
        setRemember(0)
        setRegister(false)
    }


    //CREATE VALIDATOR
    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی میباشد",
            min: "کمتر از 6 کاراکتر نباید باشد",
            email: "ایمیل نوشته شده صحیح نمی باشد",
            integer: "قیمت باید عدد باشد",
        },
        element: (message) => <span className='span_validator'>{message}</span>,
    }))



    //CHECK FORM VALIDATION
    const check_validator=(functionAction)=>{
        if (validator.current.allValid()) {
            dispatch(functionAction);
        }else{
            validator.current.showMessages()
            setTimeout(() => {
                validator.current.hideMessages();
                forceUpdate(2);
            }, 4000);
            forceUpdate(1);
        }
    }
    

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
              setRegister,
              validator,
              check_validator,
              reset_state_contextApi
          }
      }>
          {children}
      </context.Provider>
    )
}
