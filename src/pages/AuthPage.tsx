import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Tabs from '../components/common/Tabs'
import LoginForm from '@/components/forms/LoginForm'
import SignUpForm from '@/components/forms/SignUpForm'

const tabs = [
    {
        label: 'login',
        value: 'login'
    },
    {
        label: 'signup',
        value: 'signup'
    }
]

function AuthPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const activeTab = location.pathname === '/login' ? 'login' : 'signup'
    const handleTabChange = (value: string) => {
        navigate(`/${value}`)
    }
    return (
        <div className='w-full text-center flex justify-center '>
            <div className='w-[30%] bg-white rounded-md shadow-md  my-3 p-5 flex flex-col gap-5'>
                <header className='flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold'>Welcome back</h1>
                    <p>Your high-performance workspace awaits.</p>
                </header>
                <Tabs tabs={tabs} activeTab={activeTab} onChange={handleTabChange} />
                <main className='flex flex-col'>
                    {activeTab === 'login' ? <LoginForm /> : <SignUpForm />}
                </main>
            </div>


        </div>
    )
}

export default AuthPage
