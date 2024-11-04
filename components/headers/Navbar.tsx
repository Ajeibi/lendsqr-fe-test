import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/icons/logo.svg';
import Bell from '../../public/icons/bell.png';
import SearchInput from "../form/Search";
import PopoverComponent from "../PopoverComponent";
import './styles.scss';

export default function Navbar() {

    return (
        <>
            <nav className="navWrapper">
                <Link className="" href="/">
                    <Image src={Logo} alt="logo" width={100} height={38} />
                </Link>

                <div>
                    <SearchInput />
                </div>

                <div className="navDiv">
                    <div className="navDiv1">
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