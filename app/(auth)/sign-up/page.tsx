import AuthForm from '@/components/form/AuthForm'
import React from 'react'
// import '../styles.scss';

const SignUp = () => {
    return (
        <section className="flex-center size-full max-sm:px-6">
            <AuthForm type="sign-up" />
        </section>
    )
}

export default SignUp
