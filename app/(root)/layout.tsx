import MobileNav from "@/components/headers/MobileNav";
import Sidebar from "@/components/headers/Sidebar";
import Image from "next/image";

import './styles.scss';
import Navbar from "@/components/headers/Navbar";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="layout-container">
            <header className="navbar">
                <Navbar />
            </header>

            <div className="body-container">
                <aside className="sidebar">
                    <Sidebar />
                </aside>

                <section className="content">
                    <div className="root-layout">
                        <Image src="/icons/logo.svg" width={100} height={100} alt="logo" />
                        <MobileNav />
                    </div>
                    {children}
                </section>
            </div>
        </main>
    );
}
