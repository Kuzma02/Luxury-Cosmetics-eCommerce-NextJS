import Image from "next/image";
import AboutImage from "../public/about section photo.jpg";
import {Button} from "@/components/index";

const AboutSection = () => {
    return (
        <div className="flex justify-center items-center gap-12 h-[700px]">
            <Image src={AboutImage} alt="women and cream" className="w-[688px]"/>
            <div className="flex flex-col gap-3">
                <h2 className="text-6xl font-light text-blackPrimary">About Us</h2>
                <p className="text-xl font-light w-[580px]">Welcome to the ultimate destination for discerning beauty
                    enthusiasts. Our curated collection of
                    premium and luxury cosmetics embodies sophistication, quality, and indulgence. Explore our exclusive
                    range of products that promise not only to enhance your natural beauty but also to elevate your
                    skincare and makeup routine to new heights.</p>
                <Button text="Read More"/>
            </div>
        </div>
    );
}

export default AboutSection;