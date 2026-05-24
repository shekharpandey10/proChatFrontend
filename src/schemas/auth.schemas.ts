import {email, z} from 'zod'



export const loginSchema=z.object({
    email:z.email('Invalid email'),
    password:z.string().min(8,'Min 8 char required').regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,{message:'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.'})
})


export type LoginFormValues=z.infer<typeof loginSchema>


export const signUpSchema=z.object({
    first_name:z.string().min(2,'Min 2 char required').max(36,'Max 36 char limit'),
    last_name:z.string().min(2,"Min 2 char required").max(36,'Max 36 char limit'),
    email:z.email('Invalid emil'),
  password:z.string().min(8,'Min 8 char required').regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,{message:'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.'})})


  export type SignUpFormValues=z.infer<typeof signUpSchema>