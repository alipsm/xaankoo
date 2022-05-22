import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { logoutAction } from '../../Redux/Action';
import jwtDecode from 'jwt-decode';

export default function Dashboard() {

    const dispatch=useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token=  localStorage.getItem("token")
        if (token) {
        //    debugger
           const tokenDecode=jwtDecode(token);
           console.log(tokenDecode);
       } else {
        // navigate("/dashboard", { replace: true })
       }
    }, [])
    

  return (
    <div id='dashboard'>
        <h2>سلام {"name"}</h2>
        <br />
        <h4>آماده یک ماجراجویی بزرگ هستی؟</h4>
        <br />
        <button className='btn-style' onClick={() => dispatch(logoutAction())}>خروچ</button>
    </div>
  )
}
