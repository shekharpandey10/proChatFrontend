import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginFormValues, loginSchema } from '../../schemas/auth.schemas';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import type { loginProp } from '@/type';
import api from "@/utils/api";
import apiRoutes from "@/utils/apiRoutes";
import handleResponse from "@/utils/handleResponse";
import useAuthStore from "@/store/authstore";
import { useState } from "react";



function LoginForm() {

    const setAccessToken = useAuthStore((store) => store.setAccessToken)
    const setUser = useAuthStore((store) => store.setUser)
    const [loading, setLoading] = useState(false)

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleLogin = async (value: loginProp) => {
        try {
            setLoading(true)
            const res = await api.post(apiRoutes.auth.login, value)
            const result = res?.data
            if (result?.success) {
                const accessToken = result?.accessToken;
                const user = result?.data;
                await setAccessToken(accessToken)
                await setUser(user)
                handleResponse(res)
            } else {
                throw new Error('Invalid User')
            }
        } catch (error) {
            handleResponse(error)

        } finally {
            setLoading(false)
        }
    }


    return (
        <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleLogin)}>

                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter email" {...field} autoComplete="email" />
                            </FormControl>
                            <FormMessage className="text-start" />

                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type='password' placeholder='Enter password' {...field} autoComplete="password" />
                            </FormControl>
                            <FormMessage className="text-start" />
                        </FormItem>
                    )}
                />

                <Button type='submit' className='w-full bg-primary' disabled={loading}>{loading ? 'Loading...' : 'Login'}</Button>
            </form>
        </Form>
    )
}

export default LoginForm
