import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginFormValues, loginSchema } from '../../schemas/auth.schemas';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import type { loginProp } from '@/type';



function LoginForm() {

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleLogin = (value: loginProp) => {
        console.log(value)
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

                <Button type='submit' className='w-full bg-primary'>Login</Button>
            </form>
        </Form>
    )
}

export default LoginForm
