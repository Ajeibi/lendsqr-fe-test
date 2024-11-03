'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { sidebarLinks } from "@/constants"
import { ChevronDown, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const MobileNav = () => {

    return (
        <section className="w-full">
            <Sheet>
                <SheetTrigger>
                    <Menu className="text-[#213F7D]" />
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="border-none bg-white"
                >
                    <SheetTitle className="sr-only">Sidebar Navigation</SheetTitle>
                    <Image src="/icons/logo.svg" width={150} height={150} alt="logo" />
                    <div className="overflow-y-auto max-h-[100vh] pr-2">
                        <SheetClose asChild>
                            <nav className="flex flex-col gap-6 pt-16 text-black-2">
                                <div className='pb-5 flex items-center gap-5'>
                                    <Image
                                        src='/icons/organisation.png'
                                        alt='organisation'
                                        width={20}
                                        height={20}
                                    />
                                    <div className="text-sm flex gap-4 items-center cursor-pointer">
                                        Switch Organization
                                        <ChevronDown size={15} />
                                    </div>
                                </div>
                                <div className='flex items-center my-4 gap-5'>
                                    <Image
                                        src='/icons/dashboard.png'
                                        alt='dashboard'
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-sm">Dashboard</p>
                                </div>
                                {sidebarLinks.map((section) => (
                                    <div key={section.heading}>
                                        <h2 className="text-xl font-semibold text-black-2 my-3">
                                            {section.heading}
                                        </h2>

                                        {section.links.map((link) => (
                                            <SheetClose asChild key={link.label}>
                                                <Link href={link.route} key={link.label}
                                                    className="flex items-center gap-5 py-3"
                                                >
                                                    <Image
                                                        src={link.imgURL}
                                                        alt={link.label}
                                                        width={20}
                                                        height={20}
                                                    />
                                                    <p className="">{link.label}</p>
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </div>
                                ))}
                            </nav>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;