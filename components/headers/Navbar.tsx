import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/icons/logo.svg';
import Bell from '../../public/icons/bell.png';
import SearchInput from "../form/Search";
import PopoverComponent from "../PopoverComponent";

export default function Navbar() {

    return (
        <>
            <nav className="relative flex items-center justify-between w-full h-[73px] px-4 lg:px-10">
                <div className="flex items-center gap-20">
                    <Link className="" href="/">
                        <Image src={Logo} alt="logo" width={100} height={38} />
                    </Link>
                </div>

                <div>
                    <SearchInput />
                </div>

                <div className="flex items-center gap-4">
                    <div className="border border-[#213F7D] rounded-full p-[9px] cursor-pointer">
                        <Image src={Bell} alt="bell" width={20} height={20} />
                    </div>
                    <>
                        <PopoverComponent />
                    </>
                </div>
            </nav>
        </>
    );
}