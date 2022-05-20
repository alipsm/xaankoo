import { toast } from "react-toastify"

export const showPromisToast = (fun) => {

    var messageToastSuccess = "";
    var messageToastFiled = "";

    switch (fun.name) {
        case "login_user":
            messageToastSuccess = "ورود موفقیت آمیز"
            messageToastFiled = "خطا در ورود کاربر"
            break;

        case "register_user":
            messageToastSuccess = "ثبت نام موفقیت آمیز"
            messageToastFiled = "خطا در ثبت نام کاربر"
            break;

        case "send_code_email":
            messageToastSuccess = "کد به حساب شما ارسال شد"
            messageToastFiled = "خطا در ارسال کد به حساب شما"
            break;


        case "check_verify_email":
            messageToastSuccess = "اعتبار سنجی ایمیل انجام شد"
            messageToastFiled = "خطا در اعتبار سنجی ایمیل"
            break;


        case "change_password":
            messageToastSuccess = "پسورد با موفقیت تغییر کرد"
            messageToastFiled = "API برایه تغییر پسورد یافت نشد"
            break;


        default:
            break;
    }
    toast.promise(
        fun
        ,
        {
            hideProgressBar: true,
            pending: 'درحال ارسال درخواست شما به سرور',
            success: messageToastSuccess,
            error: messageToastFiled
        }
    )
}

export const showInputErrorToast = () => {
    toast.info('لطفا فیلد هارا با دقت پرکنید', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}