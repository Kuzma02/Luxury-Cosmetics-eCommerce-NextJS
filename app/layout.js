import {Merriweather} from "next/font/google";
import "./globals.css";
import {Footer, Header} from "@/components";

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Luxury Cosmetics",
    description: "Discover the Art of Luxury Skincare and Makeup"
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${merriweather.className} antialiased bg-primary`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
