"use client";

import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import SingleProductQuantityInput from "./SingleProductQuantityInput";

const ProductAddToCartClient = ({ product }: { product: ProductInCart }) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div>
            <div className="mb-5 max-sm:mb-4">
                <SingleProductQuantityInput
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            </div>
            <AddToCartBtn quantity={quantity} product={product} />
        </div>
    );
};

export default ProductAddToCartClient;
