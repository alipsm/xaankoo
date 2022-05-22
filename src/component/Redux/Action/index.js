import browserslist from "browserslist";
import { toast } from "react-toastify";
import { registerUser, loginUser, verifyEmail, checkVerifyEmail, verifyEmailChangePassword, logout } from "../../service/userService"
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

        if (nameUser && email && password && password_confirmation) {

            let toastPromiseRegister = toast.loading("درحال ارسال درخواست شما به سرور")

            let toastMessage = "";
            let state = { ...getState() }
            try {

                let formdata = new FormData();
                formdata.append("name", nameUser)
                formdata.append("email", email)
                formdata.append("password", password)
                formdata.append("password_confirmation", password_confirmation)

                // let register_user =async () => {
                const { data, status } = await registerUser(formdata);

                if (status == 200 && data.status == true) {
                    toast.update(toastPromiseRegister, { render: "به خانواده بزرگ زانکو خوش آمدید", type: "success", isLoading: false, autoClose: 3000 })
                    let toastPromiseSendCode = toast.loading("درحال ارسال درخواست شما به سرور")
                    state.email = email;
                    state.checkRegisterComplete = true;
                    // let send_code_email = async () => {
                    const { data, status } = await verifyEmail(formdata);
                    if (status == 200 && data.status == true) {
                        toast.update(toastPromiseSendCode, { render: "کد به ایمیل شما ارسال شد", type: "success", isLoading: false, autoClose: 3000 })
                        // return Promise.resolve();
                    } else {
                        // return Promise.reject();
                        data.errors.forEach(element => {
                            toastMessage += element+ " / ";;
                        });
                        toast.update(toastPromiseSendCode, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                    }
                    // }
                    // await dispatch({ type: "SEND_CODE_EMAIL", payload: state})
                    // showPromisToast(send_code_email(),"sendCod")
                    // return Promise.resolve()
                } else {
                    data.errors.forEach(element => {
                        toastMessage += element+ " / "; ;
                    });
                    toast.update(toastPromiseRegister, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                    // return Promise.reject()
                }
            } catch (error) {
                console.log("register error")
                error.response.data.errors.forEach(element => {
                    // toastMessage += element+ "\r\n";
                    toastMessage += element+ " / ";
                });
                toast.update(toastPromiseRegister, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
            }

            // }
            // showPromisToast(register_user(),"registerUser")
            await dispatch({ type: "SEND_CODE_EMAIL", payload: state })
        } else {
            showInputErrorToast();
        }
    }
}


//LOGIN USER
export const loginUserAction = (email, password) => {
    return async (dispatch, getState) => {
        // debugger

        if (email && password) {
            let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")

            let formdata = new FormData();
            formdata.append("email", email)
            formdata.append("password", password)

            let toastMessage = "";
            try {

                const { data, status } = await loginUser(formdata);
                if (status == 200 && data.status == true) {
                    // debugger
                    localStorage.setItem("token", data.data.token);
                    toast.update(toastPromise, { render: "با موفقیت وارد شدید", type: "success", isLoading: false, autoClose: 3000 })
                } else {
                    data.errors.forEach(element => {
                        toastMessage += element+ " / ";
                    });
                    toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                }
            } catch (error) {
                error.response.data.errors.forEach(element => {
                    toastMessage += element+ " / ";
                });
                toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
            }
        }
        else {
            showInputErrorToast();
        }

        await dispatch({ type: "LOGIN_USER", payload: { ...getState() } })
    }
}


//SEND EMAIL COD
export const sendCodEmailAction = (email, demoResolve) => {
    return async (dispatch, getState) => {

        if (email) {
            let state = { ...getState() }
            let formdata = new FormData();
            formdata.append("email", email)
            let send_code_email = async () => {
                const { data, status } = await verifyEmail(formdata);

                if (status == 200 && data.status == true) {
                    // state.forgotPasswordStep=1;
                    await dispatch({ type: "SEND_CODE_EMAIL", payload: state })
                    return Promise.resolve()
                } else {
                    if (demoResolve && demoResolve == true) {
                        state.forgotPasswordStep = 1;
                        await dispatch({ type: "SEND_CODE_EMAIL", payload: state })
                        return Promise.resolve()

                    } else {

                        return Promise.reject();
                    }
                }
            }
            showPromisToast(send_code_email(), "sendCod")
        }
        else {
            showInputErrorToast();
        }
    }
}


//CHECK EMAIL COD 
export const checkVerifyEmailAction = (email, codVerifyEmail_1, codVerifyEmail_2, codVerifyEmail_3, codVerifyEmail_4) => {
    return async (dispatch, getState) => {
        let state = { ...getState() }

        // debugger
        if (email && codVerifyEmail_1 && codVerifyEmail_2 && codVerifyEmail_3 && codVerifyEmail_4) {

            let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")
            let toastMessage = "";
            try {
                const code = codVerifyEmail_1 + codVerifyEmail_2 + codVerifyEmail_3 + codVerifyEmail_4;
                let formdata = new FormData();
                formdata.append("code", code)
                formdata.append("email", email ? email : state.email)
                // let check_verify_email = async () => {
                const { data, status } = await checkVerifyEmail(formdata);
                // debugger
                if (status == 200 && data.status == true) {
                    state.forgotPasswordStep = 2;
                    state.checkVerifyRegister = true;
                    toast.update(toastPromise, { render: "اعتبار سنجی ایمیل انجام شد", type: "success", isLoading: false, autoClose: 3000 })
                    // return Promise.resolve();
                } else {
                    // return Promise.reject();
                    data.errors.forEach(element => {
                        toastMessage += element+ " / ";
                    });
                    toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                }
                // }
                // showPromisToast(check_verify_email(),"checkVerifyEmail")
            } catch (error) {
                error.response.data.errors.forEach(element => {
                    toastMessage += element+ " / ";
                });
                toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })

            }


            await dispatch({ type: "VERIFY_EMAIL", payload: state })
        }
        else {
            showInputErrorToast();
        }
    }
}




//SEND EMAIL COD FOR FORGOT PASSWORD SECTION
export const sendCodEmailForgotPasswordAction = (email) => {
    return async (dispatch, getState) => {

        if (email) {

            let toastPromise= toast.loading("درحال ارسال درخواست شما به سرور")

            let toastMessage="";
            try {
                debugger
                let state = { ...getState() }
                let formdata = new FormData();
                formdata.append("email", email)
                const { data, status } = await verifyEmailChangePassword(formdata);
                // let send_code_email_forgotPassword = async () => {
                if (status == 200 && data.status == true) {
                    state.forgotPasswordStep = 1;
                    toast.update(toastPromise,{render: "کد به ایمیل شما ارسال شد", type: "success", isLoading: false,autoClose:3000 })
                    await dispatch({ type: "SEND_CODE_EMAIL_FORGOTPASSWORD", payload: state })
                    // return Promise.resolve()
                } else {
                    // return Promise.reject();
                    data.errors.forEach(element => {
                        toastMessage += element;
                    });
                    toast.update(toastPromise,{render: toastMessage, type: "error", isLoading: false,autoClose:3000 })
                }
                // }
                // debugger
                // const dd=data.error[0]
                // showPromisToast(send_code_email_forgotPassword(),data.error[0])
            } catch (error) {
                error.response.data.errors.forEach(element => {
                    toastMessage += element ;
                });
                toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })

            }

            // showPromisToast(send_code_email_forgotPassword(),"sendCod")
        }
        else {
            showInputErrorToast();
        }
    }
}


//CHANGE USER PASSWORD 
export const changePasswordAction = () => {
    return async (dispatch, getState) => {

        let state = { ...getState() }

        let change_password = async () => {
            return Promise.reject();
        }

        showPromisToast(change_password(), "changePassword")

        alert("باعرض پوزش دسترسی به وبسرویس تغییر پسورد نداشتم و قرار شد تا این مرحله پیش برم");
        await dispatch({ type: "CHANGE_PASSWORD", payload: state })
    }
}
export const logoutAction = () => {
    return async (dispatch, getState) => {
        let toastPromise= toast.loading("درحال ارسال درخواست شما به سرور")

        let toastMessage="";

        let state = { ...getState() }

        try {
            const { data, status } = await logout();

        if (status == 200 && data.status == true) {
            toast.update(toastPromise,{render: "از حساب خود خارج شدید", type: "success", isLoading: false,autoClose:3000 })
        }else{
            data.errors.forEach(element => {
                toastMessage += element;
            });
            toast.update(toastPromise,{render: toastMessage, type: "error", isLoading: false,autoClose:3000 })
        }


        } catch (error) {
            error.response.data.errors.forEach(element => {
                toastMessage += element ;
            });
            toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
        }
        
        await dispatch({ type: "CHANGE_PASSWORD", payload: state })
    }
}