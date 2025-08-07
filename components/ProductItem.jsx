import Image from "next/image";
import { HiMiniStar } from "react-icons/hi2";
import { Button } from "@/components/index";
import Link from "next/link";

const ProductItem = ({ product }) => {
    const packagesObject = product.fields.packages;
    const firstPropertyKey = packagesObject ? Object.keys(packagesObject)[0] : null;
    const firstPropertyValue = packagesObject ? packagesObject[firstPropertyKey] : null;

    return (
        <div className="flex flex-col justify-center text-blackPrimary text-center px-5">
            <Image
                src={`https:${product.fields.mainImage.fields.file.url}`}
                alt={product.fields.title}
                width={356}
                height={356}
                className="w-[356px]"
            />
            <div className="mt-5 flex flex-col gap-3">
                <h3 className="text-3xl max-[450px]:text-2xl">{product.fields.title}</h3>
                <div className="flex items-center justify-center gap-1">
                    <div className="flex justify-center gap-1">
                        <HiMiniStar className="text-blackPrimary text-2xl max-[450px]:text-xl" />
                        <HiMiniStar className="text-blackPrimary text-2xl max-[450px]:text-xl" />
                        <HiMiniStar className="text-blackPrimary text-2xl max-[450px]:text-xl" />
                        <HiMiniStar className="text-blackPrimary text-2xl max-[450px]:text-xl" />
                        <HiMiniStar className="text-blackPrimary text-2xl max-[450px]:text-xl" />
                    </div>
                    <p className="text-xl font-normal max-[450px]:text-lg">125 reviews</p>
                </div>
                <p className="font-bold text-xl max-[450px]:text-lg">
                   From {firstPropertyKey ? `$${firstPropertyValue}` : 'Price not available'}
                </p>
                <div className="flex justify-center">
                    <Link
                        href={`/product/${product.fields.slug}`}
                        className="w-56 h-14 flex justify-center items-center bg-white text-blackPrimary text-2xl max-sm:w-44 max-sm:h-10 max-sm:text-xl max-[460px]:text-lg max-[360px]:w-40 max-[360px]:h-9"
                    >
                        View Product
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;