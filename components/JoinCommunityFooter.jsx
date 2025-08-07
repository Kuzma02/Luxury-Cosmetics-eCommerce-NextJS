import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

const JoinCommunityFooter = () => {
    return (
        <div className="text-blackPrimary flex flex-col gap-5">
            <h2 className="text-4xl font-normal max-[500px]:text-xl">Join Our Community!</h2>
            <p className="text-xl font-normal max-w-[500px] max-[500px]:text-sm">
                Get access to exclusive codes, educational content and new products
                before anyone else!
            </p>
            <div className="flex">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="text-blackPrimary bg-white h-12 max-w-[450px] outline-none border-0 indent-5 text-xl max-[500px]:h-9 max-[500px]:text-lg"
                />
                <button className="bg-white flex justify-center items-center w-12 h-12 max-[500px]:h-9">
                    <HiArrowSmallRight className="text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default JoinCommunityFooter;
