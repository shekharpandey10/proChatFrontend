import {email, z} from 'zod'



export const loginSchema=z.object({
    email:z.email('Invalid email'),
    password:z.string().min(8,'Min 8 char required').regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,{message:'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.'})
})


export type LoginFormValues=z.infer<typeof loginSchema>