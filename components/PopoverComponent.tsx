'use client';

import { getStoredUser, getUserInitials, logout } from "@/lib/utils";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback } from "./ui/avatar";
import "./styles.scss";

const PopoverComponent = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '' });
    const router = useRouter();

    useEffect(() => {
        const storedUser = getStoredUser();
        if (storedUser.firstName && storedUser.lastName) {
            setUser(storedUser);
        }
    }, []);

    return (
        <div>
            <Popover>
                <PopoverTrigger className="trigger">
                    <Avatar className="avatar1">
                        <AvatarFallback className="uppercase">
                            {getUserInitials(`${user.firstName} ${user.lastName}`)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="firstName">
                        <p className="">
                            {user.firstName}
                        </p>
                        <ChevronDown size={15} className="chevron" />
                    </div>
                </PopoverTrigger>
                <PopoverContent
                    className="popoverContent"
                    align="start"
                >
                    <div className="fullName">
                        <Avatar className="avatar2">
                            <AvatarFallback className="uppercase">
                                {getUserInitials(`${user.firstName} ${user.lastName}`)}
                            </AvatarFallback>
                        </Avatar>

                        <div className="space-y-0.5 capitalize">
                            <p className="fullNameP">
                                {user.firstName} {user.lastName}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-1 *:cursor-pointer *:flex *:items-center *:gap-2 *:px-5 *:py-3 ">
                        <Link
                            href='/'
                            className="hover:bg-neutral-100 text-[#213F7D]"
                        >
                            <User className="text-[#213F7D]" />
                            My Profile
                        </Link>
                        <Link
                            href='/'
                            className="hover:bg-neutral-100 text-[#213F7D]"
                        >
                            <Settings className="text-[#213F7D]" />
                            Settings
                        </Link>
                        <p
                            className="text-error hover:bg-neutral-100 text-[#213F7D]"
                            onClick={() => logout(router)}
                        >
                            <LogOut className="text-[#213F7D]" />
                            Logout
                        </p>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}

export default PopoverComponent;
