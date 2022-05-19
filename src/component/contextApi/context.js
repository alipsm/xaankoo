import { createContext } from "react";

export const context=createContext({
    name:"",
    setName:()=>{},
    email:"",
    setEmail:()=>{},
    password:"",
    setPassword:()=>{},
    password_confirmation:"",
    setPassword_confirmation:()=>{},
    codVerifyEmail_1:"",
    setCodVerifyEmail_1:()=>{},
    codVerifyEmail_2:"",
    setCodVerifyEmail_2:()=>{},
    codVerifyEmail_3:"",
    setCodVerifyEmail_3:()=>{},
    codVerifyEmail_4:"",
    setCodVerifyEmail_4:()=>{},
    remember:"",
    setRemember:()=>{},
    register:false,
    setRegister:()=>{}
})