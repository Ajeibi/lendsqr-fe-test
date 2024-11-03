import MobileNav from "@/components/headers/MobileNav";
import Sidebar from "@/components/headers/Sidebar";
import Image from "next/image";
import Navbar from "@/components/headers/Navbar";
import PopoverComponent from "@/components/PopoverComponent";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="hidden md:block">
                <Navbar />
            </header>

            <div className="mobile-nav bg-white">
                <Image src="/icons/logo.svg" width={100} height={100} alt="logo" />
                <div className="flex gap-5 items-center">
                    <PopoverComponent />
                    <MobileNav />
                </div>
            </div>

            <div className="flex flex-1 overflow-y-auto">
                <aside className="hidden md:flex md:w-[250px] h-screen bg-white ml-4">
                    <Sidebar />
                </aside>

                <section className="flex-1  overflow-hidden">

                    <main className="p-4">
                        {children}
                    </main>
                </section>
            </div>
        </div>
    );
}
