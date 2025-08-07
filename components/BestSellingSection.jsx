import {ProductGrid} from "@/components/index";

const BestSellingSection = ({products}) => {
    return (
        <div className="text-center pt-20 border-t border-white">
            <h2 className="text-blackPrimary text-5xl font-light mb-24 mt-10 max-sm:text-4xl">Our Best Selling Products</h2>
            <ProductGrid products={products} />

        </div>
    );
}

export default BestSellingSection