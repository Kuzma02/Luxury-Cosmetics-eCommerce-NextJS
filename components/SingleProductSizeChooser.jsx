"use client";

import { useSizeStore } from "@/app/_zustand/sizeStore";
import { nanoid } from "nanoid";
import { useEffect } from "react";

const SingleProductSizeChooser = ({ sizes }) => {
    const { changeSize, size } = useSizeStore();

    const selectWhiteColor = "bg-white text-blackPrimary";
    const selectBlackColor = "bg-blackPrimary text-white";

    const handleSizeChange = (size) => {
        changeSize(size);
    };

    useEffect(() => {
        changeSize(sizes[0]);
    }, []);
    return (
        <div className="mb-8">
            <p className="text-2xl max-sm:text-xl mb-2">Size:</p>
            <div className="flex gap-1">
                {sizes?.map((currentSize) => (
                    <p
                        onClick={() => handleSizeChange(currentSize)}
                        className={`${
                            size === currentSize ? selectBlackColor : selectWhiteColor
                        } py-1 px-10 text-2xl max-[550px]:px-5 max-[550px]:text-xl max-[350px]:text-lg max-[350px]:px-3 cursor-pointer`}
                        key={nanoid()}
                    >
                        {currentSize}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default SingleProductSizeChooser;
