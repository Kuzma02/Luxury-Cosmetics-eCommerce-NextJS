import Image from "next/image";
import React from "react";
import {HiChevronDown} from "react-icons/hi";
import EngLanguage from "../public/eng language.png";
import Link from "next/link";
import CartHeaderElement from "@/components/CartHeaderElement";

const HeaderMainMobile = async () => {

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
                    <CartHeaderElement/>
                </div>
            </div>

            <div className="bg-primary h-[150px] flex flex-col gap-5 justify-center items-center">
                <Link href={"/"}>
                    <h2 className="text-blackPrimary text-3xl font-[400]">COSMETICS</h2>
                </Link>

                <div className="flex gap-5">
                    <Link
                        href="/"
                        className="text-blackPrimary text-xl font-[400] max-[600px]:text-lg"
                    >
                        Home
                    </Link>

                    <Link
                        href="/shop"
                        className="text-blackPrimary text-xl font-[400] max-[600px]:text-lg"
                    >
                        Shop
                    </Link>

                    <Link
                        href="/about"
                        className="text-blackPrimary text-xl font-[400] max-[600px]:text-lg"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/about"
                        className="text-blackPrimary text-xl font-[400] max-[600px]:text-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderMainMobile;
