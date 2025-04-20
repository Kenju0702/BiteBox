import FormLogin from '@/components/FormLogin'
import { ModeToggle } from '@/components/ToggleMode'
import React from 'react'

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-sm w-full  p-6 rounded-xl border-2 border-yellow-700 shadow">
                <h1 className='flex justify-center'>Đăng Nhập</h1>
                <FormLogin />
            </div>
        </div>
    )
}

export default LoginPage