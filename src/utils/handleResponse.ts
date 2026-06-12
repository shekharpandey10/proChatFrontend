import { toast } from "react-hot-toast";


const handleResponse = (response: any) => {
    debugger
    const data = response?.response?.data ?? response?.data;
    const message = data?.message ?? response?.message ?? 'Something went wrong';

    if (data?.success) {
        toast.success(message)
    } else {
        toast.error(message);
    }
}

export default handleResponse
