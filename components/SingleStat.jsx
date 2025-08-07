import {HiMiniStar} from "react-icons/hi2";
import {ReactNode} from "react";

const SingleStat = ({showStars, mainText, descText}: { showStars: boolean; mainText: string; descText: ReactNode; }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 text-center">
            <p className="text-5xl font-bold text-blackPrimary">{ mainText }</p>
            { showStars && <div className="flex gap-1">
                <HiMiniStar className="text-blackPrimary text-xl"/>
                <HiMiniStar className="text-blackPrimary text-xl"/>
                <HiMiniStar className="text-blackPrimary text-xl"/>
                <HiMiniStar className="text-blackPrimary text-xl"/>
                <HiMiniStar className="text-blackPrimary text-xl"/>
            </div>}
            <div className="text-xl font-normal">{ descText }</div>
        </div>
    );
}

export default SingleStat