import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { signUpSchema, type SignUpFormValues } from "@/schemas/auth.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import type { signUpProps } from "@/type"
import handleResponse from "@/utils/handleResponse"
import api from "@/utils/api"
import apiRoutes from "@/utils/apiRoutes"


function SignUpForm() {
    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    })
    const handleSignUp = async (value: signUpProps) => {
        try {
            debugger
            const response = await api.post(apiRoutes.auth.signup, value)
            console.log(response)
            const result = response.data
            if (result?.success) {
                handleResponse(response)
            }
        } catch (error: any) {
            handleResponse(error)
        }

    }
    return (
        <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSignUp)}>
                <div className="grid grid-cols-2 gap-3">
                    <FormField control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input type="name" autoComplete="first_name" placeholder="First Name" {...field} />
                                </FormControl>
                                <FormMessage className="text-start" />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control}
                        name="last_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input type="name"
                                        autoComplete="last_name"
                                        placeholder="Last Name" {...field} />
                                </FormControl>
                                <FormMessage className="text-start" />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email"
                                    autoComplete="email"
                                    placeholder="Working email" {...field} />

                            </FormControl>
                            <FormMessage className="text-start" />
                        </FormItem>
                    )}
                />

                <FormField control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password"
                                    autoComplete="password" placeholder="Min 8 character" {...field} />
                            </FormControl>
                            <FormMessage className="text-start" />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Create Account</Button>
            </form>
        </Form>
    )
}

export default SignUpForm
