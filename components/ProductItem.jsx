import Image from "next/image";
import { HiMiniStar } from "react-icons/hi2";
import { Button } from "@/components/index";
import Link from "next/link";

const ProductItem = ({ product }: { product: ProductAPI }) => {
    return (
        <div className="flex flex-col justify-center text-blackPrimary text-center px-5">
            <Image
                src={`${product.image}`}
                alt={product.name}
                width={356}
                height={356}
                className="w-[356px]"
            />
            <div className="mt-5 flex flex-col gap-3">
                <h3 className="text-3xl max-[450px]:text-2xl">{product.name}</h3>
                <p className="font-light text-xl max-[450px]:text-lg">
                    {product.shortDescription}
                </p>
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
                    ${product.price}
                </p>
                <div className="flex justify-center">
                    <Link
                        href={`/product/${product.slug}`}
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
