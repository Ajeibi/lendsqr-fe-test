import { sidebarLinks } from '@/constants'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <section className='text-black-2 mb-20 pr-4 overflow-y-auto max-h-[100vh]'>
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
                    <h2 className="text-xs font-semibold text-black-2 my-3">
                        {section.heading}
                    </h2>

                    {section.links.map((link) => (
                        <Link href={link.route} key={link.label}
                            className="flex items-center gap-5 py-2 text-xs"
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
