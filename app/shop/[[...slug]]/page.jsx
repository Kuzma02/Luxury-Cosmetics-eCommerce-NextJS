import {ProductGrid, SortInput} from "@/components";

const ShopPage = async ({
                            params,
                            searchParams
                        }) => {
    let {sort} = await searchParams;

    sort = sort === undefined ? "default" : sort;

    return (
        <div className="flex flex-col items-center max-w-screen-2xl mx-auto mt-16">
            <div className="px-10 max-[500px]:px-5 text-center">
                <h1 className="capitalize font-light text-5xl text-blackPrimary max-[500px]:text-4xl max-[400px]:text-3xl">
                    Luxury perfumes
                </h1>
                <p className="text-2xl font-light text-blackPrimary leading-8 mt-8 mb-16 max-[500px]:text-lg max-[400px]:text-sm">
                    Indulge in the art of sophisticated fragrance with our exclusive
                    selection of luxury perfumes. Each scent is a masterpiece, crafted
                    with the finest ingredients to evoke elegance and timeless allure. Our
                    curated collection features renowned brands and artisanal creations,
                    ensuring that you find a signature scent that resonates with your
                    unique style. From floral bouquets to oriental spices, every bottle
                    tells a story of opulence and refinement.
                </p>
                <div className="flex items-center justify-center pb-10 pl-6">
                    <SortInput initialSort={sort}/>
                </div>


            </div>

            <ProductGrid sort={sort}/>
        </div>
    );
};

export default ShopPage;
