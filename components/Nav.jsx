"use client";
import Link from "next/link";
import {useState} from "react";
import {HiMenu} from "react-icons/hi";
import {HiOutlineX} from "react-icons/hi";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <nav className="h-24 bg-primary border-t border-blackPrimary border-1 flex items-center justify-center">

            <HiMenu
                className="text-3xl text-blackPrimary hidden max-[470px]:block cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            <div className={"md:mr-24"}>
                <ul className="largeScreenMenu flex gap-6">
                    <li>
                        <Link
                            href="/"
                            className="text-blackPrimary text-xl font-[400] max-[600px]:text-lg"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/shop"
                            className="text-blackPrimary text-xl font-[400] max-[600px]:text-lg"
                        >
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-blackPrimary text-xl font-[400] max-[600px]:text-lg"
                        >
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-blackPrimary text-xl font-[400] max-[600px]:text-lg"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-blackPrimary text-xl font-[400] max-[600px]:text-lg"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>


            {isMenuOpen && (
                <div className="menuMobile z-50 bg-primary">
                    <HiOutlineX
                        className="text-3xl text-blackPrimary absolute top-5 right-5 z-40 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <ul className="menuMobileUl bg-primary">
                        <li>
                            <Link href="/" className="text-blackPrimary text-xl font-[400]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/shop"
                                className="text-blackPrimary text-xl font-[400]"
                            >
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-blackPrimary text-xl font-[400]"
                            >
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-blackPrimary text-xl font-[400]"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-blackPrimary text-xl font-[400]"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
