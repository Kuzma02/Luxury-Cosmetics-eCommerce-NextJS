import {FaFacebook, FaGoogle} from "react-icons/fa6";
import AuthInput from "@/components/AuthInput";
import {HiEnvelope, HiLockClosed, HiUser} from "react-icons/hi2";
import Link from "next/link";
import {signIn} from "@/auth";
import {prisma} from "@/prisma/prisma";

const Register = () => {

    const signup = async ({
                              name,
                              email,
                              password
                          }) => {
        "use server";
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: password // password will be hashed
            }
        })

        await signIn('credentials', {email: email, password: password, redirectTo: '/my-account'})
    }
    const register = async (formData) => {
        'use server'

        const rawFormData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        }
        if (rawFormData.name && rawFormData.email && rawFormData.password) {
            await signup(rawFormData)
        }

    }

    return (
        <div className="flex flex-col items-center justify-center gap-7 h-max pt-10 px-2">
            <div className={"flex flex-col gap-2 justify-center items-center"}>
                <h2 className="text-4xl text-blackPrimary font-light max-md:text-3xl">Welcome!</h2>
                <p className="text-2xl text-blackPrimary font-light text-center max-md:text-xl max-sm:text-lg">Sign up
                    and start using wish list, user profile and
                    purchase history.</p>
            </div>
            <div>
                <button
                    className="bg-white mb-3 hover:bg-neutral-50 transition-all text-blackPrimary py-3 flex gap-4 justify-center items-center text-xl max-[410px]:text-lg w-[400px] max-[410px]:w-[350px] max-[370px]:w-[300px]">
                    <FaGoogle/>Connect with Google
                </button>
                <button
                    className="bg-white hover:bg-neutral-50 transition-all text-blackPrimary py-3 flex gap-4 justify-center items-center text-xl max-[410px]:text-lg w-[400px] max-[410px]:w-[350px] max-[370px]:w-[300px]">
                    <FaFacebook className="text-2xl max-md:text-xl"/>Connect with Facebook
                </button>
            </div>

            <p className="text-xl font-light text-blackPrimary max-md:text-lg">or sign up with credentials</p>

            <form action={register} className="flex flex-col gap-5">

                <AuthInput label="Your name" id={"nameRegisterInput"}>
                    <HiUser className="absolute left-3 top-[12px] border-1 border-blackPrimary bg-white text-xl"/>
                    <input type="text" id="nameRegisterInput"
                           name={"name"}
                           className="outline-0 indent-6 py-2 px-5 border border-1 border-blackPrimary w-full text-lg text-blackPrimary"
                           placeholder="Enter your name"/>
                </AuthInput>

                <AuthInput label="Email" id={"emailRegisterInput"}>
                    <HiEnvelope className="absolute left-3 top-[12px] border-1 border-blackPrimary bg-white text-xl"/>
                    <input type="email" id="emailRegisterInput"
                           name={"email"}
                           className="outline-0 indent-6 py-2 px-5 border border-1 border-blackPrimary w-full text-lg text-blackPrimary"
                           placeholder="Enter your email"/>
                </AuthInput>

                <AuthInput label="Password" id="passwordRegisterInput">
                    <HiLockClosed className="absolute left-3 top-[12px] border-1 border-blackPrimary bg-white text-xl"/>
                    <input type="password" id="passwordRegisterInput"
                           name={"password"}
                           className="outline-0 indent-6 py-2 px-5 border border-1 border-blackPrimary w-full text-lg text-blackPrimary"
                           placeholder="Enter your password"/>
                </AuthInput>

                <AuthInput label="Confirm Password" id="conPasswordRegisterInput">
                    <HiLockClosed className="absolute left-3 top-[12px] border-1 border-blackPrimary bg-white text-xl"/>
                    <input type="password" id="conPasswordRegisterInput"
                           className="outline-0 indent-6 py-2 px-5 border border-1 border-blackPrimary w-full text-lg text-blackPrimary"
                           placeholder="Confirm your password"/>
                </AuthInput>
                <div className="gap-2 flex items-center">
                    <input type="checkbox" id="rememberMeRegisterInput"
                           className="w-5 h-5 border-1 cursor-pointer border-blackPrimary max-[400px]:w-4 max-[400px]:h-4"/>
                    <p className="text-blackPrimary font-light text-lg flex items-start max-[400px]:text-base">Remember
                        for 30 days</p>
                </div>
                <button
                    type={"submit"}
                    className="w-full h-12 bg-blackPrimary text-white text-xl max-sm:h-10 max-sm:text-xl max-[460px]:text-lg max-[360px]:h-9">
                    Sign up
                </button>
                <Link href="/login" className="text-lg text-blackPrimary font-light text-center max-[400px]:text-base">Already
                    have an
                    account? <span
                        className="font-normal">Sign in.</span></Link>
            </form>
        </div>
    );
}

export default Register;