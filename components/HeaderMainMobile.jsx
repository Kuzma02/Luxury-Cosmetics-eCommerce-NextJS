import Image from "next/image";
import React from "react";
import {HiChevronDown} from "react-icons/hi";
import EngLanguage from "../public/eng language.png";
import Link from "next/link";
import CartHeaderElement from "@/components/CartHeaderElement";
import {auth} from "@/auth";
import {LogoutButton} from "@/components/index";

const HeaderMainMobile = async () => {
    const session = await auth();

    const userInfo = {
        name: session?.user?.name,
        email: session?.user?.email,
    };
    return (
        <header className="bg-primary h-auto px-10 pt-5 md:hidden max-[400px]:px-5">
            <div
                className="flex items-center justify-center gap-x-12 h-[30px] max-[410px]:gap-x-6 max-[390px]:flex-col max-[390px]:gap-y-4 max-[390px]:h-[80px]">
                <div className="flex items-center gap-x-2">
                    <Image src={EngLanguage} alt="english flag" className="w-9 max-md:w-7"/>
                    <p className="text-blackPrimary max-md:text-sm">EN</p>
                    <HiChevronDown className="text-blackPrimary text-2xl max-md:text-base"/>
                </div>

                <div className="flex gap-x-5 text-xl items-center max-md:text-base">
                    {userInfo?.name ?
                        <div className="flex gap-x-5"><LogoutButton/><Link href={"/my-account"}>Account</Link></div> :
                        (<div className="flex gap-x-5"><Link href={"/login"}>Login</Link><Link
                            href={"/register"}>Register</Link></div>)}
                    <CartHeaderElement/>
                </div>
            </div>

            <div className="bg-primary h-[120px] flex justify-center items-center">
                <Link href={"/"}>
                    <h2 className="text-blackPrimary text-3xl font-[400]">COSMETICS</h2>
                </Link>
            </div>
        </header>
    );
};

export default HeaderMainMobile;
