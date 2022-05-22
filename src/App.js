import { Fragment } from "react";
import Nav from "./component/header/Nav";
import Main from "./component/main/Main";
import { ToastContainer } from "react-toastify";
function App() {



  
  return (
    <Fragment>
      <Nav/>
      <Main/>
      <ToastContainer/>
    </Fragment>
  );
}

export default App;