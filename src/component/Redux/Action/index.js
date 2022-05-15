import { registerUser } from "../../service/userService"


export const registerUserAction = (nameUser, email, password, password_confirmation) => {
    return async (dispatch, getState) => {
        const { } = getState();
        var formdata = new FormData();
        formdata.append("name", nameUser)
        formdata.append("email", email)
        formdata.append("password", password)
        formdata.append("password_confirmation", password_confirmation)
        const { status } = await registerUser(formdata);
        debugger
        await dispatch({ type: "REGISTER_USER", payload: { ...getState() } })
    }
}