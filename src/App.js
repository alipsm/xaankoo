// import logo from './logo.svg';
// import './App.css';

import { Fragment } from "react";
import Nav from "./component/header/Nav";
import Main from "./component/main/Main";

import axios from 'axios'
import { ToastContainer } from "react-toastify";

function App() {

  const handle_register = () => {
    
    
    // var formdata = new FormData();
    // formdata.append("code", "2545")
    // formdata.append("email", "stoormix@gmail.com")
    // axios.post(
    //   "http://segmento.online/api/v1/auth/verifyEmail",
    //   formdata
    //   ,
    //   {
    //     headers: [
    //       {
    //         "type": "noauth",
    //         "Accept": "application/json"
    //       }
    //     ]
    //   }).then(({ data, status }) => {
    //     if (status === 200) {
    //       debugger
    //       console.log("send");
    //     }
    //   }).catch(ex => {
    //     console.log(ex);
    //   });


    // RESEND COD VERIFYING EMAIL
    // var formdata = new FormData();
    // formdata.append("email", "stooormix@gmail.com")
    // axios.post(
    //   "http://segmento.online/api/v1/email/verify/resend",
    //   formdata
    //   ,
    //   {
    //     headers: [
    //       {
    //         "type": "noauth",
    //         "Accept": "application/json"
    //       }
    //     ]
    //   }).then(({ data, status }) => {
    //     if (status === 200) {
    //       debugger
    //       console.log("send");
    //     }
    //   }).catch(ex => {
    //     console.log(ex);
    //   });



    //REGISTER USER
    // var formdata = new FormData();
    // formdata.append("name","parsa")
    // formdata.append("email","stooormix@gmail.com")
    // formdata.append("password","12385678")
    // formdata.append("password_confirmation","12385678")
    //   axios.post(
    //     "http://segmento.online/api/v1/auth/register",
    //      formdata
    //     ,
    //     {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     }).then(({ data, status }) => {
    //         if (status === 200) {

    //           console.log("send");
    //         }
    //     }).catch(ex => {
    //         console.log(ex);
    //     });



    //LOGIN USER
    // var formdata = new FormData();
    // formdata.append("email","stoormix@gmail.com")
    // formdata.append("password","12385678")
    // formdata.append("remember","1")
    //   axios.post(
    //     "http://segmento.online/api/v1/auth/login",
    //      formdata
    //     ,
    //     {
    //       headers: [
    // 			{
    //         "type": "noauth",
    //         "Accept":"application/json"
    // 			}
    // 		]
    //     }).then(({ data, status }) => {
    //         if (status === 200) {
    //           debugger
    //           console.log("send");
    //         }
    //     }).catch(ex => {
    //         console.log(ex);
    //     });

  }

  return (
    <Fragment>
      <Nav/>
      <Main/>
      <ToastContainer/>
      {/* <button className="btn-style" onClick={() => handle_register()}>register</button> */}
    </Fragment>
  );
}

export default App;

      // header: [],
      // body: {
      // 	mode: "formdata",
      // 	formdata: [
      // 		{
      // 			key: "name",
      //       value: "ba",
      // 			type: "text"
      // 		},
      // 		{
      // 			key: "email",
      // 			value: "ba@ga.com",
      // 			type: "text"
      // 		},
      // 		{
      // 			key: "password",
      // 			value: "12345678",
      // 			type: "text"
      // 		},
      // 		{
      // 			key: "password_confirmation",
      // 			value: "12345678",
      // 			type: "text"
      // 		}
      // 	]
      // },
      // url: {
      // 	raw: "{{https://schema.getpostman.com/json/collection/v2.1.0/collection.json}}/auth/register",
      // 	host: [
      // 		"{{https://schema.getpostman.com/json/collection/v2.1.0/collection.json}}"
      // 	],
      // 	path: [
      // 		"auth",
      // 		"register"
      // 	]
      // },
      // description: "بر اساس نام و ایمیل و پسورد کاربر ثبت نام میکند"



      // https://app.getpostman.com/join-team?invite_code=9e6dfd546693b87f217b6ad06561992d