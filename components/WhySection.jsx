const WhySection = () => {
    return (
        <div className="flex items-center flex-col gap-5  text-center text-blackPrimary border-t border-white pt-20 my-20 px-10 max-[500px]:px-5">
            <h2 className="text-5xl font-light mb-6 max-[500px]:text-4xl">Why Choose Us?</h2>
            <p className="text-center text-xl font-light max-w-[700px] max-[500px]:text-lg max-[400px]:text-base">Choose us for our unwavering commitment to
                delivering the finest in luxury cosmetics,
                personalized service, and an unparalleled shopping experience that celebrates your
                unique beauty.</p>
            <div className="flex gap-10 mt-14 max-[1350px]:flex-col">
                <div className="flex flex-col gap-2 border-white border-2 px-3 py-8">
                    <h3 className="text-xl max-[400px]:text-lg">Premium Natural Ingredient</h3>
                    <p className="font-light max-w-96 max-[400px]:text-sm">Our products are crafted with premium natural ingredients, sourced
                        from the finest
                        locations around the world to ensure purity and potency.</p>
                </div>
                <div className="flex flex-col gap-2 border-white border-2 px-3 py-8">
                    <h3 className="text-xl max-[400px]:text-lg">Exclusivity and Innovation</h3>
                    <p className="font-light max-w-96 max-[400px]:text-sm">We offer exclusive access to cutting-edge beauty innovations,
                        ensuring you always have the latest
                        and most effective products at your fingertips.</p>
                </div>
                <div className="flex flex-col gap-2 border-white border-2 px-3 py-8">
                    <h3 className="text-xl max-[400px]:text-lg">Sustainability Commitment</h3>
                    <p className="font-light max-w-96 max-[400px]:text-sm">We prioritize eco-friendly practices and sustainable packaging,
                        allowing you to indulge in luxury
                        while caring for the environment.</p>
                </div>
            </div>
        </div>
    );
}

export default WhySection;