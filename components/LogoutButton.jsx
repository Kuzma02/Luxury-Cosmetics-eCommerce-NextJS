"use client";

import {signOut} from "next-auth/react";

const LogoutButton = () => {
    return <button className={"max-md:text-base"} onClick={() => signOut()}>Sign Out</button>
}

export default LogoutButton;