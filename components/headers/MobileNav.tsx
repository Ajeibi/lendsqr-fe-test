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
import './styles.scss';

const MobileNav = () => {

    return (
        <section className="section">
            <Sheet>
                <SheetTrigger>
                    <Menu className="menu" />
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="sheetContent"
                >
                    <SheetTitle className="sr-only">Sidebar Navigation</SheetTitle>
                    <Image src="/icons/logo.svg" width={150} height={150} alt="logo" />
                    <div className="overflow-y-auto max-h-[100vh] pr-2">
                        <SheetClose asChild>
                            <nav className="sheetNav">
                                <div className='sheetDiv1'>
                                    <Image
                                        src='/icons/organisation.png'
                                        alt='organisation'
                                        width={20}
                                        height={20}
                                    />
                                    <div className="sheetDiv">
                                        Switch Organization
                                        <ChevronDown size={15} />
                                    </div>
                                </div>
                                <div className='sheetDiv2'>
                                    <Image
                                        src='/icons/dashboard.png'
                                        alt='dashboard'
                                        width={20}
                                        height={20}
                                    />
                                    <p className="">Dashboard</p>
                                </div>
                                {sidebarLinks.map((section) => (
                                    <div key={section.heading}>
                                        <h2 className="sidebarLinks">
                                            {section.heading}
                                        </h2>

                                        {section.links.map((link) => (
                                            <SheetClose asChild key={link.label}>
                                                <Link href={link.route} key={link.label}
                                                    className="sidebarLinks-Link"
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