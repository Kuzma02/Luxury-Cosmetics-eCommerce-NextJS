import {auth} from "@/auth";

const MyAccount = async () => {
    const session = await auth();
    const user = session?.user;

    if (!session) {
        return "You don't have access to this page";
    }

    const userInfo = {
        name: user?.name,
        email: user?.email,
    };


    return (
        <>
            <div>This is my account page</div>
            <pre className="bg-slate-900 p-2 rounded-md text-white">
        {JSON.stringify(userInfo, null, 2)}
      </pre>
        </>
    );
}

export default MyAccount;