import {
    ProductGrid,
    SingleProductSizeChooser,
} from "@/components";
import ProductAddToCartClient from "@/components/ProductAddToCartClient";
import Image from "next/image";
import React from "react";
import {HiMiniStar} from "react-icons/hi2";

const SingleProductPage = async ({params}) => {
    const productParams = await params;

    const data = await fetch(
        `http://localhost:3000/api/products/${productParams.slug}`
    );

    let product = await data.json();

    return (
        <div>
            <div
                className="flex justify-around items-center py-16 gap-10 px-10 max-xl:flex-col max-[450px]:px-5 max-sm:py-5 max-[450px]:gap-5">
                <Image
                    src={`${product?.image}`}
                    width={700}
                    height={500}
                    alt="Product demo image"
                    className="w-full max-w-[700px] h-auto"
                />
                <div className="max-w-[700px]">
                    <div className="flex flex-col gap-4 max-[450px]:gap-2">
                        <p className="text-2xl font-light max-sm:text-xl max-[450px]:text-lg">
                            {product?.category}
                        </p>
                        <h1 className="text-5xl font-light max-sm:text-4xl max-[450px]:text-3xl">
                            {product?.name}
                        </h1>
                    </div>
                    <div className="mt-8 flex items-center gap-3 max-sm:mt-4">
                        <div className="flex gap-1 max-sm:gap-0">
                            <HiMiniStar className="text-blackPrimary text-3xl max-[450px]:text-xl max-sm:text-2xl"/>
                            <HiMiniStar className="text-blackPrimary text-3xl max-[450px]:text-xl max-sm:text-2xl"/>
                            <HiMiniStar className="text-blackPrimary text-3xl max-[450px]:text-xl max-sm:text-2xl"/>
                            <HiMiniStar className="text-blackPrimary text-3xl max-[450px]:text-xl max-sm:text-2xl"/>
                            <HiMiniStar className="text-blackPrimary text-3xl max-[450px]:text-xl max-sm:text-2xl"/>
                        </div>
                        <p className="text-xl font-normal max-sm:text-lg max-[450px]:text-base">
                            {product?.numReviews} reviews
                        </p>
                    </div>
                    <p className="text-lg font-light my-8 max-sm:text-base max-[450px]:text-sm max-sm:my-4">
                        Indulge in the captivating allure of "Luxury Perfume Rose," a
                        sophisticated fragrance that embodies elegance and timeless beauty.
                        This exquisite perfume features the rich, velvety scent of blooming
                        roses, expertly blended with subtle notes of fresh citrus and warm
                        amber.
                    </p>
                    <p className="text-3xl font-normal mb-8 max-sm:text-2xl max-sm:mb-4">
                        ${product?.price}
                    </p>

                    <SingleProductSizeChooser sizes={product?.sizes}/>

                    <ProductAddToCartClient
                        product={{
                            id: product?._id,
                            name: product?.name,
                            price: product?.price,
                            image: product?.image,
                            brand: product?.brand,
                            category: product?.category,
                            quantity: 1,
                            size: "",
                        }}
                    />
                </div>
            </div>

            <div>
                <div
                    className="border-t border-white border-1 px-32 py-24 mt-16 max-lg:px-10 max-[450px]:px-5 max-[450px]:py-12">
                    <h2 className="text-4xl max-sm:text-3xl max-[450px]:text-2xl">
                        Description
                    </h2>
                    <p className="font-light text-lg mt-8 max-sm:text-base max-[450px]:text-sm">
                        {product?.description}
                    </p>
                </div>
            </div>

            <div className="border-y border-white border-1 py-16">
                <h2 className="text-5xl font-light text-center mb-24 max-sm:text-4xl max-sm:mb-12">
                    Similar Products
                </h2>
                <ProductGrid/>
            </div>
        </div>
    );
};

export default SingleProductPage;
