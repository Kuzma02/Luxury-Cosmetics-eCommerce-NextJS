import Image from "next/image";
import VisaIcon from "../public/Visa.svg";
import ApplePayIcon from "../public/Apple-Pay.svg";
import CreditCardIcon from "../public/Credit-Card.svg";
import GooglePayIcon from "../public/Google-Pay.svg";
import MasterCardIcon from "../public/Mastercard.svg";

const FooterBottom = () => {
    return (
        <div>
            <div className="border-t border-blackPrimary flex justify-center items-center gap-5 py-10 max-[1000px]:mt-10 max-[500px]:gap-2 max-[500px]:flex-wrap">
                <Image
                    src={VisaIcon}
                    alt="Master card icon"
                    className="w-20 max-[500px]:w-16"
                />
                <Image
                    src={MasterCardIcon}
                    alt="Master card icon"
                    className="w-20 max-[500px]:w-16"
                />
                <Image
                    src={ApplePayIcon}
                    alt="Apple Pay"
                    className="w-20 max-[500px]:w-16"
                />
                <Image
                    src={CreditCardIcon}
                    alt="Credit card pay"
                    className="w-20 max-[500px]:w-16"
                />
                <Image
                    src={GooglePayIcon}
                    alt="Google pay icon"
                    className="w-20 max-[500px]:w-16"
                />
            </div>
            <div className="pt-2 pb-8">
                <p className="text-center text-blackPrimary text-2xl font-light max-[500px]:text-lg">
                    Designed & Developed by Aleksandar Kuzmanović
                </p>
            </div>
        </div>
    );
};

export default FooterBottom;
