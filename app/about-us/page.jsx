import {
    ImageTextSection,
    StatsSection,
    FullImageSection
} from "@/components";

export default function AboutUsPage() {
    return (
        <div>
            {/* Hero Section */}
            <div className="py-24 px-10 max-sm:py-12 max-[450px]:px-5 text-center">
                <h1 className="text-6xl font-light mb-6 max-sm:text-4xl max-[450px]:text-3xl">
                    About Us
                </h1>
                <p className="text-xl font-light max-w-4xl mx-auto max-sm:text-lg max-[450px]:text-base">
                    Welcome to the ultimate destination for discerning beauty enthusiasts.
                    Our curated collection of premium and luxury cosmetics embodies
                    sophistication, quality, and indulgence.
                </p>
            </div>

            {/* Our Story Section */}
            <ImageTextSection
                image="/about section photo.jpg"
                text="Founded with a passion for excellence, we have been at the forefront of luxury beauty for over a decade. Our journey began with a simple mission: to bring the world's finest cosmetics to those who appreciate true quality and craftsmanship. Every product in our collection is carefully selected to meet our exacting standards."
                mode="imageLeft"
                title="Our Story"
                imageWidth={688}
                imageHeight={688}
            />

            {/* Stats Section */}
            <div className="my-16">
                <StatsSection />
            </div>

            {/* Our Mission Section */}
            <div className="my-16">
                <ImageTextSection
                    image="/image text section 2.png"
                    mode="imageRight"
                    text="We believe that beauty is an art form, and every individual deserves access to products that enhance their natural radiance. Our mission is to curate an exceptional selection of premium cosmetics that not only transform your appearance but also elevate your daily beauty ritual into a luxurious experience."
                    title="Our Mission"
                    imageWidth={588}
                    imageHeight={588}
                />
            </div>

            {/* Values Section */}
            <div className="border-y border-white border-1 py-24 px-32 max-lg:px-10 max-[450px]:px-5 max-[450px]:py-12">
                <h2 className="text-5xl font-light text-center mb-16 max-sm:text-4xl max-sm:mb-8">
                    Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-md:gap-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-normal mb-4 max-sm:text-xl">Quality</h3>
                        <p className="text-lg font-light max-sm:text-base">
                            We source only the finest ingredients and work with brands
                            that share our commitment to excellence.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-normal mb-4 max-sm:text-xl">Innovation</h3>
                        <p className="text-lg font-light max-sm:text-base">
                            We stay ahead of beauty trends, bringing you the latest
                            breakthrough products and technologies.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-normal mb-4 max-sm:text-xl">Luxury</h3>
                        <p className="text-lg font-light max-sm:text-base">
                            Every aspect of our service is designed to provide
                            an elevated, luxurious experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-24 px-32 max-lg:px-10 max-[450px]:px-5 max-[450px]:py-12">
                <h2 className="text-5xl font-light text-center mb-8 max-sm:text-4xl">
                    Our Team
                </h2>
                <p className="text-lg font-light text-center max-w-4xl mx-auto mb-16 max-sm:text-base max-sm:mb-8">
                    Our team is composed of experienced professionals who are passionate
                    about their work and dedicated to providing exceptional service to
                    every customer. From beauty experts to customer care specialists,
                    we work together to ensure your experience exceeds expectations.
                </p>
            </div>

            {/* Full Image Section */}
            <FullImageSection />

            {/* Contact CTA Section */}
            <div className="py-24 px-10 max-sm:py-12 max-[450px]:px-5 text-center bg-white/5">
                <h2 className="text-4xl font-light mb-6 max-sm:text-3xl max-[450px]:text-2xl">
                    Get in Touch
                </h2>
                <p className="text-lg font-light mb-8 max-sm:text-base">
                    Have questions about our products or need personalized recommendations?
                    Our beauty experts are here to help.
                </p>
                <p className="text-xl font-normal max-sm:text-lg">
                    Contact us for more information!
                </p>
            </div>
        </div>
    );
}