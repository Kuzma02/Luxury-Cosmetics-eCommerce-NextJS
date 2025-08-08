import EngLanguage from "../public/eng language.png";
import {HiChevronDown} from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import CartHeaderElement from "./CartHeaderElement";

const HeaderMain = async () => {

    return (
        <header
            className="bg-primary text-center h-[150px] max-w-7xl mx-auto flex justify-center items-center px-10 max-md:hidden max-[500px]:px-5">
            <div className="flex items-center gap-x-2">
                <Image src={EngLanguage} alt="english flag" className="w-9"/>
                <p className="text-blackPrimary">EN</p>
                <HiChevronDown className="text-blackPrimary text-2xl"/>
            </div>

            <div className="flex-1 flex justify-center flex-col items-center gap-6">
                <Link href="/" className="text-blackPrimary text-4xl font-[400]">COSMETICS</Link>

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
                        href="/about-us"
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


            <div className="ml-auto flex gap-x-5 text-xl flex justify-center items-center">


                <CartHeaderElement/>
            </div>
        </header>
    );
};

export default HeaderMain;
