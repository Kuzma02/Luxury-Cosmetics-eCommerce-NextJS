import {signIn} from "@/lib/auth"
import {FaGithub} from "react-icons/fa6";

export default function GithubSignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
        >
            <button
                className="bg-white hover:bg-neutral-50 transition-all text-blackPrimary py-3 flex gap-4 justify-center items-center text-xl max-[410px]:text-lg w-[400px] max-[410px]:w-[350px] max-[370px]:w-[300px]">
                <FaGithub className="text-2xl max-md:text-xl"/>Connect with GitHub
            </button>

        </form>
    )
}