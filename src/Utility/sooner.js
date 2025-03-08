import {toast} from 'sonner';



export const successToast=(message)=>{
 toast.message(message)
}

export const errorToast=(message)=>{
    toast.error(message)
}

export const infoToast=(message)=>{
    toast.info(message)
} 