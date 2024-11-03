'use client';

import { getStoredUser, getUserInitials, logout } from "@/lib/utils";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback } from "./ui/avatar";

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
                <PopoverTrigger className="flex flex-row gap-3 text-center items-center">
                    <Avatar className="h-10 w-10 border border-[#213F7D] text-[#213F7D]">
                        <AvatarFallback className="uppercase">
                            {getUserInitials(`${user.firstName} ${user.lastName}`)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-3 max-sm:hidden">
                        <p className="text-[#213F7D]">
                            {user.firstName}
                        </p>
                        <ChevronDown size={15} className="text-[#213F7D]" />
                    </div>
                </PopoverTrigger>
                <PopoverContent
                    className="max-md:w-72 md:w-[18.75rem] p-0 bg-white"
                    align="start"
                >
                    <div className="p-5 flex items-center gap-3 bg-[#FAF6FE] mb-3">
                        <Avatar className="h-[3.75rem] w-[3.75rem] border border-[#213F7D] bg-[#213F7D] text-white">
                            <AvatarFallback className="uppercase">
                                {getUserInitials(`${user.firstName} ${user.lastName}`)}
                            </AvatarFallback>
                        </Avatar>

                        <div className="space-y-0.5 capitalize">
                            <p className="text-[#213F7D] font-medium">
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
