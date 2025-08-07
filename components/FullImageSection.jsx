import Image from "next/image";
import FullImageSectionImage from "../public/full image section image.png";
import {Button} from "@/components/index";

const FullImageSection = () => {
    return (
        <div className="relative h-auto">
            <Image src={FullImageSectionImage} alt="women smiling" className="w-full h-full" />
            <div>
                <div className="absolute flex flex-col gap-1 max-sm:gap-0 justify-center items-center w-full text-center bottom-8 left-1/2 transform -translate-x-1/2 max-[500px]:bottom-3">
                    <h2 className="text-5xl font-light text-white max-xl:text-3xl max-md:text-2xl max-sm:text-xl max-[500px]:text-lg max-[380px]:text-sm">Your Journey to Radiant Elegance Awaits</h2>
                    <p className="text-8xl font-normal text-white w-full mb-5 max-xl:text-7xl max-md:text-6xl max-sm:text-5xl max-[500px]:text-4xl max-sm:mb-3 max-[380px]:text-3xl">Embrace the Luxury Experience</p>

                    <Button text="Shop Now"/>
                </div>
            </div>
        </div>
    );
}

export default FullImageSection;