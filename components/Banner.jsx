import Button from "@/components/Button";

const Banner = () => {
    return (
        <div className="banner h-[900px] flex flex-col justify-end max-sm:h-[700px] max-[460px]:h-[550px]">
            <div className="px-10 py-8 flex flex-col gap-6 max-sm:gap-3 max-[400px]:px-5">
                <h2 className="text-primary text-5xl leading-[50px] max-sm:text-4xl max-[460px]:text-3xl max-[360px]:text-2xl">
                    Elevate Your Beauty: <br />
                    Discover the Essence of Premium Elegance
                </h2>
                <Button text="Shop Now" />
            </div>
        </div>
    );
};

export default Banner;
