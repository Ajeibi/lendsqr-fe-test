import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen w-full justify-between font-inter">
            <div className="auth-asset">
                <div>
                    <Image
                        src="/icons/signIn.svg"
                        alt="Auth image"
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </div>
            </div>
            {children}
        </main>
    );
}
