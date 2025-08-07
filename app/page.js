import {
    ArtOfLuxurySkincareSection,
    Banner,
    BestSellingSection, FullImageSection,
    ImageTextSection, MovingSection,
    StatsSection,
    WhySection
} from "@/components";
import {getAllProducts} from "@/lib/api";

export default async function Home() {
    const products = await getAllProducts()

    return (
        <>
            <Banner/>
            <StatsSection/>
            <ImageTextSection
                image="/about section photo.jpg"
                text="Welcome to the ultimate destination for discerning beauty
                    enthusiasts. Our curated collection of
                    premium and luxury cosmetics embodies sophistication, quality, and indulgence. Explore our exclusive
                    range of products that promise not only to enhance your natural beauty but also to elevate your
                    skincare and makeup routine to new heights."
                mode="imageLeft"
                title="About Us"
                imageWidth={688}
                imageHeight={688}
            />
            <BestSellingSection products={products} />
            <WhySection/>
            <ArtOfLuxurySkincareSection/>
            <MovingSection/>
            <div className="my-16">
                <ImageTextSection
                    image="/image text section 2.png"
                    mode="imageRight"
                    text="Welcome to the ultimate destination for discerning
beauty enthusiasts. Our curated collection of premium and
luxury cosmetics embodies sophistication, quality, and
indulgence. Explore our exclusive range of products that
promise not only to enhance your natural beauty but also to elevate your skincare and makeup routine to new heights."
                    title="Exquisite Elegance"
                    imageWidth={588}
                    imageHeight={588}
                />
            </div>
            <FullImageSection/>
        </>
    );
}
