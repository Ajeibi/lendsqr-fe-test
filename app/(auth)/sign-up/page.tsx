import AuthForm from '@/components/form/AuthForm'
import React from 'react'

const SignUp = () => {
    return (
        <section className="flex-center size-full max-sm:px-6 overflow-y-auto">
            <AuthForm type="sign-up" />
        </section>
    )
}

export default SignUp
