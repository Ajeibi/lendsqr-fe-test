import AuthForm from '@/components/form/AuthForm'
import React from 'react'
// import '../styles.scss';

const SignIn = () => {
    return (
        <section className="flex-center size-full max-sm:px-6">
            <AuthForm type="sign-in" />
        </section>
    )
}

export default SignIn
