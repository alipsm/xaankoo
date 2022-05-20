import { Fragment, useContext, useEffect } from "react";
import Nav from "./component/header/Nav";
import Main from "./component/main/Main";
import {useLocation} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import { context } from "./component/contextApi/context";
import { useDispatch } from "react-redux";
import { resetStateRedux } from "./component/Redux/Action";
function App() {

  const {reset_state_contextApi} = useContext(context)
  const location=useLocation().pathname
  const dispatch = useDispatch();


  //RESET STATE REDUX AND CONTEXT API WITH CHANGE BROWSER PATH
  useEffect(() => {
    if (location!="/register/verifyemail") {
      reset_state_contextApi();
      dispatch(resetStateRedux());
    }
  }, [location])
  
  
  return (
    <Fragment>
      <Nav/>
      <Main/>
      <ToastContainer/>
    </Fragment>
  );
}

export default App;