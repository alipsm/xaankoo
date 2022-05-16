import { toast } from "react-toastify";
import { registerUser,loginUser, verifyEmail, checkVerifyEmail } from "../../service/userService"
import { showInputErrorToast, showPromisToast } from "../../Utils/toastifyPromise";



export const resetState = () => {
    return async (dispatch) => {
        await dispatch({ type: "RESET_STATE"})
    }
}
export const registerUserAction = (nameUser, email, password, password_confirmation) => {
    return async (dispatch, getState) => {
        if (nameUser,email,password,password_confirmation) {
            let formdata = new FormData();
            formdata.append("name", nameUser)
            formdata.append("email", email)
            formdata.append("password", password)
            formdata.append("password_confirmation", password_confirmation)
            const register_user=async()=>{
                const { data,status } = await registerUser(formdata);
            }
            showPromisToast(register_user)
        }else{
            showInputErrorToast();
        }
        await dispatch({ type: "REGISTER_USER", payload: { ...getState() } })
    }
}

const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
export const loginUserAction = (email, password) => {
    return async (dispatch, getState) => {
        try {
            if (email,password) {
                
                let formdata = new FormData();
                formdata.append("email", email)
                formdata.append("password", password)
                // const { data,status } = await loginUser(formdata);
                const login_user=async()=>{
                    const { data,status } = await loginUser(formdata);
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
        let next_section=false;

        if (email) {
            
            let formdata = new FormData();
            formdata.append("email", email)
            const send_code_email=async()=>{
                const { data,status } = await verifyEmail(formdata);
                // debugger
                if (status==200) {
                    next_section=true;
                }
                await dispatch({ type: "SEND_COD_EMAIL", payload:  next_section==true?1:{...getState()}  })
            }
            showPromisToast(send_code_email)
        }
        else{
            showInputErrorToast();
        }
    }
}

export const checkVerifyEmailAction = (email,codVerifyEmail_1,codVerifyEmail_2,codVerifyEmail_3,codVerifyEmail_4) => {
    return async (dispatch, getState) => {
        let next_section=false;

        if (email,codVerifyEmail_1,codVerifyEmail_2,codVerifyEmail_3,codVerifyEmail_4) {
            
            const code=codVerifyEmail_1+codVerifyEmail_2+codVerifyEmail_3+codVerifyEmail_4;
            debugger
            let formdata = new FormData();
            formdata.append("conde", code)
            formdata.append("email", email)
            const check_verify_email=async()=>{
                const { data,status } = await checkVerifyEmail(formdata);
                if (status==200) {
                    next_section=true;
                 }
                 await dispatch({ type: "VERIFY_EMAIL", payload: next_section==true?2:{...getState()}})
            }
            showPromisToast(check_verify_email)
        }
        else{
            showInputErrorToast();
        }

    }
}