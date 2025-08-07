import {
    ProductGrid,
    SingleProductSizeChooser,
} from "@/components";
import ProductAddToCartClient from "@/components/ProductAddToCartClient";
import Image from "next/image";
import React from "react";
import {HiMiniStar} from "react-icons/hi2";
import {getProductBySlug} from "@/lib/api";

const SingleProductPage = async ({params}) => {
    const {slug} = await params;
    const product = await getProductBySlug(slug);


    if (!product) {
        return <div>Product not found</div>;
    }

    // Get packages and the first price for display
    const packages = product.fields.packages || {};
    const packageSizes = Object.keys(packages);
    const firstPrice = packageSizes.length > 0 ? packages[packageSizes[0]] : null;

    return (
        <div>
            <div
                className="flex justify-around items-center py-16 gap-10 px-10 max-xl:flex-col max-[450px]:px-5 max-sm:py-5 max-[450px]:gap-5">
                <Image
                    src={`https:${product.fields.mainImage.fields.file.url}`}
                    width={700}
                    height={500}
                    alt={product.fields.title}
                    className="w-full max-w-[700px] h-auto"
                />
                <div className="max-w-[700px]">
                    <div className="flex flex-col gap-4 max-[450px]:gap-2">
                        <p className="text-2xl font-light max-sm:text-xl max-[450px]:text-lg">
                            Cosmetics
                        </p>
                        <h1 className="text-5xl font-light max-sm:text-4xl max-[450px]:text-3xl">
                            {product.fields.title}
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
                            125 reviews
                        </p>
                    </div>
                    <p className="text-lg font-light my-8 max-sm:text-base max-[450px]:text-sm max-sm:my-4">
                        {product.fields.shortDescription}
                    </p>
                    <p className="text-3xl font-normal mb-8 max-sm:text-2xl max-sm:mb-4">
                        From ${firstPrice || 'Price not available'}
                    </p>



                    <ProductAddToCartClient
                        packages={packages}
                        packageSizes={packageSizes}
                        product={{
                            id: product.sys.id,
                            name: product.fields.title,
                            price: firstPrice || 0,
                            image: `https:${product.fields.mainImage.fields.file.url}`,
                            brand: "Cosmetics",
                            category: "Cosmetics",
                            quantity: 1,
                            size: packageSizes[0] || "",
                            packages: packages,
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
                        {product.fields.longDescription}
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
