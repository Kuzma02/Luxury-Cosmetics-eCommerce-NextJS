
import {HiEnvelope, HiLockClosed} from "react-icons/hi2";
import AuthInput from "@/components/AuthInput";
import Link from "next/link";
import {auth, signIn} from "@/auth";
import GoogleSignIn from "@/components/GoogleSignIn";
import GithubSignIn from "@/components/GithubSignIn";

const Login = async () => {
    const session = await auth();

    const userInfo = {
        name: session?.user?.name,
        email: session?.user?.email,
    };
    return (
        <div className="flex flex-col items-center justify-center gap-7 h-max pt-10 px-2">
            <div className={"flex flex-col gap-2 justify-center items-center"}>
                <h2 className="text-4xl text-blackPrimary font-light max-md:text-3xl">Welcome back!</h2>
                <p className="text-2xl text-blackPrimary font-light text-center max-md:text-xl max-sm:text-lg">Sign in
                    to access your user profile, wish list and
                    purchase history.</p>
            </div>
            <div>
                <GoogleSignIn />
                <GithubSignIn />
            </div>

            <p className="text-xl font-light text-blackPrimary max-md:text-lg">or sign in with credentials</p>

            <form action={async (formData) => {
                "use server";
                await signIn("credentials", {
                    email: formData.get("email"),
                    password: formData.get("password"),
                    redirectTo: '/'
                });

            }} className="flex flex-col gap-5">
                <AuthInput label="Email" id={"emailLoginInput"}>
                    <HiEnvelope className="absolute left-3 top-[12px] border-1 border-blackPrimary bg-white text-xl"/>
                    <input type="email" id="emailLoginInput"
                           name={"email"}
                           className="outline-0 indent-6 py-2 px-5 border border-1 border-blackPrimary w-full text-lg text-blackPrimary"
                           placeholder="Enter your email"/>
                </AuthInput>

                <AuthInput label="Password" id="passwordLoginInput">
                    <HiLockClosed className="absolute left-3 top-[12px] border-1 border-blackPrimary bg-white text-xl"/>
                    <input type="password" id="passwordLoginInput"
                           name={"password"}
                           className="outline-0 indent-6 py-2 px-5 border border-1 border-blackPrimary w-full text-lg text-blackPrimary"
                           placeholder="Enter your password"/>
                </AuthInput>
                <div className="gap-2 flex items-center">
                    <input type="checkbox" id="rememberMeLoginInput"
                           className="w-5 h-5 border-1 cursor-pointer border-blackPrimary max-[400px]:w-4 max-[400px]:h-4"/>
                    <p className="text-blackPrimary font-light text-lg flex items-start max-[400px]:text-base">Remember
                        for 30 days</p>
                </div>
                <button
                    className="w-full h-12 bg-blackPrimary text-white text-xl max-sm:h-10 max-sm:text-xl max-[460px]:text-lg max-[360px]:h-9">
                    Sign in
                </button>
                <Link href="/register"
                      className="text-lg text-blackPrimary font-light text-center max-[400px]:text-base">No
                    account? <span
                        className="font-normal">Create an account.</span></Link>
            </form>


        </div>
    );
}

export default Login;