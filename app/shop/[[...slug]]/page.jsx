import {ProductGrid} from "@/components";
import {getAllProducts} from "@/lib/api";

const ShopPage = async () => {


    const products = await getAllProducts()


    return (
        <div className="flex flex-col items-center max-w-screen-2xl mx-auto mt-16">
            <div className="px-10 max-[500px]:px-5 text-center">
                <h1 className="capitalize font-light text-5xl text-blackPrimary max-[500px]:text-4xl max-[400px]:text-3xl">
                    Shop Luxury Perfumes
                </h1>
                <p className="text-2xl font-light text-blackPrimary leading-8 mt-8 mb-16 max-[500px]:text-lg max-[400px]:text-sm">
                    Discover our exquisite collection of luxury perfumes, crafted with the finest ingredients to elevate
                    your senses. Each fragrance tells a unique story, designed to captivate and enchant. Explore our
                    range and find your signature scent today.
                </p>


            </div>

            <ProductGrid products={products}/>
        </div>
    );
};

export default ShopPage;
