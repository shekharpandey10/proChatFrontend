import { toast } from "react-hot-toast";


const handleResponse = (response: any) => {
    if (response?.data?.success) {
        toast.success(response?.data?.message)
    } else {
        toast.error(response.data.message || 'something went wrong');
    }
}

export default handleResponse