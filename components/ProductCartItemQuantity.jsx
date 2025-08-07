"use client";

import Image from "next/image";
import React, { useState } from "react";
import CustomChevronDown from "../public/chevron down 3.svg";
import CustomChevronUp from "../public/chevron up 3.svg";
import { useProductStore } from "@/app/_zustand/store";

const ProductCartItemQuantity = ({
                                     id,
                                     startQuantity,
                                 }) => {
    const [quantity, setQuantity] = useState(startQuantity);
    const { updateCartQuantity, calculateTotals } = useProductStore();

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateCartQuantity(id, newQuantity);
        calculateTotals();
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateCartQuantity(id, newQuantity);
            calculateTotals();
        }
    };

    return (
        <div className="flex h-8">
            <input
                type="text"
                className="w-12 h-8 border border-blackPrimary text-lg font-normal text-blackPrimary text-center"
                value={quantity}
                onChange={(e) => updateCartQuantity(id, Number(e.target.value))}
            />
            <div className="flex flex-col">
                <button
                    className="text-white bg-blackPrimary h-1/2 px-5 pt-[0.5px]"
                    onClick={handleIncrement}
                >
                    <Image
                        src={CustomChevronUp}
                        alt="Chevron up"
                        className="text-primary w-4 h-4"
                    />
                </button>
                <button
                    className="text-white bg-blackPrimary h-1/2 px-5 pb-[0.5px]"
                    onClick={handleDecrement}
                >
                    <Image
                        src={CustomChevronDown}
                        alt="Chevron Down"
                        className="text-primary w-4 h-4"
                    />
                </button>
            </div>
        </div>
    );
};

export default ProductCartItemQuantity;
