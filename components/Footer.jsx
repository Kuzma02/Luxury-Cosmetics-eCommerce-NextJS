import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiMiniUsers } from "react-icons/hi2";
import IconBlock from "./IconBlock";
import JoinCommunityFooter from "./JoinCommunityFooter";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <div className="bg-primary text-blackPrimary pt-32 px-10 max-[1000px]:py-16 max-[500px]:px-5">
            <div className="flex justify-center gap-64 h-[700px] max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:gap-10">
                <div>
                    <div>
                        <h2 className="text-4xl font-normal mb-5 max-[500px]:text-2xl">Navigation</h2>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <p className="text-2xl font-light max-[500px]:text-lg">Shop All</p>
                            </li>
                            <li>
                                <p className="text-2xl font-light max-[500px]:text-lg">Take Skincare Quiz</p>
                            </li>
                            <li>
                                <p className="text-2xl font-light max-[500px]:text-lg">Routine Builder</p>
                            </li>
                            <li>
                                <p className="text-2xl font-light max-[500px]:text-lg">Press & Media Enquiries</p>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-32 max-[1000px]:mt-10">
                        <h2 className="text-4xl font-normal mb-5 max-[500px]:text-2xl">Legal</h2>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <p className="text-2xl font-light max-[500px]:text-lg">Refund Policy</p>
                            </li>
                            <li>
                                <p className="text-2xl font-light max-[500px]:text-lg">Privacy Policy</p>
                            </li>
                            <li>
                                <p className="text-2xl font-light max-[500px]:text-lg">Shipping Policy</p>
                            </li>
                            <li>
                                <p className="text-2xl font-light max-[500px]:text-lg">Terms of Service</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-4xl font-normal mb-5 max-[500px]:text-2xl">Contact</h2>
                        <ul className="flex flex-col gap-2 max-[1000px]:gap-1">
                            <li className="flex justify-start items-center gap-5">
                                <IconBlock>
                                    <HiOutlineEnvelope className="text-3xl" />
                                </IconBlock>
                                <div className="flex flex-col">
                                    <p className="text-2xl font-normal max-[500px]:text-xl">Email Address</p>
                                    <p className="text-xl font-light max-[500px]:text-lg">hello@website.com</p>
                                </div>
                            </li>
                            <li className="flex justify-start items-center gap-5">
                                <IconBlock>
                                    <HiMiniUsers className="text-3xl" />
                                </IconBlock>
                                <div className="flex flex-col">
                                    <p className="text-2xl font-normal max-[500px]:text-xl">Socials</p>
                                    <p className="text-xl font-light max-[500px]:text-lg">@Cosmetics</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col mt-32 max-[1000px]:mt-10">
                        <JoinCommunityFooter />
                    </div>
                </div>
            </div>

            <FooterBottom />
        </div>
    );
};

export default Footer;
