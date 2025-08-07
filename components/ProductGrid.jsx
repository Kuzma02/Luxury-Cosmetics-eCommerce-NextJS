import ProductItem from "@/components/ProductItem";

const ProductGrid = async ({products}) => {

    if (!products || products.length === 0) {
        return <div>No products available</div>;
    }
    return (
        <div className="flex justify-center gap-24 flex-wrap max-w-screen-2xl mx-auto max-[450px]:gap-16">
            {products.map(product => (
                <ProductItem key={product.sys.id} product={product}/>
            ))}
        </div>
    );
};

export default ProductGrid;