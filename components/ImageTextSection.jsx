import Image from "next/image";
import AboutImage from "../public/about section photo.jpg";
import { Button } from "@/components/index";

const ImageTextSection = ({
                              image,
                              mode,
                              text,
                              title,
                              imageWidth,
                              imageHeight,
                          }) => {
    const widthString = `w-[${imageWidth}px]`;
    return (
        <>
            <div className="flex justify-center items-center px-10 gap-12 h-[700px] max-[1330px]:flex-col max-[1330px]:h-auto max-[1330px]:py-10 max-[500px]:px-5">
                {mode === "imageLeft" && (
                    <Image
                        src={image}
                        alt="women and cream"
                        width={imageWidth}
                        height={imageHeight}
                        className="w-[688px]"
                    />
                )}
                <div className="flex flex-col gap-3">
                    <h2 className="text-6xl font-light text-blackPrimary max-sm:text-5xl max-[450px]:text-4xl">
                        {title}
                    </h2>
                    <p className="text-xl font-light max-w-[580px] max-sm:text-lg max-[450px]:text-base max-[400px]:text-sm">
                        {text}
                    </p>
                    <Button text="Read More" />
                </div>
                {mode === "imageRight" && (
                    <Image
                        src={image}
                        alt="women and cream"
                        width={imageWidth}
                        height={imageHeight}
                        className={widthString}
                    />
                )}
            </div>
        </>
    );
};

export default ImageTextSection;
