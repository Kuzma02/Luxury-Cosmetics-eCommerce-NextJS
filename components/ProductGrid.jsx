import ProductItem from "@/components/ProductItem";

const ProductGrid = async ({ sort }) => {
    console.log(`http://localhost:3001/products?sort=${sort || "default"}`);
    const productsAPI= await fetch(`http://localhost:3001/products?order=${sort || "default"}`).then(res => res.json());

    return (
        <div className="flex justify-center gap-24 flex-wrap max-w-screen-2xl mx-auto max-[450px]:gap-16">
            { productsAPI && productsAPI?.products?.map(product => (
                <ProductItem key={product._id} product={product}/>
            )) }
        </div>
    )
}

export default ProductGrid;