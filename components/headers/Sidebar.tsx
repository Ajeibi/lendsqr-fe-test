import { sidebarLinks } from '@/constants'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <section className='sidebarWrapper overflow-y-auto'>
            <div className='organisation'>
                <Image
                    src='/icons/organisation.png'
                    alt='organisation'
                    width={20}
                    height={20}
                />
                <div className="organisationDiv">
                    Switch Organization
                    <ChevronDown size={15} />
                </div>
            </div>
            <div className='dashboard'>
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
                    <h2 className="homeSidebar">
                        {section.heading}
                    </h2>

                    {section.links.map((link) => (
                        <Link href={link.route} key={link.label}
                            className="homeSidebar-Link"
                        >
                            <Image
                                src={link.imgURL}
                                alt={link.label}
                                width={15}
                                height={15}
                            />
                            <p className="">{link.label}</p>
                        </Link>
                    ))}
                </div>
            ))}
        </section>
    )
}

export default Sidebar
