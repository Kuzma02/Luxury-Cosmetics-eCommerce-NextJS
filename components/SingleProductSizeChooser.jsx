"use client";
import {useState} from "react";

const SingleProductSizeChooser = ({sizes, packages, onSizeChange}) => {
    const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
    const selectWhiteColor = "bg-white text-blackPrimary";
    const selectBlackColor = "bg-blackPrimary text-white";

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        onSizeChange?.(size, packages[size]);
    };

    return (
        <div className="mb-8">
            <p className="text-2xl max-sm:text-xl mb-2">Size:</p>
            <div className="flex gap-1">
                {sizes.map(size => (
                    <button
                        key={size}
                        onClick={() => handleSizeSelect(size)}
                        className={`${
                            size === selectedSize ? selectBlackColor : selectWhiteColor
                        } py-1 px-10 text-xl max-[550px]:px-5 max-sm:text-base max-[350px]:px-3 cursor-pointer`}
                    >
                        {size} - ${packages[size]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SingleProductSizeChooser;