"use client";
import {useSizeStore} from "@/app/_zustand/sizeStore";
import {useProductStore} from "@/app/_zustand/store";

const AddToCartBtn = ({
                          product,
                          quantity,
                      }) => {
    const {addToCart, calculateTotals} = useProductStore();
    const {size} = useSizeStore();

    return (
        <button
            onClick={() => {
                addToCart({...product, id: product?.id + size, quantity, size});
                calculateTotals();
            }}
            className="w-56 h-14 bg-blackPrimary text-white text-2xl max-sm:w-44 max-sm:h-10 max-sm:text-xl max-[460px]:text-lg max-[360px]:w-40 max-[360px]:h-9"
        >
            Add to cart
        </button>
    );
};

export default AddToCartBtn;
