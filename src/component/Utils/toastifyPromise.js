import { toast } from "react-toastify"

export const showPromisToast=(fun)=>{
    // debugger
    var messageToastSuccess="";
    var messageToastFiled="";
    switch (fun.name) {
        case "login_user":
            messageToastSuccess= "ورود موفقیت آمیز"
            messageToastFiled="خطا در ورود کاربر"
        default:
            break;
    }
    toast.promise(
        fun
       ,
       {
        hideProgressBar:true,
         pending: 'درحال ارسال درخواست شما به سرور',
         success:messageToastSuccess,
         error:messageToastFiled
       }
   )
}

export const showInputErrorToast=()=>{
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