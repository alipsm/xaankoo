export const userReducer = (state = { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }, action) => {
    switch (action.type) {
        case "REGISTER_USER":
            return { ...action.payload }
        case "LOGIN_USER":
            return { ...action.payload }
        case "SEND_CODE_EMAIL":
            return { ...action.payload }
        case "VERIFY_EMAIL":
            return { ...action.payload }
        case "SEND_CODE_EMAIL_FORGOTPASSWORD":
            return { ...action.payload }
        case "VERIFY_EMAIL_CHANGE_PASSWORD":
            return { ...action.payload }
        case "CHANGE_PASSWORD":
            return { ...action.payload }

        case "RESET_STATE":
            return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}