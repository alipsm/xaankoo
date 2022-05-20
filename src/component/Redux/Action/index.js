import { registerUser, loginUser, verifyEmail, checkVerifyEmail } from "../../service/userService"
import { showInputErrorToast, showPromisToast } from "../../Utils/toastifyPromise";


// RESET STATE REDUX
export const resetStateRedux = () => {
    return async (dispatch) => {
        await dispatch({ type: "RESET_STATE" })
    }
}


// REGISTER USER
export const registerUserAction = (nameUser, email, password, password_confirmation) => {
    return async (dispatch, getState) => {

        if (nameUser&& email&& password&& password_confirmation) {

            let state={...getState()}

            let formdata = new FormData();
            formdata.append("name", nameUser)
            formdata.append("email", email)
            formdata.append("password", password)
            formdata.append("password_confirmation", password_confirmation)

            let register_user =async () => {
                const { data, status } = await registerUser(formdata);

                if (status==200&&data.status==true) {
                    state.email=email;
                    state.checkRegisterComplete=true;
                    let send_code_email = async () => {
                        const { data, status } = await verifyEmail(formdata);
                        if (status==200&&data.status==true) {
                            return Promise.resolve();
                        }else{
                            return Promise.reject();
                        }
                    }
                    await dispatch({ type: "SEND_CODE_EMAIL", payload: state})
                    showPromisToast(send_code_email)
                    return Promise.resolve()
                }else{
                    return Promise.reject()
                }
            }
            showPromisToast(register_user)
        } else {
            showInputErrorToast();
        }
    }
}


//LOGIN USER
export const loginUserAction = (email, password) => {
    return async (dispatch, getState) => {
        // debugger
        try {
            if (email&& password) {

                let formdata = new FormData();
                formdata.append("email", email)
                formdata.append("password", password)

                let login_user = async () => {
                    const { data, status } = await loginUser(formdata);
                    if (status==200&&data.status==true) {
                        return Promise.resolve();
                    }else{
                        return Promise.reject();
                    }
                }
                showPromisToast(login_user)
            }
            else {
                showInputErrorToast();
            }
        } catch (error) {
            showInputErrorToast();
        }
        await dispatch({ type: "LOGIN_USER", payload: { ...getState() } })
    }
}


//SEND EMAIL COD
export const sendCodEmailAction = (email,demoResolve) => {
    return async (dispatch, getState) => {

        if (email) {
            let state={...getState()}
            let formdata = new FormData();
            formdata.append("email", email)
            let send_code_email = async () => {
                const { data, status } = await verifyEmail(formdata);

                if (status == 200&&data.status==true) {
                    state.forgotPasswordStep=1;
                    await dispatch({ type: "SEND_CODE_EMAIL", payload:state})
                    return Promise.resolve()
                }else{
                    if(demoResolve&&demoResolve==true){
                        state.forgotPasswordStep=1;
                        await dispatch({ type: "SEND_CODE_EMAIL", payload:state})
                        return Promise.resolve()

                    }else{

                        return Promise.reject();
                    }
                }
            }
            showPromisToast(send_code_email)
        }
        else {
            showInputErrorToast();
        }
    }
}


//CHECK EMAIL COD 
export const checkVerifyEmailAction = (email, codVerifyEmail_1, codVerifyEmail_2, codVerifyEmail_3, codVerifyEmail_4) => {
    return async (dispatch, getState) => {
        let state={...getState()}

        // debugger
        if (email&& codVerifyEmail_1&& codVerifyEmail_2&& codVerifyEmail_3&& codVerifyEmail_4) {

            const code = codVerifyEmail_1 + codVerifyEmail_2 + codVerifyEmail_3 + codVerifyEmail_4;
            let formdata = new FormData();
            formdata.append("code", code)
            formdata.append("email", email?email:state.email)
            let check_verify_email = async () => {
                const { data, status } = await checkVerifyEmail(formdata);
                debugger
                if (status == 200&&data.status==true) {
                    state.forgotPasswordStep=2;
                    await dispatch({ type: "VERIFY_EMAIL", payload: state})
                    return Promise.resolve();
                }else{
                    return Promise.reject();
                }
            }
            showPromisToast(check_verify_email)
        }
        else {
            showInputErrorToast();
        }
    }
}


//CHANGE USER PASSWORD 
export const changePasswordAction = () => {
    return async (dispatch, getState) => {

        let state={...getState()}

        let change_password = async () => {
            return Promise.reject();
        }

        showPromisToast(change_password)

        alert("باعرض پوزش دسترسی به وبسرویس تغییر پسورد نداشتم و قرار شد تا این مرحله پیش برم");
        await dispatch({ type: "CHANGE_PASSWORD",payload:state })
    }
}