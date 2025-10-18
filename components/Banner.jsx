import Button from "@/components/Button";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="banner h-[900px] flex flex-col justify-end max-sm:h-[600px] max-[460px]:h-[550px] relative">
            <Image src="/main banner.jpg" alt="Banner Image" fill className="object-cover absolute z-[-1]" />
             <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            <div className="px-10 py-8 flex flex-col gap-6 max-sm:gap-3 max-[400px]:px-5 z-10">
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
