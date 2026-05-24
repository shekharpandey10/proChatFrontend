import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginFormValues, loginSchema } from '../../schemas/auth.schemas';
function LoginForm() {

    useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleLogin = () => {

    }


    return (
        <Form
    )
}

export default LoginForm
