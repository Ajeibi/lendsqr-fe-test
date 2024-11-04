import MobileNav from "@/components/headers/MobileNav";
import Sidebar from "@/components/headers/Sidebar";
import Image from "next/image";
import Navbar from "@/components/headers/Navbar";
import PopoverComponent from "@/components/PopoverComponent";
import Link from "next/link";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="hidden md:block fixed top-0 left-0 w-full z-10 bg-white">
                <Navbar />
            </header>

            <div className="mobile-nav bg-white">
                <Link href="/">
                    <Image src="/icons/logo.svg" width={100} height={100} alt="logo" />
                </Link>
                <div className="flex gap-5 items-center">
                    <PopoverComponent />
                    <MobileNav />
                </div>
            </div>

            <div className="flex flex-1 overflow-y-auto">
                <aside className="hidden md:flex md:w-[250px] h-screen fixed top-0 left-0 mt-20 bg-white ml-4 custom-scrollbar">
                    <Sidebar />
                </aside>

                <section className="flex-1 ml-0 md:ml-[260px] mt-0 md:mt-16 overflow-y-auto custom-scrollbar">
                    <main className="p-4 bg-gray-50 min-h-[calc(100vh-64px)]">
                        {children}
                    </main>
                </section>
            </div>
        </div>
    );
}
