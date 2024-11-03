'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Tabs from '@/components/ui/nav-tab';
import { ScrollBar } from '@/components/ui/scroll-area';
import { getUserInitials } from '@/lib/utils';
import { User } from '@/types';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Star } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const user_nav_tabs = [
    { name: "General Details", href: "/" },
    { name: "Documents", href: "/home" },
    { name: "Bank Details", href: "/home" },
    { name: "Loans", href: "/home" },
    { name: "Savings", href: "/home" },
    { name: "App and System", href: "/home" },
];

const DynamicPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("https://run.mocky.io/v3/2c6df1a4-8bbd-4b44-9102-ea1574d175fe");
                if (!response.ok) throw new Error("Failed to fetch user data");

                const users: User[] = await response.json();
                const userData = users.find((user) => user.id === Number(id));

                setUser(userData || null);
                console.log("User data fetched:", userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (id) {
            fetchUserData();
        }
    }, [id]);

    if (!user) return <p>Loading...</p>;
    const { personalInfo, educationAndEmployment, socials, guarantors, ratings } = user;

    const renderStars = () => {
        return Array.from({ length: 3 }, (_, index) => (
            <Star key={index} className={`h-5 w-5 ${index < ratings ? 'text-yellow-500' : 'text-gray-400'}`} />
        ));
    };

    return (
        <div className="mt-3 text-black-1 md:mr-2">
            <section className="flex justify-between items-center">
                <div className="md:text-base text-xl font-semibold">User Details</div>
                <div className="hidden sm:flex gap-3">
                    <Button className="border rounded-lg border-red-500 text-red-500 text-xs">BLACKLIST USER</Button>
                    <Button className="border rounded-lg border-blue-500 text-blue-500 text-xs">ACTIVATE USER</Button>
                </div>
            </section>

            <section className="flex justify-between md:hidden mt-5">
                <Button className="border rounded-lg border-red-500 text-red-500 text-xs">BLACKLIST USER</Button>
                <Button className="border rounded-lg border-blue-500 text-blue-500 text-xs">ACTIVATE USER</Button>
            </section>

            <section className="mt-5 bg-white">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                        <Avatar className="h-20 w-20 text-white bg-[#213F7D]">
                            <AvatarFallback className="uppercase md:text-4xl">
                                {getUserInitials(user?.personalInfo?.fullName || "")}
                            </AvatarFallback>
                        </Avatar>
                        <div className="text-center sm:text-left">
                            <h1 className="text-xl font-semibold">{personalInfo.fullName}</h1>
                            <p className="text-sm">{personalInfo.emailAddress}</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-xl md:text-sm">User's Tier</p>
                        <div className="flex items-center justify-center">
                            {renderStars()}
                        </div>
                    </div>

                    <div className="text-center sm:text-right">
                        <p className="text-2xl font-semibold text-black">₦200,000.00</p>
                        <p className="text-sm">{personalInfo.bankAccount}/{personalInfo.bankName}</p>
                    </div>
                </div>

                <div className="flex mt-6 justify-between overflow-x-auto">
                    <ScrollArea>
                        <Tabs tabs={user_nav_tabs} />
                        <ScrollBar orientation="horizontal" className="pt-1" />
                    </ScrollArea>
                </div>
            </section>
        </div>
    );
};

export default DynamicPage;
