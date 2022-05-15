export const userReducer = (state = {}, action) => {
    switch (key) {
        case "REGISTER_USER":
            return { ...action.payload }
        case "LOGIN_USER":
            return { ...action.payload }
        case "SEND_COD_EMAIL":
            return { ...action.payload }
        case "VERIFY_EMAIL":
            return { ...action.payload }

        default:
            break;
    }
}