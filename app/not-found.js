import Link from "next/link";

export default function notFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-primary px-2">
            <h1 className="text-6xl max-sm:text-3xl">404 - Page Not Found</h1>
            <p className="mt-4 text-2xl max-sm:text-lg">The page you are looking for does not exist.</p>
            <Link href="/" className="text-2xl border border-gray-300 py-3 px-10 mt-4 max-sm:text-lg">Continue Shopping</Link>
        </div>
    );
}