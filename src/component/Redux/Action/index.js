import { toast } from "react-toastify";
import { registerUser,loginUser, verifyEmail, checkVerifyEmail } from "../../service/userService"
import { showInputErrorToast, showPromisToast } from "../../Utils/toastifyPromise";


export const registerUserAction = (nameUser, email, password, password_confirmation) => {
    return async (dispatch, getState) => {
        let formdata = new FormData();
        formdata.append("name", nameUser)
        formdata.append("email", email)
        formdata.append("password", password)
        formdata.append("password_confirmation", password_confirmation)
        const { data,status } = await registerUser(formdata);
        debugger
        await dispatch({ type: "REGISTER_USER", payload: { ...getState() } })
    }
}

const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
export const loginUserAction = (email, password) => {
    return async (dispatch, getState) => {
        try {
            if (email,password) {
                
                let messageToast="";
    
                let formdata = new FormData();
                formdata.append("email", email)
                formdata.append("password", password)
                // const { data,status } = await loginUser(formdata);
                const login_user=async()=>{
                    const { data,status } = await loginUser(formdata);
                    if (status==200) {
                        // messageToast="درخواست ورود انجام شد"
                    } else {
                        
                    }
                }
                showPromisToast(login_user)
            }
            else{
                showInputErrorToast();
            }
        } catch (error) {
            console.log(error)
        }
        await dispatch({ type: "LOGIN_USER", payload: { ...getState() } })
    }
}

export const sendCodEmailAction = (email) => {
    return async (dispatch, getState) => {
        let formdata = new FormData();
        formdata.append("email", email)
        const { data,status } = await verifyEmail(formdata);
        debugger
        await dispatch({ type: "SEND_COD_EMAIL", payload: { ...getState() } })
    }
}

export const checkVerifyEmailAction = (email,codVerifyEmail_1,codVerifyEmail_2,codVerifyEmail_3,codVerifyEmail_4) => {
    return async (dispatch, getState) => {
        const code=codVerifyEmail_1+codVerifyEmail_2+codVerifyEmail_3+codVerifyEmail_4;
        let formdata = new FormData();
        formdata.append("conde", code)
        formdata.append("email", email)
        const { data,status } = await checkVerifyEmail(formdata);
        debugger
        await dispatch({ type: "VERIFY_EMAIL", payload: { ...getState() } })
    }
}