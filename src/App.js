// import logo from './logo.svg';
// import './App.css';

import { Fragment } from "react";
import Nav from "./component/header/Nav";
import Main from "./component/main/Main";

import axios from 'axios'
import { ToastContainer } from "react-toastify";

function App() {

  

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