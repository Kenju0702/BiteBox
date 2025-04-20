import FormRegister from '@/components/FormRegister'
import React from 'react'

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-sm w-full  p-6 rounded-xl border-2 border-yellow-700 shadow">
                <h1 className='flex justify-center'>Đăng Nhập</h1>
                <FormRegister />
            </div>
        </div>
    )
}

export default RegisterPage
