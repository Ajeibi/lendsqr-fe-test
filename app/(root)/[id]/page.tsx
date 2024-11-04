'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Tabs from '@/components/ui/nav-tab';
import { ScrollBar } from '@/components/ui/scroll-area';
import { getUserInitials } from '@/lib/utils';
import { User } from '@/types';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { MoveLeft, Star } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import './styles.scss';

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
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("https://run.mocky.io/v3/2c6df1a4-8bbd-4b44-9102-ea1574d175fe", {
                    headers: {
                        'Cache-Control': 'no-cache',
                    },
                });

                if (!response.ok) throw new Error("Failed to fetch user data");

                const users: User[] = await response.json();
                const userData = users.find((user) => user.id === Number(id));
                setUser(userData || null);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Error loading user data. Please try again later.");
            }
        };

        if (id) fetchUserData();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!user) return <p>Loading...</p>;

    if (!user) return <p>Loading...</p>;
    const { personalInfo, educationAndEmployment, socials, guarantors, ratings } = user;

    const renderStars = () => {
        return Array.from({ length: 3 }, (_, index) => (
            <Star key={index} className={`h-5 w-5 ${index < ratings ? 'text-yellow-500' : 'text-gray-400'}`} />
        ));
    };

    return (
        <>
            <div className="headerWrapper">
                <Link href="/" className=''>
                    <MoveLeft size={50} />
                </Link>
                <section className="section1">
                    <div className="details">User Details</div>
                    <div className="btnWrapper">
                        <Button className="btn1">BLACKLIST USER</Button>
                        <Button className="btn2">ACTIVATE USER</Button>
                    </div>
                </section>

                <section className="section2">
                    <Button className="btn1">BLACKLIST USER</Button>
                    <Button className="btn2">ACTIVATE USER</Button>
                </section>

                <section className="section3">
                    <div className="section3-1">
                        <div className="section3-1-1">
                            <Avatar className="avatar">
                                <AvatarFallback className="fallback">
                                    {getUserInitials(user?.personalInfo?.fullName || "")}
                                </AvatarFallback>
                            </Avatar>
                            <div className="fullNameDiv">
                                <h1 className="">{personalInfo.fullName}</h1>
                                <p className="">{personalInfo.userId}</p>
                            </div>
                        </div>

                        <div className="starsWrapper">
                            <p className="">User&apos;s Tier</p>
                            <div className="stars">
                                {renderStars()}
                            </div>
                        </div>

                        <div className="bankWrapper">
                            <h1 className="">{educationAndEmployment.loanRepayment}</h1>
                            <p className="">{personalInfo.bankAccount}/{personalInfo.bankName}</p>
                        </div>
                    </div>

                    <div className="tabs overflow-x-auto">
                        <ScrollArea>
                            <Tabs tabs={user_nav_tabs} />
                            <ScrollBar orientation="horizontal" className="pt-1" />
                        </ScrollArea>
                    </div>
                    <div className="nav-tabs">
                        {user_nav_tabs.map((tab, index) => (
                            <Link
                                key={index}
                                href={tab.href}
                                className={`navLinks ${index === 0 ? 'border-b-2 border-blue-500 text-blue-500' : ''
                                    } hover:text-blue-500`}
                            >
                                {tab.name}
                            </Link>
                        ))}
                    </div>

                </section>
            </div>

            <section className='infoSection'>
                {/* PERSONAL INFO */}
                <h2 className="">
                    Personal Information
                </h2>
                <div className="gaps" />
                <div className="grid grid-cols-1 min-[360px]:grid-cols-1 md:grid-cols-4 gap-14 capitalize pb-5">
                    <div className="space-y-2">
                        <p className="infoP">FULL NAME</p>
                        <p className="infoP1">
                            {personalInfo.fullName}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">PHONE NUMBER</p>
                        <p className="infoP1">
                            {personalInfo.phoneNumber}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">EMAIL ADDRESS</p>
                        <p className="infoP1">
                            {personalInfo.emailAddress}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">BVN</p>
                        <p className="infoP1">
                            {personalInfo.bvn}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">GENDER</p>
                        <p className="infoP1">
                            {personalInfo.gender}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">MARITAL STATUS</p>
                        <p className="infoP1">
                            {personalInfo.maritalStatus}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">CHILDREN</p>
                        <p className="infoP1">
                            {personalInfo.children}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">TYPE OF RESIDENCE</p>
                        <p className="infoP1">
                            {personalInfo.typeOfResidence}
                        </p>
                    </div>
                </div>
                <hr className="my-4 border-gray-300" />
                {/* EDUCATION AND EMPLOYMENT */}
                <h2 className="">
                    Education and Employment
                </h2>
                <div className="gaps" />
                <div className="grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-4 gap-14 capitalize pb-5">
                    <div className="space-y-2">
                        <p className="infoP">LEVEL OF EDUCATION</p>
                        <p className="infoP1">
                            {educationAndEmployment.levelOfEducation}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">EMPLOYMENT STATUS</p>
                        <p className="infoP1">
                            {educationAndEmployment.employmentStatus}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">SECTOR OF EMPLOYMENT</p>
                        <p className="infoP1">
                            {educationAndEmployment.sectorOfEmployment}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">DURATION OF EMPLOYMENT</p>
                        <p className="infoP1">
                            {educationAndEmployment.durationOfEmployment}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">OFFICE EMAIL</p>
                        <p className="infoP1">
                            {educationAndEmployment.officeEmail}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">MONTHLY INCOME</p>
                        <p className="infoP1">
                            {educationAndEmployment.monthlyIncome}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">LOAN REPAYMENT</p>
                        <p className="infoP1">
                            {educationAndEmployment.loanRepayment}
                        </p>
                    </div>
                </div>
                <hr className="my-4 border-gray-300" />
                {/* SOCIALS */}
                <h2 className="">
                    Socials
                </h2>
                <div className="gaps" />
                <div className="grid grid-cols-1 min-[360px]:grid-cols-1 md:grid-cols-2 gap-14 capitalize pb-5">
                    <div className="space-y-2">
                        <p className="infoP">TWITTER</p>
                        <p className="infoP1">
                            {socials.twitter}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">FACEBOOK</p>
                        <p className="infoP1">
                            {socials.facebook}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="infoP">INSTAGRAM</p>
                        <p className="infoP1">
                            {socials.instagram}
                        </p>
                    </div>
                </div>
                <hr className="my-4 border-gray-300" />
                {/* GUARANTORS */}
                <h2 className="pt-5">Guarantors</h2>
                <div className="gaps" />
                <div className="grid grid-cols-1 min-[360px]:grid-cols-1 md:grid-cols-4 gap-14 capitalize">
                    {guarantors.map((guarantor, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <hr className="border-gray-300 col-span-full" />}
                            <div className="space-y-2">
                                <p className="infoP">FULL NAME</p>
                                <p className="infoP1">{guarantor.fullName}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="infoP">PHONE NUMBER</p>
                                <p className="infoP1">{guarantor.phoneNumber}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="infoP">EMAIL ADDRESS</p>
                                <p className="infoP1">{guarantor.email}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="infoP">RELATIONSHIP</p>
                                <p className="infoP1">{guarantor.relationship}</p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

            </section>
        </>
    );
};

export default DynamicPage;