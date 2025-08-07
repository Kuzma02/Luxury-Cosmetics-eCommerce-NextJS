import {signIn} from "@/lib/auth"
import {FaGoogle} from "react-icons/fa6";

export default function GoogleSignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <button
                type="submit"
                className="bg-white mb-3 hover:bg-neutral-50 transition-all text-blackPrimary py-3 flex gap-4 justify-center items-center text-xl max-[410px]:text-lg w-[400px] max-[410px]:w-[350px] max-[370px]:w-[300px]">
                <FaGoogle/>Connect with Google
            </button>
        </form>
    )
}