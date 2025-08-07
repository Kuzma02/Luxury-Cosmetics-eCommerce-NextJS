"use client";

import Image from "next/image";
import CustomChevronDown from "../public/chevron down 3.svg";
import CustomChevronUp from "../public/chevron up 3.svg";


const SingleProductQuantityInput = ({ quantity, setQuantity }) => {

    return (
        <div className="flex h-10">
            <input
                type="text"
                className="w-16 h-10 border border-blackPrimary text-2xl font-normal text-blackPrimary text-center"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <div className="flex flex-col">
                <button
                    className="text-white bg-blackPrimary h-1/2 px-5 pt-[0.5px]"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    <Image
                        src={CustomChevronUp}
                        alt="Chevron up"
                        className="text-primary w-5 h-5"
                    />
                </button>
                <button
                    className="text-white bg-blackPrimary h-1/2 px-5 pb-[0.5px]"
                    onClick={() => {
                        quantity === 1 ? true : setQuantity(quantity - 1);
                    }}
                >
                    <Image
                        src={CustomChevronDown}
                        alt="Chevron Down"
                        className="text-primary w-5 h-5"
                    />
                </button>
            </div>
        </div>
    );
};

export default SingleProductQuantityInput;
