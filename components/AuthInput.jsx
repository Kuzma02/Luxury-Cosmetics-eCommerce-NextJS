import {HiEnvelope} from "react-icons/hi2";

const AuthInput = ({ label, id, children } : { label: string; id: string; children: React.ReactNode }) => {
    return (
        <div className="flex flex-col w-[400px] max-[410px]:w-[350px] max-[370px]:w-[300px]">
            <label htmlFor={id} className="text-lg mb-1 max-md:text-base">{ label }</label>
            <div className="relative w-full">
                { children }
            </div>

        </div>
    );
}

export default AuthInput;