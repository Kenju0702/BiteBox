"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React, { useState } from "react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import clsx from "clsx"
import { Eye, EyeOff } from "lucide-react"

const formSchema = z.object({
    email: z.string().email("Email không hợp lệ").min(2, "Email phải có ít nhất 2 ký tự").max(50, "Email không được dài quá 50 ký tự"),
    password: z.string().min(2, "Mật khẩu phải có ít nhất 2 ký tự").max(50, "Mật khẩu không được dài quá 50 ký tự"),
});


const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
                {/* Username Input */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập email..." {...field} className="border-2 p-3 border-yellow-600" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password Input */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mật khẩu</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Nhập mật khẩu..."
                                        {...field}
                                        className={clsx("pr-10 border-2 p-3 border-yellow-600", field.value && "font-semibold")}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full border-2 p-3 border-yellow-600">
                    Đăng nhập
                </Button>
            </form>
        </Form>
    )
}

export default FormLogin
