'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CustomInput from './CustomInput';
import './styles.scss';


const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const formSchema = authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            if (type === 'sign-up') {
                const userData = {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address1: data.address1,
                    city: data.city,
                    state: data.state,
                    dateOfBirth: data.dateOfBirth,
                    email: data.email,
                    password: data.password
                };

                localStorage.setItem('user', JSON.stringify(userData));
                console.log(userData)

                document.cookie = "auth=true; path=/;";

                router.push('/');
            }
            if (type === 'sign-in') {
                const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

                if (storedUser.email === data.email && storedUser.password === data.password) {
                    document.cookie = "auth=true; path=/;";

                    router.push('/');
                } else {
                    alert('Invalid email or password');
                }
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <section className="auth-form">
            <header className='authHeader'>
                <Link href="/" className="authLink">
                    <Image
                        src="/icons/logo.svg"
                        width={100}
                        height={100}
                        alt="logo"
                    />
                </Link>

                <div className="welcomeWrapper">
                    <h1 className="">
                        Welcome!
                    </h1>
                    <p className="">
                        {type === 'sign-in' ? 'Enter details to login' : 'Create an account to get started'}
                    </p>
                </div>
            </header>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    {type === 'sign-up' && (
                        <>
                            <div className="form1">
                                <CustomInput
                                    control={form.control}
                                    name="firstName"
                                    label="First Name"
                                    placeholder="Enter your first name"
                                />
                                <CustomInput
                                    control={form.control}
                                    name="lastName"
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                />
                            </div>
                            <CustomInput
                                control={form.control}
                                name="address1"
                                label="Address"
                                placeholder="Enter your specific address"
                            />
                            <CustomInput
                                control={form.control}
                                name="city"
                                label="City"
                                placeholder="Enter your city"
                            />
                            <div className="form1">
                                <CustomInput
                                    control={form.control}
                                    name="state"
                                    label="State"
                                    placeholder="Example: Abuja"
                                />
                                <CustomInput
                                    control={form.control}
                                    name="dateOfBirth"
                                    label="Date of Birth"
                                    placeholder="YYYY-MM-DD"
                                />
                            </div>
                        </>
                    )}

                    <CustomInput
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                    />
                    <CustomInput
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                    />

                    <div className="formBtn">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="form-btn">
                            {isLoading ? (
                                <>
                                    <Loader2 size={20} /> &nbsp;
                                    Loading...
                                </>
                            ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                        </Button>
                    </div>
                </form>
            </Form>

            <footer className="authFooter">
                <p className="">
                    {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
                </p>
                <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
                    {type === 'sign-in' ? 'Sign up' : 'Sign in'}
                </Link>
            </footer>
        </section>
    );
};

export default AuthForm;