import Link from "next/link";

const ThankYouPage = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 min-h-screen  bg-primary">
        <h1 className="text-7xl mb-4 max-sm:text-5xl">Thank You!</h1>
        <p className="text-2xl max-sm:text-lg">Your submission has been received.</p>
            <Link href="/" className="text-2xl border border-gray-300 py-3 px-10 max-sm:text-lg">Continue Shopping</Link>
        </div>
    );
}

export default ThankYouPage;