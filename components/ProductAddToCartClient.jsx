"use client";

import React, {useState} from "react";
import AddToCartBtn from "./AddToCartBtn";
import SingleProductQuantityInput from "./SingleProductQuantityInput";
import {SingleProductSizeChooser} from "@/components/index";

const ProductAddToCartClient = ({product, packages, packageSizes}) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(packageSizes[0] || "");
    return (
        <div>
            <SingleProductSizeChooser sizes={packageSizes} packages={packages} setSelectedSize={setSelectedSize} selectedSize={selectedSize} />

            <div className="mb-5 max-sm:mb-4">
                <SingleProductQuantityInput
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            </div>
            <AddToCartBtn quantity={quantity} product={product} selectedSize={selectedSize} packageSizes={packageSizes}  />
        </div>
    );
};

export default ProductAddToCartClient;
