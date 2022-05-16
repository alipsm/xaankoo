export const userReducer = (state = 1, action) => {
    switch (action.type) {
        case "REGISTER_USER":
            return action.payload 
        case "LOGIN_USER":
            return action.payload 
        case "SEND_COD_EMAIL":
            return action.payload 
        case "VERIFY_EMAIL":
            return action.payload 


        case "RESET_STATE":
            return 0

        default:
            break;
    }
}