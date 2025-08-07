import EngLanguage from "../public/eng language.png";
import {HiChevronDown} from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import CartHeaderElement from "./CartHeaderElement";
import {auth} from "@/auth";
import {LogoutButton} from "@/components/index";

const HeaderMain = async () => {

    const session = await auth();

    const userInfo = {
        name: session?.user?.name,
        email: session?.user?.email,
    };
    return (
        <header className="bg-primary h-[120px] flex justify-center items-center px-10 max-md:hidden max-[500px]:px-5">
            <div className="mr-auto flex items-center gap-x-2">
                <Image src={EngLanguage} alt="english flag" className="w-9"/>
                <p className="text-blackPrimary">EN</p>
                <HiChevronDown className="text-blackPrimary text-2xl"/>
            </div>
            <Link href="/">
                <h2 className="text-blackPrimary text-4xl font-[400]">COSMETICS</h2>
            </Link>
            <div className="ml-auto flex gap-x-5 text-xl">
                {userInfo?.name ?
                    <div className="flex gap-x-5"><LogoutButton/><Link href={"/my-account"}>Account</Link></div> :
                    (<div className="flex gap-x-5"><Link href={"/login"}>Login</Link><Link href={"/register"}>Register</Link></div>)}



                <CartHeaderElement/>
            </div>
        </header>
    );
};

export default HeaderMain;
