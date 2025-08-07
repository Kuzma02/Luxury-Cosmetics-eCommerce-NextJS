"use client";

import {useProductStore} from "@/app/_zustand/store";
import Link from "next/link";

const CartHeaderElement = () => {
    const {allQuantity} = useProductStore((state) => state);

    return <Link className="max-md:text-base" href="/cart">Cart ({allQuantity})</Link>;
};

export default CartHeaderElement;
