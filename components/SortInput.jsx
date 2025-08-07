"use client";

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const SortInput = ({ initialSort }) => {
    const [sort, setSort] = useState(initialSort);
    const router = useRouter();

    const sortProducts = () => {
        router.push(`/shop?sort=${sort}`);
    };

    useEffect(() => {
        sortProducts();
    }, [sort]);

    return (
        <div className="flex flex-col justify-start items-start gap-3 w-full">
            <label htmlFor="sort" className="text-xl font-light mr-4">Sort by:</label>
            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-white text-blackPrimary py-4 px-5 w-full text-xl font-light border border-blackPrimary rounded-md">
                <option value="default">Default</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="AtoZ">Alphabetically, A-Z</option>
                <option value="ZtoA">Alphabetically, Z-A</option>
            </select>
        </div>
    );
}

export default SortInput;